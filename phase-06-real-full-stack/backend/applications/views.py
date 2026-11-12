from rest_framework import viewsets, filters

from .models import Application
from .serializers import ApplicationSerializer


class ApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = ApplicationSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ["company", "role", "notes"]

    def get_queryset(self):
        queryset = Application.objects.filter(user=self.request.user)

        status = self.request.query_params.get("status")

        if status:
            queryset = queryset.filter(status=status)

        return queryset.order_by("-created_at", "-pk")

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
