from todolist.models import Todo
from todolist.serializers import TodoSerializer
from rest_framework import generics
# Create your views here.
from rest_framework.response import Response


class NewTodoView(generics.CreateAPIView):
    model = Todo
    serializer_class = TodoSerializer


class DeleteTodoView(generics.DestroyAPIView):
    def get(self, request, pk,format=None):
        todoitems = Todo.objects.get(pk=pk)
        serializer = TodoSerializer(todoitems)
        return Response(serializer.data)
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class ReadTodoView(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class UpdateTodoView(generics.RetrieveUpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer