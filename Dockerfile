FROM node:alpine AS build
WORKDIR /app
COPY html/src src
COPY html/posts posts
COPY html  .
RUN mkdir -p dist/css dist/js; yarn; yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/contact.html /app/favicon.ico /app/index.html /app/list.html /app/rss.xml ./
COPY --from=build /app/dist dist
COPY --from=build /app/posts posts
