import { Product } from "../models/products.js";

export const getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json(products);
};

export const postProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  const product = new Product({ name, price, stock });
  await product.save();
  res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Ürün bulunamadı." });
    }

    res
      .status(200)
      .json({ message: "Ürün başarıyla silindi.", deletedProduct });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Ürün silinirken bir hata oluştu.",
        error: error.message,
      });
  }
};
