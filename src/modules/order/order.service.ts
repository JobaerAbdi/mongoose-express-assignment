import { Product } from "../product/product.model";
import TOrder from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  // find the product by productId
  const validIdProduct: any = await Product.findOne({
    _id: payload.productId,
  });
  // console.log(validIdProduct);
  if (validIdProduct.inventory.quantity < payload.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }
  // order create
  const result = await Order.create(payload);
  // if order is created than
  if (result._id) {
    const remainingStock = validIdProduct.inventory.quantity - payload.quantity;
    const inStock = remainingStock > 0;
    await Product.updateOne(
      { _id: payload.productId },
      {
        "inventory.quantity": remainingStock,
        "inventory.inStock": inStock,
      }
    );
  }
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
