import express from "express";

import {
  getProducts,
  postProduct,
  deleteProduct,
} from "../controller/point.controller.js";

const { Router } = express;
const router = Router();

router.route("/").get(getProducts).post(postProduct);
router.route("/:id").delete(deleteProduct);
export default router;
