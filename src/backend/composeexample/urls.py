"""composeexample URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import include, url
from todolist.views import NewTodoView, DeleteTodoView, ReadTodoView, UpdateTodoView
from auth_user_jwt.views import UserListAPIView, CreateUserView
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token,verify_jwt_token


urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^token-obtain/', obtain_jwt_token),
    url(r'^token-refresh',refresh_jwt_token),
    url(r'^token-verify/', verify_jwt_token),
    url(r'^register/',CreateUserView.as_view()),

    url(r'^todo/new/', NewTodoView.as_view()),
    url(r'^todo/(?P<pk>[0-9]+)/del/', DeleteTodoView.as_view()),
    url(r'^todo/(?P<pk>[0-9]+)/upd/', UpdateTodoView.as_view()),
    url(r'^todo/$', ReadTodoView.as_view()),
]
