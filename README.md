## NestJs API + NestJS Integração

Projeto roda atualmente em duas pastas para faciltar a organização. Antes de rodar a aplicação, certifique-se das informações no `docker-compose.yml` onde haverão as informações sobre os bancos de dados,
as informações já estão de acordo com as variáveis de ambiente de exemplo que foi deixado em cada pasta/projeto.

Para rodar o projeto é necessário que haja docker-cli na maquina e, recomendo, Nodejs 16 ou superior.

## Instalação

```bash
$ docker-compose up -d
$ echo $(cd /API && npm install)
$ echo $(cd /Integracao && npm install)
```

## Running the app
Para melhor visualização, recomendo que use duas abas do terminal com cada uma na sua respectiva pasta para que fique melhor de ver os logs do NestJs.

```bash
# watch mode
$ npm run start:dev

```
## License

[MIT licensed](LICENSE).

