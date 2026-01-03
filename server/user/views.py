from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .permissions import IsUserOrReadOnly

from .models import Profile, User
from .serializers import ProfileSerializer, UserSerializer

from rest_framework.permissions import AllowAny # 暂时加上

# Create your views here.

class UserList(APIView):
    permission_classes = (AllowAny,)#permissions.IsAuthenticated
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
class UserProfileList(generics.ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class UserProfileDetail(generics.RetrieveUpdateAPIView):
    permission_classes = (AllowAny, )
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
