const {Router} = require('express');
const orders  = require("./orders");
const products  = require("./products");
const users = require('./users')

const router = new Router();

router.use(orders);
router.use(products);
router.use(users);

// Quando não encontra rota entra aqui
router.use((req, res, next) => {
    const erro = new Error('Erro na Consulta')
    erro.status = 404;
    next(erro);
});

module.exports = router;