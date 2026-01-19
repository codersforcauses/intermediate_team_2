from rest_framework import serializers
from .models import Friend, Message
from django.contrib.auth import get_user_model

User = get_user_model()

class FriendSerializer(serializers.ModelSerializer):
    friend_username = serializers.CharField(source="friend.username", read_only=True)

    class Meta:
        model = Friend
        fields = ["id", "friend", "friend_username"]

class MessageSerializer(serializers.ModelSerializer):
    sender_username = serializers.CharField(source="sender.username", read_only=True)
    receiver_username = serializers.CharField(source="receiver.username", read_only=True)

    class Meta:
        model = Message
        fields = ["id", "sender", "receiver", "sender_username", "receiver_username", "content", "timestamp"]
