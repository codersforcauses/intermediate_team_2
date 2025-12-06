from django.shortcuts import render
from rest_framework import generics, permissions


from .models import Advertising
from .serializers import AdvertisingSerializer

# Create your views here.

class AdvertisingList(generics.ListCreateAPIView):
    queryset = Advertising.objects.all()
    serializer_class = AdvertisingSerializer
    permission_classes = [permissions.IsAuthenticated] 