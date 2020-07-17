const { Router } = require('express');
const router = new Router();
const controller = require('../controller/orders')

const routeName = '/orders';

//Lista todos os Pedidos
router.get(routeName, controller.getAll);

// Pega os dados de um Pedido
router.get(`${routeName}/:id`, (req, res) => {
    res.json({
        message: "Vai retornar os dados de um Pedido dado um id",
        id: req.params.id,
    });
});

//Cria um Pedido
router.post(routeName, controller.create)

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


