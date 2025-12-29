from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .permissions import IsUserOrReadOnly
from rest_framework.permissions import AllowAny

from .models import Profile, User
from .serializers import ProfileSerializer, UserSerializer, RegisterSerializer

# Create your views here.

class UserList(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
class UserProfileList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class UserProfileDetail(generics.RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticated, IsUserOrReadOnly)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class MeView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer
    
    def get(self, request):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data)

class RegisterView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
