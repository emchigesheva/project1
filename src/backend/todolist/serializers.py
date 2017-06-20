from todolist.models import Todo
from rest_framework import serializers
from rest_framework.response import Response
from django.http import Http404
class TodoSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        todo = Todo(name=validated_data['name'], is_active=validated_data['is_active'],owner=validated_data['owner'])
        todo.save()
        return todo

    class Meta:
        model = Todo
        fields = ('id','name', 'is_active','owner')
        lookup_field='id'