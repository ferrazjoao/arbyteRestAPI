const knex = require('../database');
const User = require('../models/User');
const tableName = 'users';

const create = async (user) => {
    const [id] = await knex(tableName).insert(user);
    return id;
};

const getById = async id =>{
    const [user] = await knex(tableName).where({ id: id });
    return new User(user);
};

module.exports ={
    create,
    getById,
}