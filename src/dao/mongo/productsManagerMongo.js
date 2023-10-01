import { productsModel } from "./models/products.model.js";

export class ProductsManagerMongo {
  constructor() {
    this.model = productsModel;
  }

  async createProduct(productInfo) {
    try {
      const result = await this.model.create(productInfo);
      return result;
    } catch (error) {
      console.log("createProduct error", error.message);
      throw new Error(`no se pudo crear el producto ${error.message}`);
    }
  }
  async getProducts() {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      console.log("getProducs error", error.message);
      throw new Error(`no se pudo obtener los productos ${error.message}`);
    }
  }
  async getProductById(productId) {
    try {
      const result = await this.model.findById(productId);
      return result;
    } catch (error) {
      console.log("getProducById error", error.message);
      throw new Error(`no se pudo obtener el producto ${error.message}`);
    }
  }
  async updateProduct(productId, newProductInfo) {
    try {
      const result = await this.model.findByIdAndUpdate(
        productId,
        newProductInfo,
        { new: true }
      );
      if (!result) throw new Error("No se pudo actualizar el producto");
      return result;
    } catch (error) {
      console.log("updateProduct error", error.message);
      throw new Error(`no se pudo updatear el producto ${error.message}`);
    }
  }
  async deleteProduct(productId) {
    try {
      const result = await this.model.findByIdAndDelete(productId);
      if (!result) throw new Error("No se pudo deletear el producto");
      return result;
    } catch (error) {
      console.log("deleteProduct error", error.message);
      throw new Error(`no se pudo deletear el producto ${error.message}`);
    }
  }
}
