const express = require('express');

const { User } = require('../models/user');
const users = require('../controllers/user');

// Combina models em um único objeto
const models = { User };

const routersInit = (config) => {
    const router = express();
  
    // Registra endpoints
    router.use('/users', users(models, { config }));
  
    return router;
  };
  
  module.exports = routersInit;