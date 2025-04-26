import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las categorías" });
  }
};

export const createCategory = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "El nombre de la categoría es obligatorio" });
    }

    const newCategory = await prisma.category.create({
      data: { name }
    });

    res.status(201).json(newCategory);
  } catch (error: any) {
    console.error("Error completo:", error);
  
    if (error.code) {
      console.error("Código de error Prisma:", error.code);
      res.status(400).json({ error: `Prisma error ${error.code}`, details: error.meta });
    } else {
      res.status(500).json({ error: "Error interno al crear la categoría", details: error.message });
    }
  }
  
};


