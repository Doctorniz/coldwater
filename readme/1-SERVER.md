

# 1 - SIMPLE SERVER

This is how I set up this repository for deploying an express server.

## 1. Run `npm init`

## 2. Run `npm i -S express`

Here we are just installing the *express* server to run. I thought of using *koa* as Lee Benson uses in ReactQL, but *express* is more supported and maintained. 

## 3. Run `npm i -S -D git nodemon dotenv`

We are installing a few devdependencies here. *git* for version control, *nodemon* for starting the server and *dotenv* to load ENV files from a file. 

## 4. Create two **folders** `src` and `src/server` in root directory.

`src` will be where all our files go.
`server` will be where we place any server files. 

## 5. Create the server **file** in *src/server* - `index.js`

```javascript
// LOAD DEFAULT MODULES

const http = require('http');
const path = require('path');
require('dotenv').config({ path: 'src/server/variables.env' });

// INITIATE EXPRESS
// Start new instance of express app

const express = require('express');
const app = express();

// RUN SERVER

const server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("Server listening at", process.env.IP + ":" + process.env.PORT + " at " + new Date());
  });

```

## 6. Create the variables **file** in *src/server* - `variables.env`

This is referenced above in **server/index.js**.

```
IP=localhost
PORT=3000
```

## 7. Edit **package.json** with the following code to ensure it runs as we would like. 

```javascript
{...
 "main": "src/server/",
  "scripts": {
    "start": "nodemon"
  }
  ...}
```

## 8. Run `npm start` to ensure it works.

EXPECTED RESPONSE:

```
[nodemon] 1.17.5
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node src/server/`
Server listening at localhost:3000 at Mon Jun 04 2018 22:57:52 GMT+1000 (E. Australia Standard Time)
```

## 9. Create file `.gitignore` in root

```
node_modules/
```

### 10. Run the following commands to initialise git

