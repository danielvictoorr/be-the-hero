const express= require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes= express.Router();

/**
 * Rota / Recurso
 * 
 */

 /**
 * Método HTTP:
 * 
 * GET: Buscar uma informação  do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parametros ultilizados para indentificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  
  */

 /**
  * SQL: MySQL, SQLite, POstgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  *  
  * */
 
  /**
   * Driver: SELECT * FROM users
   * Query Builder: tabler('users').select('*').where()
   */

    routes.post('/sessions', SessionController.create);

    routes.get('/ongs', OngController.index);
    routes.post('/ongs', OngController.create);

    routes.get('/profile',ProfileController.index);
    
    
    routes.get('/incidents',IncidentController.index);
    routes.post('/incidents', IncidentController.create);
    routes.delete('/incidents/:id',IncidentController.delete);


module.exports= routes;