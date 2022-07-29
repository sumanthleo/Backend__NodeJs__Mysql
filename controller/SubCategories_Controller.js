const models = require("../models");
class SubCategories_Controller {
  //===========adding subcategories to the database==============

  async createSubCategory(req, res) {
    try {
      //adding subcategory by using create method
      const newsubcategory = await models.subcategories.create({
        subcategories_name: req.body.subcategories_name,
        subcategories_type: req.body.subcategories_type,
        subcategories_description: req.body.subcategories_description,
        subcategories_image: req.body.subcategories_image,
        category_id: req.body.category_id,
      });
      res.status(200).json(newsubcategory);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //=============getting all subcategories from the database===========

  async getAllSubCategories(req, res) {
    try {
      //getting all subcategories by using findAll method
      const allSubCategories = await models.subcategories.findAll({
        include: [
          {
            model: models.product,
          },
        ],
      });
      res.status(200).json(allSubCategories);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //=============getting subcategory by id from the database==========

  async getSubCategoryById(req, res) {
    try {
      //getting subcategory by id by using findById method
      const subCategoryById = await models.subcategories.findByPk(
        req.params.id,
        {
          include: [
            {
              model: models.product,
            },
          ],
        }
      );
      res.status(200).json(subCategoryById);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new SubCategories_Controller();
