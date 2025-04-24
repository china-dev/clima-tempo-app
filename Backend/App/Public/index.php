<?php
require __DIR__ . '/../../vendor/autoload.php';

use Slim\Factory\AppFactory;
use App\Controller\WeatherController;
use App\Service\WeatherService;
use Dotenv\Dotenv;

$app = AppFactory::create();

$dotenv = Dotenv::createImmutable('/var/www/Backend');
$dotenv->load();

$weatherApiKey = getenv('WEATHER_API_KEY');

$service = new WeatherService($weatherApiKey);
$controller = new WeatherController($service);

$app->get('/weather', [$controller, 'handle']);

$app->run();
