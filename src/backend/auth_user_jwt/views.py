from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from rest_framework import generics
from auth_user_jwt.serializers import UserSerializer
from rest_framework.generics import CreateAPIView


class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CreateUserView(CreateAPIView):
    model = User
    serializer_class = UserSerializer

