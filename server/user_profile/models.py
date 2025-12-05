from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()
    age = models.PositiveBigIntegerField(null=True)

    def __str__(self):
        return f"Profile: { self.user.username}"


@receiver(post_save, sender =User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    Profile.objects.get_or_create(user = instance)
