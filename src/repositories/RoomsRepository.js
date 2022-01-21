
const Place = require('../models/Rooms');

class RoomsRepository {
    async GetAll() {
        return await Place.findAll();
    }

    async GetById(RoomsId) {
        return await Place.findOne({
            where: { id: RoomsId }
        });
    }



    async Create(Rooms) {
        return Place.create(Rooms);
    }

    async EditById(RoomsId, Rooms) {
        await Place.update(Rooms, {
            where: {
                id: RoomsId
            }
        });

    }

    async DeleteById(RoomsId) {
        await Place.destroy({
            where: {
                id: RoomsId
            }
        });
    }

    async GetOneByQuery(query) {
        return await Place.findOne({ where: query })
    }
}

module.exports = new RoomsRepository();
