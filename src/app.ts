import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express()

// parsers
app.use(express.json());
app.use(cors());

// app.use('/api/v1', )
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to mongoose express assignment project"
  })
})

export default app;

