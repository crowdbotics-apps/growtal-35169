from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ReferViewset


router = DefaultRouter()
router.register("refer", ReferViewset, basename="refer")

urlpatterns = [
    path("dashboard/", include(router.urls)),
]
