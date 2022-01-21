const Services = require('../models/CleaningJob');
const Rooms = require('../models/Rooms');
const Orders = require('../models/Orders');

class OrdersRepository {
    async GetAll() {
        return await Orders.findAll();
    }

    async GetDetailedById(OrdersId) {
        return await Orders.findOne({
            include: [Services, Rooms],
            where: {
                id: OrdersId
            }
        });
    }

    async Create(Orders) {
        return Orders.create(Orders); // await redundant because is async method and create also async method
    }

    async EditById(OrdersId, Orders) {
        await Orders.update(Orders, {
            where: {
                id: OrdersId
            }
        });

        return await this.GetDetailedById(OrdersId);
    }

    async DeleteById(OrdersId) {
        await Orders.destroy({
            where: {
                id: OrdersId
            }
        });
    }

    async GetOneByQuery(query) {
        return await Orders.findOne({ where: query })
    }
}

module.exports = new OrdersRepository();
