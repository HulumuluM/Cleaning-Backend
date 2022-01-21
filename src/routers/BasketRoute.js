const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const BasketScheme = require('../schemes/BasketScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const BasketController = require('../controllers/BasketController');
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get('/', BasketController.GetAll
    /*
    #swagger.tags = ['v']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/:id', BasketController.GetDetailedById
    /*
    #swagger.tags = ['Basket']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.post('/', validate(BasketScheme.create), BasketController.Create
    /*
    #swagger.tags = ['Basket']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(BasketScheme.edit), BasketController.EditById
    /*
    #swagger.tags = ['Basket']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', BasketController.DeleteById
    /*
    #swagger.tags = ['Basket']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;