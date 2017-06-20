from todolist.models import Todo
from todolist.serializers import TodoSerializer
from rest_framework import generics
# Create your views here.



class NewTodoView(generics.CreateAPIView):
    model = Todo
    serializer_class = TodoSerializer


class DeleteTodoView(generics.DestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class ReadTodoView(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class UpdateTodoView(generics.RetrieveUpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer