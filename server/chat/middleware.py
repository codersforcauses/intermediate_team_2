# chat/middleware.py
from urllib.parse import parse_qs
from channels.db import database_sync_to_async
from django.contrib.auth.models import AnonymousUser
from rest_framework_simplejwt.tokens import UntypedToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth import get_user_model

User = get_user_model()

@database_sync_to_async
def get_user(token):
    try:
        validated_token = UntypedToken(token)
        user = JWTAuthentication().get_user(validated_token)
        return user
    except Exception:
        return AnonymousUser()

class JWTAuthMiddleware:
    """Custom middleware for JWT auth in Channels"""
    def __init__(self, inner):
        self.inner = inner

    def __call__(self, scope):
        return JWTAuthMiddlewareInstance(scope, self.inner)

class JWTAuthMiddlewareInstance:
    def __init__(self, scope, inner):
        self.scope = dict(scope)
        self.inner = inner

    async def __call__(self, receive, send):
        query_string = self.scope.get("query_string", b"").decode()
        token = parse_qs(query_string).get("token")
        if token:
            self.scope["user"] = await get_user(token[0])
        else:
            self.scope["user"] = AnonymousUser()
        inner = self.inner(self.scope)
        return await inner(receive, send)

# Helper to wrap AuthMiddlewareStack
from channels.auth import AuthMiddlewareStack
def JWTAuthMiddlewareStack(inner):
    return JWTAuthMiddleware(AuthMiddlewareStack(inner))
