/**
 * Os métodos do modelo Restful, que iremos usar na nossa aplicação
 */
const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);         //o necessário para toda aplicação Restful
Todo.updateOptions({new: true, runValidators: true})    //precisamos do new para que quando fizermos uma atualização já retornar o padão atualizado, e usamos o runValidators para que apliquemos as validações que foram colocadas no nosso todo.js; caso não coloquemos, tanto irá retornar o registro antigo e não o novo quanto não irá rodar as validações

module.exports = Todo;