from rest_framework import serializers
from .models import Profile, User

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = (
            "id", 
            "username", 
            "email", 
            "first_name", 
            "last_name",
            "is_staff",
            "is_superuser",
            "profile",)

class SignupSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'password',]
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        return data

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
