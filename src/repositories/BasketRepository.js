const User = require('../models/User');
const Order = require('../models/Orders');
const Basket = require('../models/Basket');


class BasketRepository {
    async GetAll() {
        return await Basket.findAll();
    }

    async GetDetailedById(BasketId) {
        return await Basket.findOne({
            include: [User, Order],
            where: {
                id: BasketId
            }
        });
    }

    async Create(Basket) {
        return Basket.create(Basket);
    }

    async EditById(basketId, Basket) {
        await Basket.update( Basket, {
            where: {
                id: basketId
            }
        });

        return await this.GetDetailedById(basketId);
    }

    async DeleteById(basketId) {
        await Basket.destroy({
            where: {
                id: basketId
            }
        });
    }
}

module.exports = new BasketRepository();
