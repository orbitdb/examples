# OrbitDB Examples

<p align="left">
  <img src="https://github.com/orbitdb/orbitdb/blob/main/images/orbit_db_logo_color.png" width="256" />
</p>

This repository contains some basic examples on how to implement OrbitDB in Javascript using various methods and frameworks.

## Usage

Different frameworks and implementations are provided. Below are installation and usage details for each example.

To start, check out this repository:

```bash
git clone https://github.com/orbitdb/orbitdb-examples.git
```

### Nodejs

Bundle OrbitDB in a node application.

Install the 3rd party NPM packages and run the example:

```
cd ./nodejs
npm i
node index.js
```

### Browser

Run OrbitDB as a simple web app.

Launch a local web server. For example, you can use the [Python's HTTP server](https://docs.python.org/3/library/http.server.html):

```
cd ./browser
python3 -m http.server 8081
```

Browse to http://localhost:8081/

### Webpack

Integrate OrbitDB with a webpacked app.

Install the 3rd party NPM packages:

```
cd ./webpack
npm i
```

Launch a local web server. For example, you can use the [Python's HTTP server](https://docs.python.org/3/library/http.server.html):

```
python3 -m http.server 8081
```

Browse to http://localhost:8081/

### React

Integrate OrbitDB in a ReactJS app.

Install the 3rd party NPM packages and run:

```
cd ./react
npm i
npm run start
```

Browse to the specified localhost URL in your web browser.

### Vue + Vite

Integrate OrbitDB in a VueJS app.

Install the 3rd party NPM packages and run:

```
cd ./vue-vite
npm i
npm run dev
```

Browse to the specified localhost URL in your web browser.
