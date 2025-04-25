<?php
namespace App\Controller;

use App\Service\WeatherService;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class WeatherController {
    public function __construct(private WeatherService $service) {}

    public function handle(Request $request, Response $response): Response
    {
        $queryParams = $request->getQueryParams();
        $city = $queryParams['city'] ?? null;

        if (!$city) {
            $response->getBody()->write(json_encode(['error' => 'Parâmetro "city" é obrigatório']));
            return $response->withStatus(400)->withHeader('Content-Type', 'application/json');
        }

        try {
            $weather = $this->service->getWeather($city);

            $response->getBody()->write(json_encode([
                'city' => $weather->city,
                'region' => $weather->region,
                'country' => $weather->country,
                'localtime' => $weather->local_time,
                'condition' => $weather->condition,
                'icon' => $weather->icon,
                'temp_c' => $weather->temp_c,
                'feelslike_c' => $weather->feelslike_c,
                'temp_f' => $weather->temp_f,
                'feelslike_f' => $weather->feelslike_f,
                'humidity' => $weather->humidity
            ]));
    
            return $response
                ->withStatus(200)
                ->withHeader('Content-Type', 'application/json')
                ->withHeader('Content-Type', 'application/json')
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
                
        } catch (\Exception $e) {
            $response->getBody()->write(json_encode(['error' => $e->getMessage()]));
            return $response
                ->withStatus(400)
                ->withHeader('Content-Type', 'application/json')
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        }


    }
}
