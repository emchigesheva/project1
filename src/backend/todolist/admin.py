from django.contrib import admin
from todolist.models import Todo, Todoadmin
# Register your models here.

admin.site.register(Todo, Todoadmin)