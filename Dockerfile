FROM php:8.1-cli

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    && apt-get clean

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/Backend

COPY Backend/composer.json ./composer.json

RUN composer install

COPY Backend/App ./App


CMD ["php", "-S", "0.0.0.0:8080", "-t", "App/Public", "App/Public/index.php"]
