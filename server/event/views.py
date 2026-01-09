from django.http import Http404
from django.shortcuts import get_object_or_404, render
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response


from .models import Event
from .serializers import EventSerializer

# Create your views here.

class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    # permission_classes = [permissions.IsAuthenticated] 

class EventDetail(generics.RetrieveUpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventSignup(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        try:
            event = Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            return Response(
                {"detail": "Event not found"},
                status=404
            )

        if event.participants.filter(id=request.user.id).exists():
            return Response(
                {"detail": "Already signed up"},
                status=400
            )

        event.participants.add(request.user)
        serializer = EventSerializer(event)
        return Response(serializer.data, status=200)