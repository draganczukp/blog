FROM nginx:alpine
WORKDIR /usr/share/nginx/html
ADD html/* ./
