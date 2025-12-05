from django.shortcuts import render
from rest_framework import generics, permissions


from .models import Tag
from .serializers import TagSerializer

# Create your views here.

class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [permissions.IsAuthenticated] 