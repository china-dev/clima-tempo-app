<?php
namespace App\Service;

use GuzzleHttp\Client;
use App\Entity\Weather;

class WeatherService
{
    private Client $client;
    private string $apiKey;

    public function __construct(string $apiKey)
    {
        $this->apiKey = $apiKey;
        $this->client = new Client(['base_uri' => 'http://api.weatherapi.com/v1/']);
    }

    public function getWeather(string $city): Weather {
        $response = $this->client->get("current.json?key={$this->apiKey}&q={$city}");
        $data = json_decode($response->getBody()->getContents(), true);

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
            $data['current']['humidity']
        );
    }
}
