from django.http import HttpResponse
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.permissions import AllowAny



# Create your views here.
@api_view(["GET"])
@authentication_classes([])
def ping(request):
    return HttpResponse("Pong!", status=200)
