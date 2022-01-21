const OrdersRepository = require('../repositories/OrdersRepository');
const BadRequestError = require("../Errors/BadRequestError");

class OrdersService {
    async GetAll() {
        return await OrdersRepository.GetAll();
    }

    async GetDetailedById(OrdersId) {
        return await OrdersRepository.GetDetailedById(OrdersId);
    }

    async Create(Orders) {
        if (await OrdersRepository.GetOneByQuery(Orders)) {
            throw new BadRequestError('Orders already exists');
        }

        return await OrdersRepository.Create(Orders);
    }

    async EditById(OrdersId, Orders) {
        return await OrdersRepository.EditById(OrdersId, Orders);
    }

    async DeleteById(OrdersId) {
        return await OrdersRepository.DeleteById(OrdersId);
    }
}

module.exports = new OrdersService();