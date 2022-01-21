const express = require("express");
const router = express.Router();

const validate = require("../middleware/Validate");
const CleaningJobScheme = require("../schemes/CleaningJobScheme");

const isAuthorize = require("../middleware/IsAuthorize");

const CleaningJobController = require("../controllers/CleaningJobControllers");
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get(
    "/",
    CleaningJobController.GetAll
    /*
      #swagger.tags = ['CleaningJob']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.get(
    "/:id",
    CleaningJobController.GetDetailedById
    /*
      #swagger.tags = ['CleaningJob']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.post(
    "/",
    validate(CleaningJobScheme.create),
    CleaningJobController.Create
    /*
      #swagger.tags = ['CleaningJob']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.patch(
    "/:id",
    validate(CleaningJobScheme.edit),
    CleaningJobController.EditById
    /*
      #swagger.tags = ['CleaningJob']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.delete(
    "/:id",
    CleaningJobController.DeleteById
    /*
      #swagger.tags = ['CleaningJob']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);

module.exports = router;
