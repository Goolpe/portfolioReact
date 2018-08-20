const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const http = require('http');
const path = require('path');
let app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

const port = process.env.PORT || '80';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));