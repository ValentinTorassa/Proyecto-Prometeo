# 📚 Documentación Técnica – Prometeo Backend

---

## 🚀 Introducción

Prometeo es una API REST que permite a cualquier usuario subir, descargar y gestionar libros digitales de forma libre y gratuita.

El backend fue construido utilizando:

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Multer (para la subida de archivos)

---

## 🗂️ Estructura de Carpetas

```plaintext
src/
├── controllers/     # Lógica de controladores (libros y categorías)
├── routes/          # Definición de rutas de la API
├── middlewares/     # Middlewares (como manejo de uploads con Multer)
├── utils/           # Utilidades (por expandir)
├── index.ts         # Punto de entrada del servidor Express
uploads/
├── books/           # Archivos PDF o EPUB subidos
├── covers/          # Imágenes de portadas subidas
```

---

## 🧠 Middleware - Subida de Archivos

Utilizamos **Multer** para manejar la subida de:

- `book` → archivo del libro (`.pdf`, `.epub`)
- `cover` → imagen de portada (`.jpg`, `.png`)

Configurado en:

```
src/middlewares/uploadMiddleware.ts
```

Los archivos se almacenan en las carpetas locales `uploads/books/` y `uploads/covers/`.

---

## 🧩 Modelo de Datos – Prisma (`prisma/schema.prisma`)

```prisma
model Book {
  id          String   @id @default(uuid())
  title       String
  author      String
  description String
  filename    String
  fileUrl     String
  coverImage  String?
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Category {
  id    String @id @default(uuid())
  name  String
  books Book[]
}
```

---

## 🛠️ Cómo aplicar migraciones Prisma

### 1. Modificar `prisma/schema.prisma` si agregás o cambias campos.

### 2. Generar migraciones:

```bash
npx prisma migrate dev --name nombre-de-la-migracion
```

Esto:

- Crea la base de datos si no existe.
- Aplica cambios.
- Genera código actualizado para Prisma Client.

### 3. (Opcional) Regenerar cliente Prisma manualmente:

```bash
npx prisma generate
```

---

## 📡 Endpoints disponibles

| Método | Ruta | Descripción |
|:---|:---|:---|
| `GET` | `/api/books` | Listar todos los libros |
| `GET` | `/api/books/:id` | Obtener un libro específico por ID |
| `POST` | `/api/books` | Subir un nuevo libro y su portada |
| `GET` | `/api/categories` | Listar todas las categorías |
| `POST` | `/api/categories` | Crear una nueva categoría |

---

## 🔥 Flujo de desarrollo recomendado

1. **Levantar PostgreSQL**:

```bash
sudo systemctl start postgresql
```

2. **Levantar backend en desarrollo**:

```bash
npx ts-node-dev src/index.ts
```

3. **Acceder a la API**:

- `GET /api/books`
- `POST /api/books`
- `GET /api/categories`
- `POST /api/categories`

4. **Opcional**: usar `upload-test.html` para subir archivos desde navegador.

---

## 📋 Notas

- Las cargas de archivos se guardan localmente en `/uploads/`.
- Las IDs (`id`) son generadas automáticamente como UUIDs.
- Se recomienda hacer backups periódicos de la carpeta `/uploads/` si se usa en producción.

---

