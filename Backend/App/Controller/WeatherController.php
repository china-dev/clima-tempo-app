<?php
namespace App\Controller;

use App\Service\WeatherService;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class WeatherController {
  public function __construct(private WeatherService $service) {}

  public function handle(Request $request, Response $response): Response {
    $queryParams = $request->getQueryParams();
    $city = $queryParams['city'] ?? null;

    if (!$city) {
        return $this->errorResponse($response, 'Parâmetro "city" é obrigatório', 400);
    }

    try {
        $weather = $this->service->getWeather($city);
        $body = $this->buildResponseBody($weather);
        return $this->jsonResponse($response, $body);
    } catch (\Exception $e) {
        return $this->errorResponse($response, $e->getMessage(), 400);
    }
  }

  private function jsonResponse(Response $response, array $body, int $status = 200): Response {
    $response->getBody()->write(json_encode($body));
    return $response
        ->withStatus($status)
        ->withHeader('Content-Type', 'application/json')
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  }

  private function errorResponse(Response $response, string $message, int $status): Response {
      return $this->jsonResponse($response, ['error' => $message], $status);
  }

  private function buildResponseBody($weather): array {
    return [
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
      'humidity' => $weather->humidity,
      'forecast' => $weather->forecast,
    ];
  }
}
