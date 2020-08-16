<h1 align="center">
  <img alt="Proffy" title="proffy" src=".github/logo.svg" width="250px" />
</h1>

<h3 align="center">
  Proffy: back-end, front-end web e mobile
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/GilsondaGama/GoStack11-GoBarber?color=yellow">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/GilsondaGama/GoStack11-GoBarber?color=yellow">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/GilsondaGama/GoStack11-GoBarber?color=yellow">

  <img alt="Code quality" src="https://api.codacy.com/project/badge/Grade/45ac7042be6941f0be6cf27d7168a1af">
  
  <img alt="Made by Rocketseat" src="https://img.shields.io/github/license/GilsondaGama/GoStack11-GoBarber">

  <br>

  <img alt="Node.js version" src="https://img.shields.io/badge/Node.js-v12.16.1-689f63?style=flat&logoColor=689f63&logo=node.js">

  <img alt="TypeScript version" src="https://img.shields.io/badge/TypeScript-v3.8.3-007acc?style=flat&logoColor=007acc&logo=typescript">

  <img alt="React.js version" src="https://img.shields.io/badge/React.js-v16.13.1-60dafb?style=flat&logoColor=60dafb&logo=react">

  <img alt="React Native version" src="https://img.shields.io/badge/React_Native-v0.62.2-7159c1?style=flat&logoColor=60dafb&logo=react">
</p>


<h3 align="center">
  <a href="https://github.com/GilsondaGama/NLW2-Proffys/blob/master/server/Insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</h3>



## :gear: Back-end

### :information_source: Deploy

- https://proffy-backend.herokuapp.com

### :information_source: Instruções Back-end

```bash
# instalar PostgreSQL - Banco de dados principal
docker run --name proffy -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# nome do banco de dados Posgres
proffy

# instalar os pacotes e dependências
yarn
```

Faça uma cópia do arquivo .env.example, renomeie para .env e altere as variáveis de acordo com o seu ambiente.

#### Executando back-end

```bash

# criar estrutura do banco de dados SQLite
yarn knex:migrate

# iniciar servidor da aplicação
yarn dev:server

```

---

## :computer: Front-end

### :information_source: Deploy

- https://proffy-web.herokuapp.com

### :information_source: Instruções Front-end

```bash
#instalar os pacotes e dependências
yarn

# iniciar a aplicação web
yarn start
```

---

## :iphone: Mobile

### :information_source: Instruções Mobile (iOS)

```bash
#instalar os pacotes e dependências
yarn

# iniciar o aplicativo no emulador do iOS
yarn ios
```

### :information_source: Instruções Mobile (Android)

```bash
#instalar os pacotes e dependências
yarn
```

Alterar a variável baseURL em `/src/services/api.js` colocando o ip local ou do emulador

```bash
# inicializar o aplicativo no emulador do Android
yarn android
```

---

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<h3 align="center">
  Feito por Gilson da Gama
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/gilsondagama/">
    <img alt="React.js version" src="https://img.shields.io/badge/LinkedIn-gilsondagama-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  <a href="https://www.facebook.com/gilson.dagama">
    <img alt="React.js version" src="https://img.shields.io/badge/Facebook-gilson.dagama-1778F2?style=flat&logoColor=white&logo=facebook">
  </a>
  <a href="https://www.instagram.com/gilsondagama/">
    <img alt="React.js version" src="https://img.shields.io/badge/Instagram-@gilsondagama-833AB4?style=flat&logoColor=white&logo=instagram">
  </a>
</p>
[Rocketseat](https://rocketseat.com.br/) pelo NLW!