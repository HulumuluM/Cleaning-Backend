const OrdersService = require('../service/OrdersService');

class OrdersController {
    async GetAll(req, res) {
        res.send(await OrdersService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await OrdersService.GetDetailedById(req.params.id))
    }

    async Create(req, res) {
        let Orders = {
            ServicesId: req.body.ServicesId,
            RoomsId: req.body.RoomsId
        };

        res.send(await OrdersService.Create(Orders));
    }

    async EditById(req, res) {
        let Orders = {
            ServicesId: req.body.ServicesId,
            RoomsId: req.body.RoomsId
        };

        res.send(await OrdersService.EditById(req.params.id, Orders));
    }

    async DeleteById(req, res) {
        await OrdersService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new OrdersController();