# 🛣️ Roadmap de Desarrollo – Proyecto Prometeo

Este documento detalla la planificación del desarrollo del proyecto **Prometeo**, comenzando por un MVP funcional y siguiendo con iteraciones de mejora en base a funcionalidades adicionales, escalabilidad y experiencia de usuario.

---

## ✅ MVP – Producto Mínimo Viable

El objetivo del MVP es lanzar una primera versión utilizable, simple pero funcional, que permita a cualquier usuario:

### 🎯 Funcionalidades clave del MVP

1. **Visualizar libros disponibles**
   - Listado general de libros: título, autor, descripción y enlace de descarga.
   - Diseño responsivo y amigable.

2. **Subir un nuevo libro**
   - Formulario con campos: título, autor, descripción, categoría, archivo PDF.
   - Validación básica del formulario.

3. **Descargar libros**
   - Acceso libre a los libros subidos, sin necesidad de registro.

4. **Backend funcional**
   - API REST con endpoints para:
     - GET `/books`
     - POST `/books`
     - GET `/books/:id`
   - Almacenamiento en base de datos (PostgreSQL) mediante Prisma.
   - Almacenamiento de archivos en carpeta local (por ahora).

5. **Estructura técnica y documentación**
   - Repositorio estructurado por carpetas: `frontend/`, `backend/`, `docs/`.
   - Documentación inicial: `README`, stack, roadmap, endpoints.

---

## 🔄 Iteración 1 – Mejoras en la experiencia y estructura

- 🎨 Mejoras de diseño en frontend (página de inicio, UI más pulida).
- 🧩 Agregado de categorías y filtrado por autor o categoría.
- 📦 Sistema de subida de archivos a Supabase Storage o Firebase.
- 🧪 Validaciones más robustas en formularios (tamaño de archivo, formato).

---

## 🔄 Iteración 2 – Autenticación y comunidad

- 🔐 Registro y login de usuarios con OAuth (Google, GitHub).
- 👤 Perfil de usuario con sus libros subidos.
- 🧾 Historial de descargas o favoritos (opcional).
- 🚫 Reporte de libros o contenido inapropiado.

---

## 🔄 Iteración 3 – Expansión de funcionalidades

- 🔍 Buscador avanzado por título, autor o palabras clave.
- 🌍 Multilenguaje (al menos español e inglés).
- 📊 Página de estadísticas (libros más descargados, autores más activos).
- 🔄 Moderación colaborativa (modelo basado en confianza o votos).
- 📱 Versión móvil (opcionalmente con React Native o PWA).

---

## 🔮 Iteración 4 – Escalabilidad y comunidad

- 🗃️ Integración con API de OpenLibrary o ISBN para autocompletar metadata.
- 🧠 Recomendaciones personalizadas por actividad.
- 📚 Colecciones o listas personalizadas de libros.
- 📤 Compartir libros directamente en redes sociales.
- 🚀 Hosting profesional del backend (Railway, fly.io, etc.).

---

## 📌 Consideraciones técnicas

- Cada iteración deberá contar con su propia rama o milestone.
- Se priorizarán tareas pequeñas y bien documentadas.
- El código debe respetar una estructura limpia, modular y escalable.
- Las decisiones técnicas se irán ajustando con el crecimiento del proyecto y el feedback de usuarios.

---

Este roadmap es una guía flexible. Lo importante es avanzar paso a paso, sin apurarse, pero con visión clara del potencial del proyecto.

