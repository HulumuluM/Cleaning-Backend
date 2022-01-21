const RoomsRepository = require("../repositories/RoomsRepository");

class RoomsService {
    async GetAll() {
        return await RoomsRepository.GetAll();
    }

    async GetDetailedById(RoomsId) {
        return await RoomsRepository.GetDetailedById(RoomsId);
    }

    async CreateOne(Rooms) {
        return await RoomsRepository.Create(Rooms);
    }

    async EditById(RoomsId, Rooms) {
        return await RoomsRepository.EditById(RoomsId, Rooms);
    }

    async DeleteById(RoomsId) {
        return await RoomsRepository.DeleteById(RoomsId);
    }
}

module.exports = new RoomsService();
