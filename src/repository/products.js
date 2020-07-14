const knex = require('../../dataBase');
const { table, insert } = require('../../dataBase');

const tableName = 'products';

const getAll = ()=> knex(tableName);

const getById = (id) => {
    return knex(tableName)
        .where({id: id})
        .then(([product])=> product)
};

const create = (product) => {
    return knex(tableName)
        .insert(product)
        .then(([inserted]) => inserted)
};

const del = (id) => {
    return knex(tableName).where({id: id}).del()
};

module.exports = {
    getAll,
    getById,
    create,
    del,
}