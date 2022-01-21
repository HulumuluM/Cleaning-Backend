const RoomsService = require('../service/RoomsService');

class RoomsController {
    async GetAll(req, res) {
        res.send(await RoomsService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await RoomsService.GetDetailedById(req.params.id))
    }

    async Create(req, res) {
        let Rooms = {
            hallId: req.body.hallId,
            floor: req.body.floor,
            seat: req.body.seat,
            row: req.body.row,
            isVip: req.body.isVip
        };

        res.send(await RoomsService.Create(Rooms));
    }

    async EditById(req, res) {
        let Rooms = {
            hallId: req.body.hallId,
            floor: req.body.floor,
            seat: req.body.seat,
            row: req.body.row,
            isVip: req.body.isVip
        };

        res.send(await RoomsService.EditById(req.params.id, Rooms));
    }

    async DeleteById(req, res) {
        await RoomsService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new RoomsController();