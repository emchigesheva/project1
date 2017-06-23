from django.conf.urls import url
from auth_user_jwt.views import UserListAPIView, CreateUserView
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token,verify_jwt_token


urlpatterns = [
    url(r'^token-obtain', obtain_jwt_token),
    url(r'^token-refresh',refresh_jwt_token),
    url(r'^token-verify', verify_jwt_token),
    url(r'^register',CreateUserView.as_view()),
]
