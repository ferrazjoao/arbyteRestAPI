const  { Router } = require ('express');
const router = new Router();

const routeName = '/orders';

//Lista todos os Pedidos
router.get(routeName, (req, res) => {
    res.json([{ message: "Vai retornar todos os pedidos" }]);
});

// Pega os dados de um Pedido
router.get(`${routeName}/:id`, (req, res) => {
    res.json({
         message: "Vai retornar os dados de um Pedido dado um id",
        id:req.params.id,
     });
});

//Cria um Pedido
router.post(routeName, ( req, res) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    console.log(req.body);
    res.status(201).json({
        message: 'Vai criar um Pedido',
        pedidoCriado: pedido
    });
});

//Edita os dados de um Pedido
router.patch(`${routeName}/:id`, (req, res) => {
    res.json({
        message: "Vai editar os dados de umm Pedido dado um id",
        id: req.params.id,

    });
});

//Deleta um Pedido
router.delete(`${routeName}/:id`, (req, res) => res.status(204).end());


module.exports = router;


