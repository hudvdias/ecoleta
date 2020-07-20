# Ecoleta

<img src="https://github.com/hudvdias/ecoleta/blob/master/web/src/assets/logo.svg" alt="Ecoleta" />

#### Projeto construído durante a Next Level Week #01 da Rocketseat

#### [Sobre](#-objetivo) — [Funcionalidades](#-funcionalidades) — [Demonstração](#-demonstração) — [Tecnologias](#-principais-tecnologias) — [Utilização](#-utilização) — [Licença](#-licença) — [Autor](#-autor)

#### Status: Concluído ✅

## 💡 Objetivo

O objetivo do projeto é divulgar pontos de coleta de lixo reciclável para as pessoas que necessitam desse serviço.

## 🛠 Funcionalidades

**Site**

- [x] Cadastro de pontos de coleta no banco de dados;
- [x] Upload de imagem com dropzone;
- [x] Consulta de localidades pela API do IBGE;
- [x] Cadastro de ponto de coleta pela localização no mapa.

**Aplicativo**

- [x] Consulta de localidades pela API do IBGE;
- [x] Busca dos pontos de coleta no banco de dados;
- [x] Visualização dos pontos de coleta no mapa;
- [x] Deeplink com Whatsapp e Email.

## 🎨 Demonstração

Em breve.

## 💻 Principais Tecnologias

- [x] Typescript
- [x] Node Js
- [x] React Js
- [x] React Native
- [x] SQL (SQLite)
- [x] Expo

*Para visualizar todos as tecnologias e pacotes utilizados no projeto, acesse os arquivos package.json.*

## 🚀 Utilização

#### 💾 Arquivos

```bash
# Faça um clone do diretório ou download dos arquivos
$ git clone https://github.com/hudvdias/ecoleta.git
```

#### 👨‍💻 Servidor

```bash
# Instale as dependências na pasta "server"
$ npm install

# Inicie o servidor
$ npm run dev

# Crie o banco de dados
$ npx run knex:migrate

# Execute as seeds
$ npx run knex:seed
```

#### 🖥 Aplicação Web

```bash
# Instale as dependências na pasta "web"
$ npm install

# Inicie a aplicação web
$ npm start
```

#### 📱 Aplicação Mobile

```bash
# Instale as dependencias na pasta "mobile"
$ npm install

# Inicie a aplicação mobile
$ expo start

# Instale o aplicativo do Expo no seu celular e scaneie o Qr Code que irá aparecer na página do Expo
```

## 📃 Licença

Este repositório está sob licença MIT. Para mais informações, leia o arquivo [LICENSE](https://github.com/hudvdias/ecoleta/blob/master/LICENSE).

## 🧑 Autor

Feito por **Hudson Dias**. [Entre em contato!](https://www.linkedin.com/in/hudvdias/)

Idealizado por [**Rocketseat**](https://rocketseat.com.br/).
