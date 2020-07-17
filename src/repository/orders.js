const knex = require('../database')
const orders = require('../services/orders');
const tableName = 'orders';

const getAll = () => knex(tableName);

const create = (order) => {
    return knex(tableName)
        .insert(order)
        .then(([inserted]) => inserted)
};

module.exports = { 
    getAll,
    create,
 };

