# 🧱 Stack Tecnológico de Prometeo

A continuación se detallan las tecnologías seleccionadas para el desarrollo del proyecto **Prometeo**, junto con una breve justificación para cada una de ellas.

---

## 🖥️ Frontend

### React + TypeScript
- **Motivo**: Permite construir interfaces dinámicas y reactivas de forma modular.
- **TypeScript**: Aporta seguridad en tiempo de compilación y facilita la escalabilidad del código.

### Tailwind CSS
- **Motivo**: Framework de estilos utilitario, ideal para prototipar rápido con diseño limpio.
- **Ventaja**: Flexibilidad total sin tener que escribir CSS personalizado al inicio.

---

## ⚙️ Backend

### Node.js + Express
- **Motivo**: Ligero, eficiente, y excelente para construir APIs RESTful.

### TypeScript en backend
- **Motivo**: Mantiene el mismo lenguaje y tipado que en el frontend.
- **Ventaja**: Permite compartir tipos entre frontend y backend en el futuro.

---

## 🗄️ Base de Datos

### PostgreSQL
- **Motivo**: Base de datos relacional robusta, escalable y con soporte amplio.
- **Ventaja**: Ideal para modelos estructurados como libros, usuarios, categorías, etc.

### Prisma (ORM)
- **Motivo**: ORM moderno para TypeScript que simplifica la interacción con la base de datos.
- **Ventaja**: Tipado estático, migraciones automáticas y queries intuitivas.

---

## ☁️ Almacenamiento de Archivos

### (En discusión) Supabase Storage / Firebase / S3
- **Motivo**: Necesitamos un sistema para subir y descargar archivos (PDFs, EPUBs).
- **Elección final**: Se tomará en la etapa de implementación, pero Supabase es fuerte candidato por su integración con PostgreSQL y facilidad de uso con TypeScript.

---

## 🚀 Deploy (previsto)

- **Frontend**: Vercel o Netlify
- **Backend**: Railway o Render
- **Base de datos**: Railway o Supabase

---

## 🔁 Alternativas consideradas

- **GraphQL**: Se descartó por ahora en favor de REST por simplicidad inicial.
- **Next.js**: Puede incorporarse a futuro si se desea SSR o rutas API unificadas.

---

Este stack busca equilibrio entre *aprendizaje, rendimiento y facilidad de desarrollo*, especialmente pensado para desarrolladores en etapa de crecimiento técnico.

