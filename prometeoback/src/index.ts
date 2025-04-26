// src/index.ts
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import path from "path";

dotenv.config();

const app = express();
const prisma = new PrismaClient();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use("/api", bookRoutes);
app.use("/api", categoryRoutes);



app.get("/", (req, res) => {
  res.send("¡Bienvenido a Prometeo API! 🚀");
});

// Puerto del .env o 3000 por defecto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
