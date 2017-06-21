from todolist.models import Todo
from todolist.serializers import TodoSerializer
from rest_framework import generics
# Create your views here.
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class NewTodoView(generics.CreateAPIView):
    model = Todo
    serializer_class = TodoSerializer


class DeleteTodoView(generics.DestroyAPIView):
    def get(self, request, pk):
        todoitems = get_object_or_404(Todo,pk=pk,owner=request.user.id)
        serializer = TodoSerializer(todoitems)
        return Response(serializer.data)


class ReadTodoView(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class UpdateTodoView(generics.RetrieveUpdateAPIView):
    def get(self, request, pk):
        todoitems = get_object_or_404(Todo,pk=pk,owner=request.user.id)
        serializer = TodoSerializer(todoitems)
        return Response(serializer.data)
