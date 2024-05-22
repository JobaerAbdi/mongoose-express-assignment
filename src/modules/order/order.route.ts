import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post("/orders", OrderControllers.createOrder);
router.get("/orders", OrderControllers.getallOrder); // /api/orders?email=level2@programming-hero.com

export const OrderRoutes = router