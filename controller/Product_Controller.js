const models = require("../models");

class Product_Controller {
  //adding products to the database
  async createProduct(req, res) {
    try {
      //adding product by using create method
      const newProduct = await models.product.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        product_image: req.body.product_image,
        product_quantity: req.body.product_quantity,
        product_status: req.body.product_status,
        product_discount: req.body.product_discount,
        product_discount_price: req.body.product_discount_price,
        product_Instock: req.body.product_Instock,
        product_outofstock: req.body.product_outofstock,
        product_rating: req.body.product_rating,
        product_review: req.body.product_review,
        category_id: req.body.category_id,
        subcategories_id: req.body.subcategories_id,
      });
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //getting all products from the database
  async getAllProduct(req, res) {
    try {
      //getting all products by using findAll method
      const allProduct = await models.product.findAll();
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //getting product by id from the database
  async getProductById(req, res) {
    try {
      //getting product by id by using findById method
      const productById = await models.product.findByPk(req.params.id);
      res.status(200).json(productById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new Product_Controller();
