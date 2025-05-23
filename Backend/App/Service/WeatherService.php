<?php
namespace App\Service;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use App\Entity\Weather;
use App\Entity\ForecastDay;

class WeatherService {
  private Client $client;
  private string $apiKey;

  public function __construct(string $apiKey) {
    $this->apiKey = $apiKey;
    $this->client = new Client(['base_uri' => 'http://api.weatherapi.com/v1/']);
  }

  public function getWeather(string $city): Weather {
    try {
      $response = $this->client->get("forecast.json?key={$this->apiKey}&q={$city}&lang=pt&days=7");
      $data = json_decode($response->getBody()->getContents(), true);
      
      $forecast = [];
      foreach ($data['forecast']['forecastday'] as $day) {
        $forecast[] = new ForecastDay(
          $day['date'],
          $day['day']['mintemp_c'],
          $day['day']['maxtemp_c'],
          $day['day']['condition']['text'],
          $day['day']['condition']['icon']
        );
      }

      return new Weather(
        $data['location']['name'],
        $data['location']['region'],
        $data['location']['country'],
        $data['location']['localtime'],
        $data['current']['condition']['text'],
        $data['current']['condition']['icon'],
        $data['current']['temp_c'],
        $data['current']['feelslike_c'],
        $data['current']['temp_f'],
        $data['current']['feelslike_f'],
        $data['current']['humidity'],
        $forecast
      );
    } catch (ClientException $e) {

      $response = $e->getResponse();
      $body = $response->getBody()->getContents();
      $json = json_decode($body, true);

      if (isset($json['error']['code']) && $json['error']['code'] === 1006) {
        throw new \Exception('Cidade não encontrada.');
      }
    
      throw new \Exception('Erro na requisição: ' . $json['error']['message'] ?? 'Erro desconhecido.');
    } catch (\Exception $e) {
      throw $e;
    }
  }
}
