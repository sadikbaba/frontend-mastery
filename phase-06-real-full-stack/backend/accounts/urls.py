from django.urls import path

from .views import LoginView, RegistrationView, csrf_cookie, RefreshView, LogoutView

urlpatterns = [
    path("register/", RegistrationView.as_view()),
    path("login/", LoginView.as_view(), name="login"),
    path("csrf/", csrf_cookie, name="csrf_cookie"),
    path("refresh/", RefreshView.as_view(), name="token_refresh"),
    path("logout/", LogoutView.as_view(), name="logout"),
]
