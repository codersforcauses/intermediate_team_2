from rest_framework import serializers
from .models import Event
from user.serializers import UserSerializer


class EventSerializer(serializers.ModelSerializer):
    organizer = UserSerializer(read_only=True)
    participants = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = ("id", "organizer", "participants", "event_name", "event_description","event_date", "event_location", "created_at" )
        read_only_fields = ("created_at",)
