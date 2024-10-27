

import express from 'express'
import adminAuth from '../middleware/adminAuth.js';
import { allOrders, placeOrder, placeOrderRazorPay, placeOrderStripe, updateStatus, userOrders } from '../controllers/orderController.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)
orderRouter.post('/place', authUser,placeOrder)
orderRouter.post('/stripe',authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorPay)
orderRouter.post('/userorders', authUser, userOrders);

export default orderRouter;
