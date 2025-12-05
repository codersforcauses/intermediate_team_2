from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name