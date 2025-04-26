import { Router } from "express";
import { upload } from "../middlewares/uploadMiddleware";
import { createBook, getAllBooks, getBookById } from "../controllers/bookController";

const router = Router();

// Orden correcto
router.get("/books/:id", getBookById); 
router.get("/books", getAllBooks); 
router.post("/books", upload, createBook); 

export default router;
