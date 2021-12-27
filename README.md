# ts-monorepo-template

## Development

```bash
$ npm install
$ cp packages/server/.env.example packages/server.env
$ npm run dev
```

* Client pages hosted on `http://localhost:8080/`
* Server API hosted on `http://localhost:3000/api/v1/`. Please check [API Doc](./packages/server/API.md)

## Install dependencies

```bash
$ npm install local-dependency -w packages/client
$ npm install shared-dependency
```

## Release

```bash
$ npm run build
$ npm run start
```
