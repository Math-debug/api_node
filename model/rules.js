const db = require('./db/db');

class Rules{
    constructor(json){
        this.json = json;
    }
async getProdutos(){
                const Produtos = require('./db/tables');
                await db.sync();
                const readProduto = await Produtos.findAll();
                return readProduto;
    };
async CreateProdutos(){
            const Produtos = require('./db/tables');
            await db.sync();
            let json = this.json;
            const createProduto = Produtos.create({
                descricao:json.descricao,
                preco:json.preco
            })
        let res = "Produto Inserido";
        return res;
    }
}
module.exports = Rules;