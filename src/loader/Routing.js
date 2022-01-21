// ErrorHandler

const express = require('express');
const router = express.Router();


const userRouter = require('../routers/UserRoute');
const BasketRouter = require('../routers/BasketRoute');
const CleaningJobRouter = require('../routers/CleaningJobRoute');
const OrdersRouter = require('../routers/OrdersRoute');
const ReviewRouter = require('../routers/ReviewRoute');
const RoleRouter = require('../routers/RoleRoute');
const RoomsRouter = require('../routers/RoomsRoute');

// /signup
// /signin
// use is authorized


router.use('/users', userRouter);
router.use("/roles", RoleRouter);
router.use("/Basket", BasketRouter);
router.use("/CleaningJob", CleaningJobRouter);
router.use("/Orders", OrdersRouter);
router.use("/Review", ReviewRouter);
router.use("/Rooms", RoomsRouter);

module.exports = router;