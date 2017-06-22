FROM ubuntu:latest

RUN mkdir /home/frontend
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs nginx nano
RUN useradd --no-create-home nginx
WORKDIR /home/frontend

COPY package.json /home/frontend/

RUN npm install

COPY . /home/frontend/

RUN npm run build
RUN rm /var/www/html/*
RUN cp dist/* /var/www/html
RUN cp default /etc/nginx/sites-available

ENTRYPOINT /usr/sbin/nginx -g "daemon off;"