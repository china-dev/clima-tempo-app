<?php
namespace App\Entity;

class Weather
{
    public function __construct(
        public string $city,
        public string $region,
        public string $country,
        public string $local_time,
        public string $condition,
        public string $icon,
        public float $temp_c,
        public float $feelslike_c,
        public float $temp_f,
        public float $feelslike_f,
        public float $humidity,
        public array $forecast
    ) {}
}
