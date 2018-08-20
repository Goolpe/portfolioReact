const express = require('express');
const bodyParser = require('body-parser');

const http = require('http');
const path = require('path');
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || '80';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));