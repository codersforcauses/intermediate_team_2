from rest_framework import serializers
from .models import Advertising
from user.serializers import UserSerializer


class AdvertisingSerializer(serializers.ModelSerializer):
    manager = UserSerializer(read_only=True)

    class Meta:
        model = Advertising
        fields = ("id", "manager", "promotion_price", "ad_content", "created_at" )
        read_only_fields = ("created_at",)
