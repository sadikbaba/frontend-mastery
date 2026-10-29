from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import RegistrationSerializer, UsernameOrEmailTokenSerializer


class RegistrationView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    "message": "User registered successfully",
                    "username": serializer.data["username"],
                },
                status=201,
            )

        return Response(serializer.errors, status=400)


class LoginView(TokenObtainPairView):
    serializer_class = UsernameOrEmailTokenSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if response.status_code == 200:
            access_token = response.data.get("access")
            refresh_token = response.data.get("refresh")

            # Store access token in a cookie
            response.set_cookie(
                key="access_token",
                value=access_token, 
                path="/",
                httponly=True,
                samesite="Lax",
                secure=not settings.DEBUG

            )

            # Store refresh token in a more restricted cookie
            response.set_cookie(
                key="refresh_token",
                value=refresh_token,
                path="/v1/api/accounts/",
                httponly=True,
                samesite="Lax",
                secure=not settings.DEBUG
            )

            response.data = {"message" : "Login successful"}
        return response