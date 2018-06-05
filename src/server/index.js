// LOAD DEFAULT MODULES

const http = require('http');
const path = require('path');
const root = path.resolve('.');


require('dotenv').config({ path: path.resolve(root, 'src', 'server', 'variables.env') });

// INITIATE EXPRESS
// Start new instance of express app

const express = require('express');
const app = express();


// SERVE STATIC FILES
// You can edit the first argument passed to deploy the app to whichever url you would like
// You will have to fix any relative paths that may link to the original
app.use('/', express.static(path.resolve(root, 'src', 'public')));

const server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("Server listening at", process.env.IP + ":" + process.env.PORT + " at " + new Date());
  });

