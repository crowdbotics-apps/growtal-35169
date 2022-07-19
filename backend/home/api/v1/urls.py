from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from rest_auth.views import PasswordChangeView
from django_rest_passwordreset.views import reset_password_confirm
from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    UpdateUserViewset,
    UserProfileViewset,
    GoogleLogin,
    AppleLogin,
    PrivacyPolicyViewset,
    TermsAndConditionsViewset,
    FeedbackViewset,
    LinkedinLogin,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("updater_user", UpdateUserViewset, basename="updater_user")
router.register("user_profile", UserProfileViewset, basename="user_profile")
router.register("terms_and_conditions", TermsAndConditionsViewset, basename="terms_and_conditions")
router.register("privacy_policy", PrivacyPolicyViewset, basename="privacy_policy")
router.register("user_feedback", FeedbackViewset, basename="user_feedback")


urlpatterns = [
    path("", include(router.urls)),
    path("password/change/", PasswordChangeView.as_view(), name='rest_password_change'),
    path("password/reset/", include('django_rest_passwordreset.urls', namespace='password_reset')),
    path("password/reset/confirm/<token>/", reset_password_confirm, name='password_reset_confirm'),
    re_path(r'^login/google/$', GoogleLogin.as_view(), name='google_login'),
    re_path(r'^login/apple/$', AppleLogin.as_view(), name='apple_login'),
    re_path(r'^login/linkedin/$', LinkedinLogin.as_view(), name='linkedin_login'),
]
