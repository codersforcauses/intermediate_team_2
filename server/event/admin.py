from django.contrib import admin
from .models import Event, EventImage

# Register your models here.
class EventImageInline(admin.TabularInline):
    model = EventImage
    extra = 1

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    inlines = [EventImageInline]
    autocomplete_fields = ["participants"]
    list_display = ( "event_name", "id", "event_date")
    search_fields = ("event_name",)