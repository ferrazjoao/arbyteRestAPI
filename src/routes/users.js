const { Router } = require('express')
const router = new Router()
const controller = require('../controller/users')

const routerName = '/users'

router.post(routerName, controller.create)

router.post(`${routerName}/Login`, controller.login)

module.exports = router;