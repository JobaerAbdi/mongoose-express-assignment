import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParseData = orderValidationSchema.parse(orderData)
    const result = await OrderServices.createOrderIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const query = req.query.email
    const result = await OrderServices.getAllOrdersFromDB(query);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Order not found",
      error: err,
    });
  }
};


export const OrderControllers = {
    createOrder,
    getAllOrder
}
