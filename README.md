# Healthcheck app

Este é um aplicativo Node.js simples que realiza health checks em sites populares e exibe os resultados em uma interface web. A aplicação é executada em um contêiner Docker.

## Funcionalidades

- A aplicação verifica o status de sites populares como **Google**, **Facebook**, **GitHub** e **Amazon**.
- Exibe os resultados com informações sobre o tempo de resposta e status (sucesso ou erro).
- A interface é acessível via navegador, mostrando os resultados dos health checks em tempo real.

## Tecnologias

- **Node.js**: Plataforma para construir o servidor web.
- **Express**: Framework para facilitar a criação de APIs e servidores HTTP.
- **Axios**: Biblioteca para fazer requisições HTTP aos sites para verificar seu status.
- **Docker**: Para empacotar a aplicação e rodá-la em contêineres.

## Requisitos

Antes de rodar a aplicação, você precisa ter o seguinte instalado:

- **Node.js** (v16 ou superior)
- **npm** (gerenciador de pacotes do Node)
- **Docker** (para empacotar e rodar a aplicação em contêiner)

## Como rodar localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/NevaresLeo/healthcheck-app.git
cd healthcheck-app
```
### 2. Instalar dependências
```bash
npm install
```
### 3. Rodar aplicação
```bash
node app.js
```
-----

## Como rodar com Docker

### 1. Criar a imagem Docker
```bash
docker build -t healthcheck-app .
```

### 2. Rodar o contêiner Docker
```bash
docker run -p 3000:3000 --name healthcheck healthcheck-app
```
*A aplicação estará acessível em http://localhost:3000.*

