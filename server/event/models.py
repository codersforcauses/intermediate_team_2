from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()

class Event(models.Model):
    organizer = models.ForeignKey(User, on_delete=models.CASCADE, related_name="organized_events") # Only event organizer can modify the event, 
                                                                  #and each event has one organizer, organizer can have multiple events (one-to-many)
    participants = models.ManyToManyField(User, related_name="participated_events") # Users can join multiple events (many-to-many)
    event_name = models.CharField(max_length=200)
    event_description = models.TextField(null=False, blank=False)
    event_date = models.DateField()
    event_location = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Event: {self.event_name} hosted by {self.organizer.username}"