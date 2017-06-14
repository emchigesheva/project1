#!/bin/bash
python3 manage.py test_db_connection
python3 manage.py migrate
python3 manage.py startapp auth_user_jwt
python3 manage.py runserver 0.0.0.0:8000
