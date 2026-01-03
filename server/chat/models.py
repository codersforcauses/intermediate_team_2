from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class Friend(models.Model):
    user = models.ForeignKey(User, related_name="friends", on_delete=models.CASCADE)
    friend = models.ForeignKey(User, related_name="friend_of", on_delete=models.CASCADE)

    class Meta:
        unique_together = ("user", "friend")

class Message(models.Model):
    sender = models.ForeignKey(User, related_name="sent_messages", on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name="received_messages", on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["timestamp"]
from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class Friend(models.Model):
    user = models.ForeignKey(User, related_name="friends", on_delete=models.CASCADE)
    friend = models.ForeignKey(User, related_name="friend_of", on_delete=models.CASCADE)

    class Meta:
        unique_together = ("user", "friend")

class Message(models.Model):
    sender = models.ForeignKey(User, related_name="sent_messages", on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name="received_messages", on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["timestamp"]
