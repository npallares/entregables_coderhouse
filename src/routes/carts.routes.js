import { Router } from "express";
import { cartsService } from "../dao/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await cartsService.getCarts();
    res.json({ status: "success get carts", data: result });
  } catch (error) {
    res.status(500).json({ status: "error carts", message: error.message });
  }
});

router.get("/:cartId", async (req, res) => {
  try {
    const cartId = await req.params.cartId;
    const result = await cartsService.getCartById(cartId);
    console.log("result", result);
    res.json({ status: "Success getById carts", data: result });
  } catch (error) {
    res.status(520).json({ status: "error", message: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const cartInfo = req.body;
    const result = await cartsService.createCart(cartInfo);
    res.json({ status: "Success post carts", data: result });
  } catch (error) {
    res.status(510).json({ status: "error carts", message: error.message });
  }
});

router.delete("/:cartId", async (req, res) => {
  try {
    const cartId = await req.params.cartId;
    const result = await cartsService.deleteCart(cartId)
    res.json({ status: "Success Delete", data: result });
  } catch (error) {
    res.status(530).json({ status: "error", message: error.message });
  }
});

export { router as cartsRouter };