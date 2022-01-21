const roleService = require('../service/RoleService');
const Response = require('../utils/Response');

class RoleController {
    async GetAll(req, res) {
        res.send(await roleService.GetAll());
    }
    async GetById(req, res) {
        res.send(await roleService.GetById(req.params.id));
    }
    async Create(req, res) {
        let role = {
            name: req.body.name
        };

        res.send(await roleService.CreateOne(role));
    }

    async EditById(req, res) {
        let role = {
            name: req.body.name
        };

        res.send(await roleService.EditById(req.params.id, role));
    }

    async DeleteById(req, res) {
        await roleService.DeleteById(req.params.id);
        res.json(new Response('Ok', 200));
    }
}

module.exports = new RoleController();