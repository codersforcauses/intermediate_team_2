from django.urls import path
from . import views

urlpatterns = [
    path("friends/", views.list_friends),
    path("add_friend/", views.add_friend),
    path("messages/<int:friend_id>/", views.messages_with_friend),
]
