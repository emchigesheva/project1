from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User
# Create your models here.
class Todo(models.Model):
     name=models.CharField('Задача',max_length=250)
     is_active=models.BooleanField('Активна')
     owner = models.ForeignKey(User)
     def __unicode__(self):
         return self.name

class Todoadmin(admin.ModelAdmin):
    search_fields=['name']
