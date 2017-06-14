from django.contrib.auth.models import User
from rest_framework import serializers
class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        user = User(username=validated_data['email'], email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.set_password(validated_data['password'])
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('email', 'password')
        lookup_field = 'email'
        write_only_fields = ('password',)
