const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const app = express();

app.use(cors());

app.use(express.json());
// app.get('/', (request, response) => {
//    return response.send("TEXTO"); 
// });

app.use(routes);

app.listen(3333); 