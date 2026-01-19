from django.urls import path
from . import views

app_name = "advertising"
urlpatterns = [
    path("", views.AdvertisingList.as_view(), name="advertising-list"),
    ]

