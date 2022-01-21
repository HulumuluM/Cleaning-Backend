const userService = require("../service/UserService");

class UserController {
    async GetAll(req, res) {
        res.send(await userService.GetAll());
    }
    async GetById(req, res) {
        res.send(await userService.GetDetailById(req.params.id));
    }

    async EditById(req, res) {
        let userId = req.params.id;

        let user = {
            login: req.body.login,
            password: req.body.password,
        };

        let userInfo = {
            avatar: req.body.avatar,
            firstName: req.body.firstName,
            email: req.body.email,
            phone: req.body.phone,
        };

        res.send(await userService.EditById(userId, user, userInfo));
    }

    async DeleteById(req, res) {
        await userService.DeleteById(req.params.id);
        res.send("Ok");
    }

    async Register(req, res) {
        let user = {
            login: req.body.login,
            password: req.body.password,
        };

        let userInfo = {
            avatar: req.body.avatar ?? null,
            firstName: req.body.firstName,
            email: req.body.email,
            phone: req.body.phone ?? null,
        };

        res.send(await userService.Register(user, userInfo));
    }

    async Login(req, res) {
        let user = {
            login: req.body.login,
            password: req.body.password,
        };

        res.send(await userService.Login(user));
    }
}

module.exports = new UserController();
