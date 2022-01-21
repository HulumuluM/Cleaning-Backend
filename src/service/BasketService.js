const BasketRepository = require('../repositories/BasketRepository');

class BasketService {
    async GetAll() {
        return await  BasketRepository.GetAll();
    }

    async GetDetailedById(basketId) {
        return await  BasketRepository.GetDetailedById(basket);
    }

    async Create(basketId) {
        return await  BasketRepository.Create(basket);
    }

    async EditById(basketId, basket) {
        return await  BasketRepository.EditById(basketId, basket);
    }

    async DeleteById( basketId) {
        return await  BasketRepository.DeleteById(basketId);
    }
}

module.exports = new  BasketService();