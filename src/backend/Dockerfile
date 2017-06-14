FROM python:3.5
 ENV PYTHONUNBUFFERED 1
 ENV PUBLIC_SUFFIX_LIST /deps/effective_tld_names.dat
 RUN mkdir /code
 WORKDIR /code
 ADD requirements.txt /deps/
 RUN pip install -r /deps/requirements.txt
 ADD . /code/
