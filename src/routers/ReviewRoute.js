const express = require("express");
const router = express.Router();

const validate = require("../middleware/Validate");
const reviewScheme = require("../schemes/ReviewScheme");

const isAuthorize = require("../middleware/IsAuthorize");

const reviewController = require("../controllers/ReviewComtroller");
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get(
    "/",
    reviewController.GetAll
    /*
      #swagger.tags = ['Reviews']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.get(
    "/:id",
    reviewController.GetDetailedById
    /*
      #swagger.tags = ['Reviews']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.post(
    "/",
    validate(reviewScheme.create),
    reviewController.Create
    /*
      #swagger.tags = ['Reviews']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.patch(
    "/:id",
    validate(reviewScheme.edit),
    reviewController.EditById
    /*
      #swagger.tags = ['Reviews']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.delete(
    "/:id",
    reviewController.DeleteById
    /*
      #swagger.tags = ['Reviews']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);

module.exports = router;
