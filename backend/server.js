import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { DB } from "./src/models/dbConnect.js";

import Product from "./src/routers/product.routes.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;
DB();

app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors());

app.use("/api/products", Product);

app.listen(port, () => {
  console.log(`Start server on ${port}`);
});
