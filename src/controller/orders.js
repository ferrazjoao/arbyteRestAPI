const services = require( "../services/orders")
const Order = require('../models/Order')
const handleError = require('./handleError')

const getAll = async (req, res) => {
    try {
    const orders =  await services.getAll()
    res.json(orders);
    } catch (error) {
        handleError(res, error)
    }
};

const create = async (req, res) => {
    try {
        const order = new Order(req.body);
        if (!order.product_id || !order.quantity || !order.value) {
            throw { status: 400, message: "Invalid data" };
        }
        const created = await services.create(order);
        res.status(201).json(created);
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = {
    getAll,
    create,
};