from django.urls import path

from . import views

app_name = "user_profile"
urlpatterns = [
    path("profile/<int:pk>/", views.UserProfileDetail.as_view(), name="profile_detail"),
    path("profile/", views.UserProfileList.as_view(), name="profile_list"),
    path("user/", views.UserList.as_view(), name="user_list"),
]
