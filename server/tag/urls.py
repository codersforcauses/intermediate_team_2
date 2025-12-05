from django.urls import path
from . import views

app_name = "tag"
urlpatterns = [
    path("", views.TagList.as_view(), name="tag-list"),
    ]

