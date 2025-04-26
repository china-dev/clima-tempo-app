<?php
namespace App\Entity;

class ForecastDay
{
    public function __construct(
        public string $date,
        public float $min_temp_c,
        public float $max_temp_c,
        public string $condition,
        public string $icon
    ) {}
}
