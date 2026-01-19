import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.contrib.auth import get_user_model
from .models import Message
from django.db.models import Q

User = get_user_model()

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope["user"]
        self.friend_id = int(self.scope["url_route"]["kwargs"]["friend_id"])
        self.room_name = f"chat_{min(self.user.id, self.friend_id)}_{max(self.user.id, self.friend_id)}"
        self.room_group_name = self.room_name

        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

        previous_messages = await self.get_previous_messages()
        for msg in previous_messages:
            await self.send(text_data=json.dumps(msg))

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data.get("message")
        if message:
            msg_obj = await self.save_message(message)
            payload = {
                "sender_id": self.user.id,
                "sender_username": self.user.username,
                "message": message,
            }
            await self.channel_layer.group_send(self.room_group_name, {"type": "chat_message", **payload})

    async def chat_message(self, event):
        await self.send(text_data=json.dumps(event))

    @database_sync_to_async
    def save_message(self, message):
        receiver = User.objects.get(id=self.friend_id)
        return Message.objects.create(sender=self.user, receiver=receiver, content=message)

    @database_sync_to_async
    def get_previous_messages(self):
        messages = Message.objects.filter(
            Q(sender_id=self.user.id, receiver_id=self.friend_id) |
            Q(sender_id=self.friend_id, receiver_id=self.user.id)
        ).order_by("timestamp")
        return [
            {
                "sender_id": m.sender.id,
                "sender_username": m.sender.username,
                "message": m.content,
            }
            for m in messages
        ]
