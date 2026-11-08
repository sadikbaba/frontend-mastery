from django.conf import settings  # noqa: I001
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import RegistrationSerializer, UsernameOrEmailTokenSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from rest_framework_simplejwt.views import TokenRefreshView

from rest_framework_simplejwt.exceptions import InvalidToken, TokenError

from rest_framework_simplejwt.tokens import RefreshToken


@ensure_csrf_cookie
def csrf_cookie(request):
    return JsonResponse({"message": "CSRF cookie set"})


class CSRFProtectedMixin:
    @method_decorator(csrf_protect)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)


class RegistrationView(CSRFProtectedMixin, APIView):
    permission_classes = [AllowAny]
    authentication_classes = []

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


class LoginView(CSRFProtectedMixin, TokenObtainPairView):
    permission_classes = [AllowAny]

    authentication_classes = []

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
                secure=not settings.DEBUG,
            )

            # Store refresh token in a more restricted cookie
            response.set_cookie(
                key="refresh_token",
                value=refresh_token,
                path="/v1/api/accounts/",
                httponly=True,
                samesite="Lax",
                secure=not settings.DEBUG,
            )

            response.data = {"message": "Login successful"}
        return response


class RefreshView(CSRFProtectedMixin, TokenRefreshView):
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("refresh_token")

        if not refresh_token:
            return Response({"error": "Refresh token not found in cookies"}, status=401)

        serializer = self.get_serializer(data={"refresh": refresh_token})

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0]) from e

        access_token = serializer.validated_data["access"]
        refresh_token = serializer.validated_data["refresh"]

        response = Response(
            {"message": "Token refreshed successfully"},
            status=200,
        )

        response.set_cookie(
            key="access_token",
            value=access_token,
            path="/",
            httponly=True,
            samesite="Lax",
            secure=not settings.DEBUG,
        )

        response.set_cookie(
            key="refresh_token",
            value=refresh_token,
            path="/v1/api/accounts/",
            httponly=True,
            samesite="Lax",
            secure=not settings.DEBUG,
        )
        return response


class LogoutView(CSRFProtectedMixin, APIView):
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):

        refresh_token = request.COOKIES.get("refresh_token")

        if refresh_token:
            try:
                token = RefreshToken(refresh_token)
                token.blacklist()
            except TokenError:
                pass  # Token is invalid or already blacklisted, ignore

        response = Response({"message": "Logout successful"}, status=200)
        response.delete_cookie("access_token", path="/")
        response.delete_cookie("refresh_token", path="/v1/api/accounts/")

        return response
