# Travis-ci demo project

[![Build Status](https://travis-ci.com/Anticom/travis-ci-demo.svg?branch=master)](https://travis-ci.com/Anticom/travis-ci-demo)

This is a demo project to showcase github integration with travis-ci service.

## Building
```sh
$ docker build -t cfm/travis-ci-demo:latest .
```

## Running
```sh
$ docker run --name demo-server --rm -p 3000:3000 cfm/travis-ci-demo
```

## Running tests

```sh
docker run cfm/travis-ci-demo /bin/sh -c "npm run test"
```


