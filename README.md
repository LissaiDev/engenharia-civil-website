# Engenharia-Civil-Website

Este é um website criado para a exposição de serviços de construção civil. O projeto contém várias páginas e um formulário que permite que os usuários possam enviar mensagens demonstrando interesse em tais serviços. O projeto foi construído usando Node.js, EJS e Mongoose.

## Instalação

1. Certifique-se de ter o Node.js e o MongoDB instalados em seu sistema.
2. Faça o download ou clone o projeto para o seu ambiente de desenvolvimento.

git clone https://github.com/LissaiDev/engenharia-civil-website.git
3. Navegue até a pasta do projeto.
cd engenharia-civil-website

4. Instale as dependências do projeto.

npm install

## Configuração do Banco de Dados

1. No arquivo `app.js`, configure as informações de conexão com o MongoDB, como a URL do banco de dados.

## Uso

1. Certifique-se de que o MongoDB esteja em execução no seu sistema.
2. No terminal, execute o seguinte comando para iniciar o servidor:

```
node app.js
```
    Abra um navegador da web e acesse http://localhost:8080 para acessar o website de serviços de engenharia civil.

    Navegue pelas diferentes páginas para visualizar os serviços oferecidos.

    Utilize o formulário de contato para enviar mensagens demonstrando interesse em serviços específicos. As mensagens serão armazenadas no banco de dados MongoDB.

Tecnologias Utilizadas

    Node.js: Backend do projeto.
    EJS: Mecanismo de renderização para exibir as páginas do website.
    Mongoose: Biblioteca para manipulação de dados no MongoDB.

Estrutura do Projeto

    app.js: Arquivo principal do aplicativo, contendo a configuração do servidor e as rotas.
    views/: Pasta contendo os arquivos de visualização EJS para renderizar as páginas do website.
    public/: Pasta contendo arquivos estáticos, como folhas de estilo CSS, imagens e scripts JavaScript.
    package.json: Arquivo de manifesto do Node.js com as dependências e scripts do projeto.
