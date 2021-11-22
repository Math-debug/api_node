const db = ('./db/db')

class Controller{
getProdutos(param){
    if(!param){
            (async()=>{
                const Produtos = require('./db/tables')
                await db.sync();
                const readProduto = Produtos.findAll();
                const send = await readProduto;
                return send;
            })()
        }
    }
}
module.exports = Controller;