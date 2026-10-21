from rest_framework.serializers import ModelSerializer

from .models import Application


class ApplicationSerializer(ModelSerializer):
    class Meta:
        model = Application
        fields = ['id', 'company', 'role', 'status', 'notes', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']