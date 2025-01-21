import express from "express"
import adminAuth from "../middleware/adminAuth.js"
import { placeOrder, placeOrderStripe, placeOrderRazorpay, userOrders, updateStatus, allOrders, verifyStripe, verifyRazorpay } from "../controllers/orderController.js"
import authUser from "../middleware/auth.js"
const orderRouter = express.Router();

// Admin features

orderRouter.post('/list', adminAuth ,allOrders)
orderRouter.post('/status', adminAuth ,updateStatus)

//  Payment features

orderRouter.post('/place',authUser, placeOrder);
orderRouter.post('/stripe',authUser, placeOrderStripe);
orderRouter.post('/razorpay',authUser, placeOrderRazorpay);

// User feature..

orderRouter.post('/userorders', authUser, userOrders)

// verrify payment

orderRouter.post('/verifyStripe', authUser, verifyStripe)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter

