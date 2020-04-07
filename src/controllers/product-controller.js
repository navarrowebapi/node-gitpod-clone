const Produto = require('../app/models/product');
const repository = require('../repositories/product-repository')

//Reparar no uso de Arrow Function (=>), não precisamos passar o comando "function"
exports.post = async (req, res) => {
    try {
        await repository.post({
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao
        });
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getAll = async (req, res) => {

    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.productId;
        var data = await repository.getById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }
}

exports.put = async (req, res) => {
    try {
        const id = req.params.productId;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Produto atualizado com sucesso",
            dados: data
        });

    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }

}



exports.delete = async (req, res) => {
    try {
        const id = req.params.productId;
        await repository.delete(id)
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};






////OLD
// exports.post = function (req, res) {
//     var produto = new Produto();
//     produto.nome = req.body.nome;
//     produto.preco = req.body.preco;
//     produto.descricao = req.body.descricao;

//     produto.save(function (error) {
//         if (error)
//             res.send("Erro ao tentar salvar um produto" + error);

//         res.status(201).json({ message: 'Produto inserido com sucesso' });

//     });
// }

// exports.get = function (req, res) {
//     Produto.find(function (err, prods) {
//         if (err)
//             res.send(err);

//         res.status(200).json({
//             message: 'Produtos retornados',
//             produtos: prods
//         });
//     });
// }

// exports.getById = function (req, res) {
//     const id = req.params.productId;

//     Produto.findById(id, function (err, produto) {
//         if (err) {
//             res.status(500).json({
//                 message: "Erro ao tentar encontrar produto, ID mal formado"
//             });
//         }

//         else if (produto == null) {
//             res.status(400).json({
//                 message: "produto não encontrado"
//             });
//         }
//         else {
//             res.status(200).json({
//                 message: "produto encontrado",
//                 produto: produto
//             });
//         }

//     });

// }

// exports.put = function (req, res) {
//     const id = req.params.productId;

//     Produto.findById(id, function (err, produto) {
//         if (err) {
//             res.status(500).json({
//                 message: "Erro ao tentar encontrar produto, ID mal formado"
//             });
//         }

//         else if (produto == null) {
//             res.status(400).json({
//                 message: "produto não encontrado"
//             });
//         }
//         else {
//             produto.nome = req.body.nome;
//             produto.preco = req.body.preco;
//             produto.descricao = req.body.descricao;

//             produto.save(function (error) {
//                 if (error)
//                     res.send("Erro ao tentar atualizar um produto" + error);

//                 res.status(200).json({
//                     message: "produto atualizado com sucesso"
//                 });

//             });
//         }

//     });

// }

// exports.delete = function (req, res) {
//     Produto.findByIdAndRemove(req.params.productId, (err, produto) => {
//         if (err)
//             return res.status(500).send(err);

//         const response = {
//             message: "produto removido com sucesso",
//             id: produto.id
//         };
//         return res.status(200).send(response);
//     });
// }