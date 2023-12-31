import { cartsModel } from "./models/carts.model.js";

export class CartsManagerMongo {
  constructor() {
    this.model = cartsModel;
  }

  async checkCartsById(cartId) {
    const result = await this.model.findById(cartId);
    return Boolean(result);
  }

  async getCarts() {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      console.log("getCarts error", error.message);
      throw new Error(`no se pudo obtener los carritos ${error.message}`);
    }
  }

  async getCartById(cartId) {
    try {
      console.log("cartId :", cartId);
      const result = await this.model.findById(cartId);
      if (result) {
        const newQuantity = Number(result.products[0].quantity) + 1;
        const cartId = result.products[0].id;
        const cart = result.products[0];
        return cart;
      }
    } catch (error) {
      console.log("getCartById error", error.message);
      throw new Error(`no se pudo obtener el getCartById ${error.message}`);
    }
  }

  async createCart(cartInfo) {
    try {
      const result = await this.model.create(cartInfo);
      return result;
    } catch (error) {
      console.log("createProduct error", error.message);
      throw new Error(`no se pudo crear el producto ${error.message}`);
    }
  }

  async deleteCart(cartId) {
    try {
      const result = await this.model.findByIdAndDelete(cartId);
      if (!result) throw new Error("No se pudo deletear el carrito");
      return result;
    } catch (error) {
      console.log("deleteCart error", error.message);
      throw new Error(`no se pudo deletear el carrito ${error.message}`);
    }
  }

  async updateCart(cartId) {
    try {
      const cart = await this.getCartById(cartId);
      const newQuantity = cart.quantity + 1;
      const productId = cart.id;
      const filter = {
        _id: ObjectId(productId),
        "type.productId": "producto1", // Filtra por el productId del producto que deseas actualizar
      };
      console.log("productId", productId);
      const result = await this.model.updateOne(
        { id: productId },
        newQuantity,
        { new: true }
      );
      if (!result) throw new Error("No se pudo updatear el carrito");
      return result;
    } catch (error) {
      console.log("updateCart error", error.message);
      throw new Error(`no se pudo updatear el carrito ${error.message}`);
    }
  }
}
