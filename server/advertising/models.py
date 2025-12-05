from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()

class Advertising(models.Model):
    manager = models.ForeignKey(User, on_delete=models.CASCADE, related_name="advertised_events")
    promotion_price = models.DecimalField(max_digits=10, decimal_places=2)
    ad_content = models.TextField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Promoted by {self.manager.username} at ${self.promotion_price}"