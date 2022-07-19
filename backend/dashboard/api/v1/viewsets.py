from rest_framework.viewsets import ModelViewSet
from dashboard.models import Refer
from rest_framework.permissions import IsAuthenticated
from .serializers import ReferSerializer


class ReferViewset(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ReferSerializer
    http_method_names = ['post', 'get']
    queryset = Refer.objects.select_related('user').all()

    def get_queryset(self):
        return self.queryset.filter(user_id=self.request.user.id)
