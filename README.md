# SHA1.inspect()

This repository contains a web application which the main purpose is to provide
a tool to find hexspeak word, in git commits hashes.

## PREREQUISITES

To be able to run the application locally, make sure to have properly
configured:

* A modern web browser like Firefox, Chromium, Safari or Edge;
* NodeJS.

These additional packages should be installed, in order to contribute to the
project:

* Yeoman;
* Bower;
* Grunt;
* Generator-angm.

The description of the installation of these tools is not covered by this
document.

## GETTING STARTED

The application is available online here: https://shenn299.github.io/HEIGVD-twebBootcampApp/

To run the application locally, clone this repo, open you Terminal/Shell and type:

```bash
$ grunt build
```

After the command you can start the application by typing:

```bash
$ node index.js
Node app is running on port 5000
```

Now you should be able to open the application on `http://localhost:5000`. **Be
careful, the port may differ from your environment.**

## FEATURES

* Fetch commits via github username/repository;
* Provide application usage statistics;

## IMPLEMENTATION

The application is divided in two components, the **server** and the **client**.
The first, is used as an entrypoint of the application. All pages are served by
an `expressjs` module. The **server**, has to deal connection between the
**client** and the `MongoDB` database.

The **client** is an `AngularJS 1.x` application. Despite, regular `AngularJS`
app, the project is based on the `angm`, `Yeoman` generator. It's divided into
sub-modules, which represent features of the application.

Depending on the setup, a feature is a MVC application. The controller contains
the core logic. 

## CREDITS

* FRANCHINI Fabien
* HENNEBERGER Sébastien
