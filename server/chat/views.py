from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.db.models import Q
from .models import Friend, Message
from .serializers import FriendSerializer, MessageSerializer

User = get_user_model()

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_friend(request):
    username = request.data.get("username")
    try:
        friend_user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response({"detail": "User not found"}, status=404)

    if Friend.objects.filter(user=request.user, friend=friend_user).exists():
        return Response({"detail": "Already friends"}, status=400)

    Friend.objects.create(user=request.user, friend=friend_user)
    Friend.objects.create(user=friend_user, friend=request.user)
    return Response({"detail": "Friend added"})

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def list_friends(request):
    friends = Friend.objects.filter(user=request.user)
    serializer = FriendSerializer(friends, many=True)
    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def messages_with_friend(request, friend_id):
    user = request.user
    messages = Message.objects.filter(
        Q(sender=user, receiver_id=friend_id) |
        Q(sender_id=friend_id, receiver=user)
    ).order_by("timestamp")
    serializer = MessageSerializer(messages, many=True)
    return Response(serializer.data)
