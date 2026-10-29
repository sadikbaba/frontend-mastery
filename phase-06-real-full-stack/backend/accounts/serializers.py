from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class RegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    class Meta:
        model = User
        fields = ["username", "email", "password"]

        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    def validate_email(self, value):
        email = User.objects.filter(email=value).exists()
        if email:
           raise serializers.ValidationError("A user with that email already exists.")
        return value


class UsernameOrEmailTokenSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        identifier = attrs["username"]

        if "@" in identifier:
            user = User.objects.filter(email=identifier).first()
            if user:
                attrs["username"] = user.username
        return super().validate(attrs)
