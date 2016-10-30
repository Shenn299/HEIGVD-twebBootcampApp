# SHA INSPECTOR APP

This repository contains a web application which provide
a tool to find hexspeak word, in git commits hashes.

## PREREQUISITES

To be able to run the application locally, make sure to have properly
configured:

* A modern web browser like Firefox, Chromium, Safari or Edge;
* NodeJS.

To contribute to the project, these additional packages should be installed:

* Yeoman;
* Bower;
* Grunt;
* Generator-angm.

We assume these tools are properly installed and configured in your environment.

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

The controller doesn't contain an heavy logic. For example, it doesn't send http request to get datas. 
If it needs to manipulate data, it has to call the desired service.

To prevent any problem with module name, the modules use the 'tweb' name space.

In the **server**, there's an API wich defines routes that the **client** use to communicate 
with the database. We need to do that because Angular is in the client-side and can't directly use "mongodb" which is a Node.js library.

## CREDITS
Team B
* FRANCHINI Fabien
* HENNEBERGER Sébastien
