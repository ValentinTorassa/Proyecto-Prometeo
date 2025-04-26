// src/controllers/bookController.ts
import { Request, Response } from "express";
import { upload } from "../middlewares/uploadMiddleware"; 
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// Obtener todos los libros
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany({
      include: {
        category: true
      }
    });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los libros" });
  }
};

export const getBookById = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    const book = await prisma.book.findUnique({
      where: { id },
      include: { category: true }
    });

    if (!book) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    return res.json(book);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al obtener el libro" });
  }
};

// Crear un nuevo libro
export const createBook = async (req: Request, res: Response): Promise<any> => {
    console.log("Body:", req.body);
    console.log("Files:", req.files);
    
    try {

    const { title, author, description, categoryId } = req.body;

    if (!req.files || !("book" in req.files) || !("cover" in req.files)) {
      return res.status(400).json({ error: "Archivos book y cover son requeridos" });
    }

    const bookFile = (req.files as any).book[0];
    const coverFile = (req.files as any).cover[0];

    const newBook = await prisma.book.create({
      data: {
        title,
        author,
        description,
        filename: bookFile.filename,
        fileUrl: `/uploads/books/${bookFile.filename}`,
        coverImage: `/uploads/covers/${coverFile.filename}`,
        categoryId
      }
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el libro" });
  }
};

