/**
 * Aqui criamos um middleware!
 */

module.exports = function(req, res, next){  //req e res são o padrão do express, que é nosso framework de web server; next é justamente conhecido como chain, de chain of responsability, que é quem diz se ele vai pra próximo filtro, próximo middleware, ou se aborta, etc.
    //estamos adicionando os cabeçalhos na response que vai ser enviada ao browser pra dizer que é permitido acessar o serviço que está sendo acessado; quando fazemos um middleware, ou damos uma response, ou damos um next, senão a aplicação irá parar e travar a aplicação.
    res.header('Access-Control-Allow-Origin', '*'); //podíamos colocar no lugar de '*' alguma url mais restrita, para permitir que só alguns clientes possam acessar nossa aplicação e consumir nosso serviço.
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}