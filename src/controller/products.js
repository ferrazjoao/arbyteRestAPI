const services = require('../services/products')
const Product = require('../models/Product')
const handleError = require('./handleError')

const getAll = (req, res) => {
    services
        .getAll()
        .then((products) => res.json(products))
        .catch((error) => handleError(res, error))
};

const getById = (req, res) => {
    services
        .getById(req.params.id)
        .then((product) => res.json(product))
        .catch((error) => handleError(res, error))
};

const create = async (req, res) => {
    try {
        const product = new Product(req.body);
        if (!product.name || !product.price) {
            throw { status: 400, message: "Invalid data" };
        }
        const created = await services.create(product);
        res.status(201).json(created);
    } catch (error) {
        handleError(res, error);
    }
};

const update = async (req, res) => {
    try {
        const updated = await services.update(req.params.id, req.body);
        res.json(updated);
    } catch (error) {
        handleError(res, error);
    }
};

const del = (req, res) => {
    services
        .del(req.params.id)
        .then(() => res.status(204).end())
        .catch((error) => handleError(res, error))
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    del,
};