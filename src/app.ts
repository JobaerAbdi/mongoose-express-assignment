import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/product.route";
import { OrderRoutes } from "./modules/order/order.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());



app.use("/api", ProductRoutes);
app.use("/api", OrderRoutes);

app.use((req:Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to mongoose express assignment project",
  });
});

export default app;
