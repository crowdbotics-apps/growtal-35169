import requests
from django.core.files import File
from django.core.files.temp import NamedTemporaryFile
from rest_framework import status
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from allauth.socialaccount.providers.apple.views import AppleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.models import SocialAccount

from home.models import Feedback
from users.models import Profile
from modules.privacy_policy.models import PrivacyPolicy
from modules.terms_and_conditions.models import TermAndCondition

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
    UpdateUserSerializer,
    RestSocialLoginSerializer,
    UserProfileSerializer,
    CustomSocialLoginSerializer,
    FeedbackSerializer,
)
from users.models import User


def save_image_from_url(model, url, name):
    r = requests.get(url)
    img_temp = NamedTemporaryFile(delete=True)
    img_temp.write(r.content)
    img_temp.flush()
    model.name = name
    model.profile_picture.save("{}.jpg".format(model.username), File(img_temp), save=True)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        if not user.approve:
            return Response(
                {'non_field_errors': 'Kindly Wait for Account Approval. This usually takes some moments'},
                status=status.HTTP_400_BAD_REQUEST
            )
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        user_profile = Profile.objects.filter(user_id=user.id).first()
        return Response({"token": token.key, "user": user_serializer.data, "profile": user_profile})


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    serializer_class = CustomSocialLoginSerializer
    client_class = OAuth2Client
    permission_classes = [AllowAny, ]
    callback_url = "https://developers.google.com/oauthplayground"

    def get_response(self):
        serializer_class = self.get_response_serializer()
        user = self.user
        user_extra_data = SocialAccount.objects.filter(user=self.request.user).first().extra_data
        name = user_extra_data["name"]
        profile_image_url = user_extra_data["picture"]
        if not user.profile_picture:
            save_image_from_url(user, profile_image_url, name)
        user_detail = UserSerializer(user, many=False, context={"request": self.request})
        serializer = serializer_class(instance=self.token, context={'request': self.request})
        resp = serializer.data
        if not user_detail.data.get('approve'):
            return Response(
                {'non_field_errors': 'Kindly Wait for Account Approval. This usually takes some moments'},
                status=status.HTTP_400_BAD_REQUEST
            )
        resp["token"] = resp["key"]
        resp.pop("key")
        resp["user"] = user_detail.data
        resp['profile'] = Profile.objects.filter(user_id=user_detail.data.get('id')).first()
        response = Response(resp, status=status.HTTP_200_OK)
        return response


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
    serializer_class = CustomSocialLoginSerializer
    permission_classes = [AllowAny, ]

    def get_response(self):
        serializer_class = self.get_response_serializer()
        user = self.user
        user_extra_data = SocialAccount.objects.filter(user=self.request.user).first().extra_data
        name = user_extra_data["name"]
        profile_image_url = user_extra_data["picture"]["data"]["url"]
        if not user.profile_picture:
            save_image_from_url(user, profile_image_url, name)
        user_detail = UserSerializer(user, many=False)
        serializer = serializer_class(instance=self.token, context={'request': self.request})
        resp = serializer.data
        if not user_detail.data.get('approve'):
            return Response(
                {'non_field_errors': 'No Account is Registered with Email associated with your Social Account'},
                status=status.HTTP_400_BAD_REQUEST
            )
        resp["token"] = resp["key"]
        resp.pop("key")
        resp["user"] = user_detail.data
        resp['profile'] = Profile.objects.filter(user_id=user_detail.data.get('id')).first()
        response = Response(resp, status=status.HTTP_200_OK)
        return response


class AppleLogin(SocialLoginView):
    authentication_classes = []
    permission_classes = [AllowAny]
    adapter_class = AppleOAuth2Adapter
    serializer_class = RestSocialLoginSerializer

    def get_response(self):
        serializer_class = self.get_response_serializer()
        user = self.user
        user_detail = UserSerializer(user, many=False)
        serializer = serializer_class(instance=self.token, context={'request': self.request})
        resp = serializer.data
        if not user_detail.data.get('approve'):
            return Response(
                {'non_field_errors': 'No Account is Registered with Email associated with your Social Account'},
                status=status.HTTP_400_BAD_REQUEST
            )
        resp["user"] = user_detail.data
        resp["token"] = resp["key"]
        resp['profile'] = Profile.objects.filter(user_id=user_detail.data.get('id')).first()
        response = Response(resp, status=status.HTTP_200_OK)
        return response


class UpdateUserViewset(ModelViewSet):
    serializer_class = UpdateUserSerializer
    http_method_names = ['get', 'patch', 'delete']
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = User.objects.filter(id=self.request.user.id)
        return queryset


class UserProfileViewset(ModelViewSet):
    serializer_class = UserProfileSerializer
    http_method_names = ['get', 'post', 'patch', 'delete']
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Profile.objects.filter(user_id=self.request.user.id)
        return queryset


class PrivacyPolicyViewset(ViewSet):
    permission_classes = [AllowAny, ]

    def list(self, request, *args, **kwargs):
        privacy_policy = PrivacyPolicy.objects.filter(is_active=True).first().body
        return Response({"privacy_policy": privacy_policy})


class TermsAndConditionsViewset(ViewSet):
    permission_classes = [AllowAny, ]

    def list(self, request, *args, **kwargs):
        terms_and_condition = TermAndCondition.objects.filter(is_active=True).first().body
        return Response({"terms_and_condition": terms_and_condition})


class FeedbackViewset(ModelViewSet):
    serializer_class = FeedbackSerializer
    http_method_names = ['post']
    permission_classes = [IsAuthenticated]
