FROM nginx:latest
COPY ./dist /var/www/html
COPY ./config/nginx/dev/conf.d /etc/nginx/conf.d
COPY ./config/nginx/nginx.conf /etc/nginx/nginx.conf
