FROM php:8.1-cli

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    && apt-get clean

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY composer.json ./

RUN composer install

COPY ./App ./App

EXPOSE 8080

CMD ["php", "-S", "0.0.0.0:8080", "-t", "App/Public", "App/Public/index.php"]
