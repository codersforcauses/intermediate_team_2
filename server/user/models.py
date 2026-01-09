from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

User = get_user_model()

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_info = models.TextField(blank=True) # Or keep it as 'bio'?
    
    ROLE_CHOICES = ('user','User'), ('admin','Admin'), ('manager','Manager')
    role = models.CharField(max_length=20, default='user', choices=ROLE_CHOICES)
    def __str__(self):
        return f"Profile: {self.user.username}"

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    Profile.objects.get_or_create(user=instance)

