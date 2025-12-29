from django.urls import path
from . import views

app_name = "user"
urlpatterns = [
    path("", views.UserList.as_view(), name="user-list"),
    path("profile/", views.UserProfileList.as_view(), name="profile-list"),
    path("profile/<int:pk>/", views.UserProfileDetail.as_view(), name="user-profile-detail"),
    path("register/", views.RegisterView.as_view(), name="user-register"),
    path("me/", views.MeView.as_view(), name="me"),
    ]

