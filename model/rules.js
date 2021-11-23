const db = require('./db/db');

class Controller{
    constructor(param,json){
        this.param = param;
        this.json = json;
    }
async getProdutos(){
    if(this.param === true){
                const Produtos = require('./db/tables');
                await db.sync();
                const readProduto = await Produtos.findAll();
                return readProduto;
        }
    };
async CreateProdutos(){
        if(this.param === true){
            const Produtos = require('./db/tables');
            await db.sync();
            let json = this.json;
            const createProduto = Produtos.create({
                descricao:json.descricao,
                preco:json.preco
            })
            let res = () => {console.log("Produto Inserido");}
            return res;
        }
    }
}
module.exports = Controller;