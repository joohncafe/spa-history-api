# Criando uma SPA Usando History API - HistSPA

[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/afonsopacifer/routerhist/blob/master/LICENSE.md)

> :rocket: Projeto - Criando uma SPA Usando History API

## Estrutura básica

1. Crie um arquivo index.html com a estrutura básica e dentro dela crie uma div com um id #app
2. Chame os arquivos **routes.js** e **app.js**
3. Crie as páginas da sua SPA dentro da pasta **components**

exemplo:

```html
<html lang="pt-br">
  <head>
    <title>Exemplo de uma spa</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="app"></div>

    <script src="./routes.js"></script>
    <script src="./app.js"></script>
  </body>
</html>
```

## Exemplo de um component

1. Dentro da pasta components cria um arquivo html. Exemplo: contato.html

exemplo de componente:

```html
<h1>Meu Primeiro componente</h1>
<p>Criando uma SPA usando History API</p>
```

## Registrando uma rota

1. Abra o arquivo routes.js
   exemplo:

```js
// name = nome da rota
// path = nome do componente
const routes = [
  {
    name: "/",
    path: "home.html"
  },
  {
    name: "/contato",
    path: "contato.html"
  },
  {
    name: "/sobre",
    path: "sobre.html"
  },
  {
    name: "/ajuda",
    path: "ajuda.html"
  }
];
```

## Criando a navegação

1. Dentro do arquivo principal index.html basta adicionar a classe <b>.link</b> dentro de uma tag "**a**" e o nome da rota que você registrou no arquivo **routes.js**

```html
<a href="/contato" class="link">Contato</a>
```

Dentro da div **app** sera renderizado os componentes

## Adicionando transição ao trocar de rota

1. Chame o arquivo de estilo histsap.css que se encontra dentro de **assets/styles/** e inclua no arquivo index.html
2. Coloque o componente dentro de uma div com a classe animation
   ex:

```html
<div class="animation">
  <h1>Meu Primeiro componente</h1>
  <p>Criando uma SPA usando History API</p>
</div>
```

## Configurando no servidor apache

1. Lembrando que você precisa redirecionar sempre as chamadas para o arquivo principal **index.html**
2. crie um arquivo .htaccess na raiz principal e adicione o seguinte código

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [roadmap](https://github.com/joohncafe/routerhist/issues/1) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/joohncafe/routerhist/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/joohncafe/routerhist/blob/master/LICENSE.md) © [John Mayk](http://twitter.com/joohncafe)
