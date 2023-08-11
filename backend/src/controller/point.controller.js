import { Product } from "../models/products.js";

export const getProducts = async (req, res, next) => {
  const points = await Product.find();
  res.status(200).json(points);
};

export const postProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  const point = new Product({ name, price, stock });
  await point.save();
  res.status(201).json(point);
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Point.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Point not found" });
    }
    res.status(200).json({ message: "Product deleted", product: deletedPoint });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting point", error: error.message });
  }
};
