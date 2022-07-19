from rest_framework.serializers import ModelSerializer
from dashboard.models import Refer


class ReferSerializer(ModelSerializer):
    class Meta:
        model = Refer
        fields = '__all__'
