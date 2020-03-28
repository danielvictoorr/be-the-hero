const express = require('express'); //acessando a pasta express
const cors = require('cors');
const routes= require('./routes');

const app= express(); // criando minha aplicação na pasta

app.use(cors());
app.use(express.json());
app.use(routes);






app.listen(3333); // localhost 3333- porta da minha aplicação