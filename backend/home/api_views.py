from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []
    authentication_classes = []

# curl -X POST -H "Content-Type: application/json" -d
# '{"username":"admin","password":"admin"}' http://
# localhost:8000/api-token-auth/

# 10. Copy the token and run the following command:
