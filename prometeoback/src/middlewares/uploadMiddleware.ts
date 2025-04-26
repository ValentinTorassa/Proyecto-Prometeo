import multer from "multer";
import path from "path";

// Configuración de dónde y cómo guardar archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "book") {
      cb(null, "uploads/books");
    } else if (file.fieldname === "cover") {
      cb(null, "uploads/covers");
    } else {
      cb(null, "uploads/others");
    }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  }
});

// Aceptar dos archivos: book y cover
export const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB máximo
}).fields([
  { name: "book", maxCount: 1 },
  { name: "cover", maxCount: 1 }
]);
