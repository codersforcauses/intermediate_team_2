from django.urls import path
<<<<<<< HEAD

=======
>>>>>>> Will_branch
from . import views

app_name = "user_profile"
urlpatterns = [
<<<<<<< HEAD
    path("profile/<int:pk>/", views.UserProfileDetail.as_view(), name="profile_detail"),
    path("profile/", views.UserProfileList.as_view(), name="profile_list"),
    path("user/", views.UserList.as_view(), name="user_list"),
]
=======
    path("", views.UserList.as_view(), name="user-list"),
    path("profile/", views.UserProfileList.as_view(), name="profile-list"),
    path("profile/<int:pk>/", views.UserProfileDetail.as_view(), name="user-profile-detail"),
    ]

>>>>>>> Will_branch
