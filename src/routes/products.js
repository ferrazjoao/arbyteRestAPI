const { Router } = require('express')
const router = new Router()
const controller = require('../controller/products')
const authenticate = require('./middlewares/authenticate')

const routerName = '/products'

router.get(routerName, controller.getAll);

router.get(`${routerName}/:id`, controller.getById )

router.post(routerName, authenticate, controller.create)

router.patch(`${routerName}/:id`, controller.update);

router.delete(`${routerName}/:id`, controller.del);

module.exports = router;