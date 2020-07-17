const repository = require('../repository/orders');

const getAll = () => repository.getAll()

const create = async (order) => {
    const id = await repository.create(order);
    // const created = await repository.getById(id);
    //return created
};

module.exports = {
    getAll,
    create
};