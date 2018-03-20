/**
 * Configuração da conexão com o banco de dados
 */

const mongoose = require('mongoose');  //Mongoose é uma framework que faz mapeamento dos objetos que vão para o banco como também faz a conexão com banco e faz os comandos de inserção, atualização, exclusão, agregação, etc. O mongoose tem uma API que reflete a API do mongo e por isso é bem mais fácil de usar
mongoose.Promise = global.Promise;      //estamos dizendo que a API de Promises do mongoose ira usar a API de Promises do node
module.export = mongoose.connect('mongodb://localhost/todo');
