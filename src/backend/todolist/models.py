from django.db import models
from django.contrib import admin
# Create your models here.
class Todo(models.Model):
     name=models.CharField('Задача',max_length=250)
     is_active=models.BooleanField('Активна')

     def __unicode__(self):
         return self.name


class Todoadmin(admin.ModelAdmin):
    search_fields=['name']

admin.site.register(Todo, Todoadmin)