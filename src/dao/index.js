import { ProductsManagerFiles } from "./files/productsManagerFiles.js";
import { CartsManagerFiles } from "./files/cartsManagerFiles.js";
import { __dirname } from "../utils.js";
import path from "path";
import { ProductsManagerMongo } from "../dao/mongo/productsManagerMongo.js";
import { CartsManagerMongo } from "../dao/mongo/cartsManagerMongo.js";

export const productsService = new ProductsManagerMongo();
export const cartsService = new CartsManagerMongo();
