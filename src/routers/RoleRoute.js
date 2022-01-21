const express = require("express");
const router = express.Router();

const validate = require("../middleware/Validate");
const roleScheme = require("../schemes/RoleScheme");

const isAuthorize = require("../middleware/IsAuthorize");

const roleController = require("../controllers/RoleController");

router.use(isAuthorize);
router.get(
    "/",
    roleController.GetAll
    /*
      #swagger.tags = ['Roles']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.get(
    "/:id",
    roleController.GetById
    /*
      #swagger.tags = ['Roles']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.post(
    "/",
    validate(roleScheme.create),
    roleController.Create
    /*
      #swagger.tags = ['Roles']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.patch(
    "/:id",
    validate(roleScheme.edit),
    roleController.EditById
    /*
      #swagger.tags = ['Roles']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);
router.delete(
    "/:id",
    roleController.DeleteById
    /*
      #swagger.tags = ['Roles']
      #swagger.security = [{ "bearerAuth": [] }]
      */
);

module.exports = router;
