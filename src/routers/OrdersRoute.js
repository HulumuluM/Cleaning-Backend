const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const OrdersScheme = require('../schemes/OrdersScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const OrdersController = require('../controllers/OrdersController');
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get('/', OrdersController.GetAll
    /*
    #swagger.tags = ['Orders']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/:id', OrdersController.GetDetailedById
    /*
    #swagger.tags = ['Orders']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.post('/', validate(OrdersScheme.create), OrdersController.Create
    /*
    #swagger.tags = ['Orders']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(OrdersScheme.edit), OrdersController.EditById
    /*
    #swagger.tags = ['Orders']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', OrdersController.DeleteById
    /*
    #swagger.tags = ['Orders']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;