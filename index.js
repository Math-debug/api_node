const express = require('express');
const app = express();
const router = require('./controllers/router');
app.use('/',router);
app.listen(3000);