from django.conf.urls import url
from todolist.views import NewTodoView, DeleteTodoView, ReadTodoView, UpdateTodoView

urlpatterns = [
    url(r'^todo/new/', NewTodoView.as_view()),
    url(r'^todo/(?P<pk>[0-9]+)/del/', DeleteTodoView.as_view()),
    url(r'^todo/(?P<pk>[0-9]+)/upd/', UpdateTodoView.as_view()),
    url(r'^todo/$', ReadTodoView.as_view()),
]
