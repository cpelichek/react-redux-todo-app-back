const express = require('express');

module.exports = function(server) {
    
    //  API Routes
    const router = express.Router();
    server.use('/api', router);

    // TODO Routes
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos'); //registra dentro do router '/api' usando essa url base ('/todos') vamos criar o webservice com essa url base, daí dependendo do método que evocarmos (get, post, put, delete, que incluímos em todoService.js em Todo.methods([]), iremos então poder alterar a base (ou seja, os valores inseridos no nosso banco de dados))
}