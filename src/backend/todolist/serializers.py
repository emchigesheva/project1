from todolist.models import Todo
from rest_framework import serializers
from rest_framework.response import Response
from django.http import Http404
class TodoSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        todo = Todo(name=validated_data['name'], is_active=validated_data['is_active'])
        todo.save()
        return todo
    def update(self, instance, validated_data):
        instance.is_active=False
        instance.save()
        return instance
    class Meta:
        model = Todo
        fields = ('id','name', 'is_active')
        lookup_field='name'