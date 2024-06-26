"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./modules/product/product.route");
const order_route_1 = require("./modules/order/order.route");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", product_route_1.ProductRoutes);
app.use("/api", order_route_1.OrderRoutes);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to mongoose express assignment project",
    });
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});
exports.default = app;
