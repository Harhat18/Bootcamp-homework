import express from "express";

import {
  getProducts,
  postProduct,
  deleteProduct,
} from "../controller/point.controller.js";

const { Router } = express;
const router = Router();

router.route("/").get(getProducts);
router.route("/").post(postProduct);
router.route("/_id").post(deleteProduct);

export default router;
