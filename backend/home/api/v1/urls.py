from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    UpdateUserViewset,
    UserProfileViewset,
    GoogleLogin,
    FacebookLogin,
    AppleLogin,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("updater_user", UpdateUserViewset, basename="updater_user")
router.register("user_profile", UserProfileViewset, basename="user_profile")


urlpatterns = [
    path("", include(router.urls)),
    # path("password/change/", PasswordChangeView.as_view(), name='rest_password_change'),
    # path("password/reset/", include('django_rest_passwordreset.urls', namespace='password_reset')),
    re_path(r'^login/google/$', GoogleLogin.as_view(), name='google_login'),
    re_path(r'^login/facebook/$', FacebookLogin.as_view(), name='facebook_login'),
    re_path(r'^login/apple/$', AppleLogin.as_view(), name='apple_login'),
]
