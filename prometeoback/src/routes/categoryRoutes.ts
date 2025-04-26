import { Router } from "express";
import { getAllCategories, createCategory } from "../controllers/categoryController";

const router = Router();

router.get("/categories", getAllCategories);
router.post("/categories", createCategory);

export default router;
