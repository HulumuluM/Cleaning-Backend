const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');


const isAuthorize = require('../middleware/IsAuthorize');

const RoomsController = require('../controllers/RoomsController');
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get('/', RoomsController.GetAll
    /*
    #swagger.tags = ['Places']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/:id', RoomsController.GetDetailedById
    /*
    #swagger.tags = ['Places']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.post('/',  RoomsController.Create
    /*
    #swagger.tags = ['Places']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', RoomsController.EditById
    /*
    #swagger.tags = ['Places']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', RoomsController.DeleteById
    /*
    #swagger.tags = ['Places']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;