from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model
from .models import Profile

# Register your models here.

User = get_user_model()

admin.site.unregister(User)

admin.site.register(Profile)

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    search_fields = ("username", "email", "first_name", "last_name")