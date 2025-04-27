
# 🌤️ Clima Tempo App

Aplicação de previsão do tempo, utilizando **Vue 3 + Vite** no frontend e **PHP + Slim Framework** no backend.  
O backend atua como **proxy** seguro para a API pública da [WeatherAPI](https://www.weatherapi.com/).

## 🛠 Tecnologias utilizadas

- **Frontend:** Vue 3, Vite, TypeScript
- **Backend:** PHP 8, Slim Framework, Guzzle HTTP
- **Ambiente:** Docker e Docker Compose
- **API:** [WeatherAPI](https://www.weatherapi.com/)

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Docker](https://www.docker.com/) instalado.
- Chave de acesso gratuita da [WeatherAPI](https://www.weatherapi.com/).

### Instruções

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/clima-tempo-app.git
   cd clima-tempo-app
   ```

2. Copie o arquivo `.env.example` para `.env`:

   ```bash
   cp .env.example .env
   ```

3. Insira sua chave da WeatherAPI no arquivo `.env`:

   ```env
   WEATHER_API_KEY=SUA_CHAVE_DA_API
   ```

4. Construa e suba os containers:

   ```bash
   docker-compose up --build
   ```

5. Acesse os serviços:

   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend (proxy da API): [http://localhost:8080](http://localhost:8080)

## 🌟 Funcionalidades

- Busca de cidades.
- Visualização de:
  - Nome da cidade, estado, país e horário local.
  - Temperatura atual e condição climática e sensação térmica.
  - Umidade relativa do ar.
  - Mensagem personalizada sobre o clima.
  - Previsão do tempo para até 7 dias

## ⚙️ Variáveis de ambiente

| Variável   | Descrição                         |
|------------|------------------------------------|
| `WEATHER_API_KEY`  | Sua chave de acesso da WeatherAPI  |

## 🐳 Comandos úteis

| Comando                      | Ação                                |
|-------------------------------|-------------------------------------|
| `docker-compose up --build`   | Builda e sobe os containers         |
| `docker-compose down`         | Para e remove os containers         |
| `npm install`                 | Na Pasta Frontend/ caso queria      |
