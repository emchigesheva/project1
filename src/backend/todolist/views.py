from todolist.models import Todo
from todolist.serializers import TodoSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, mixins
from django.http import Http404
# Create your views here.



class NewTodoView(generics.CreateAPIView):
    model = Todo
    serializer_class = TodoSerializer


class DeleteTodoView(APIView):
    def get_object(self, pk):
        try:
            return Todo.objects.get(pk=pk)
        except Todo.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        todoitem = self.get_object(pk)
        serializer = TodoSerializer(todoitem)
        return Response(serializer.data)

    def delete(self, request, pk, format=None):
        todoitem = self.get_object(pk)
        todoitem.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ReadTodoView(APIView):
    def get_object(self, pk):
        try:
            return Todo.objects.get(pk=pk)
        except Todo.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        todoitem = self.get_object(pk)
        serializer = TodoSerializer(todoitem)
        return Response(serializer.data)

    def read(self, request,pk, format=None):
        todoitem=self.get_object(pk)
        serializer = TodoSerializer(todoitem)
        if serializer.is_valid():
           serializer.save()
           return Response(serializer.data)

