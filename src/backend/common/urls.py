from django.contrib import admin
from django.conf.urls import url
from auth_user_jwt.urls import urlpatterns as auth_urlpatterns
from todolist.urls import urlpatterns as todo_urlpatterns

urlpatterns = auth_urlpatterns + todo_urlpatterns + [
    url(r'^admin/', admin.site.urls),
]
