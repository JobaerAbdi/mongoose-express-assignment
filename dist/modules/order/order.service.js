"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrderIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // find the product by productId
    const validIdProduct = yield product_model_1.Product.findOne({
        _id: payload.productId,
    });
    // console.log(validIdProduct);
    if (validIdProduct.inventory.quantity < payload.quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }
    // order create
    const result = yield order_model_1.Order.create(payload);
    // if order is created than
    if (result._id) {
        const remainingStock = validIdProduct.inventory.quantity - payload.quantity;
        const inStock = remainingStock > 0;
        yield product_model_1.Product.updateOne({ _id: payload.productId }, {
            "inventory.quantity": remainingStock,
            "inventory.inStock": inStock,
        });
    }
    return result;
});
const getAllOrdersFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    if (query) {
        const result = yield order_model_1.Order.find({ email: query });
        return result;
    }
    const result = yield order_model_1.Order.find({});
    return result;
});
exports.OrderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
};
