# 🚀 Setup Completo – Frontend de Prometeo

---

## 📚 Tecnologías utilizadas

- **React** + **Vite** + **TypeScript** → Estructura base del proyecto.
- **TailwindCSS** → Para el diseño rápido, moderno y responsivo.
- **Axios** (próximamente) → Para consumir la API REST de Prometeoback.
- **Vite** → Motor de build rápido y flexible.

---

## 🛠️ Creación del Proyecto

Desde la carpeta principal del proyecto:

```bash
npm create vite@latest prometeofront -- --template react-ts
```

- Nombre del proyecto: `prometeofront`
- Template: `react-ts` (React + TypeScript)

Luego:

```bash
cd prometeofront
npm install
npm run dev
```

Esto levanta el servidor local en:

```
http://localhost:5173/
```

---

## 🎨 Instalación de TailwindCSS

Dentro de la carpeta `prometeofront`:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Luego:

```bash
npx tailwindcss init -p
```

Esto crea:

- `tailwind.config.js`
- `postcss.config.js`

---

## ⚙️ Configuración de TailwindCSS

### 1. `tailwind.config.js`

Editar el archivo para asegurar que Tailwind escanee todos los archivos necesarios:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### 2. `src/index.css`

Borrar todo y dejar únicamente:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧩 Estructura inicial de carpetas

```plaintext
src/
├── api/             # Comunicaciones con la API de PrometeoBack
├── components/      # Componentes reutilizables (BookCard, Navbar, etc.)
├── pages/           # Vistas principales (Home, UploadBook)
├── hooks/           # Custom hooks (opcional)
├── types/           # Tipos TypeScript compartidos
├── utils/           # Funciones y helpers varios
├── App.tsx          # Ruteo principal y estructura de la app
└── main.tsx         # Punto de entrada
```

---

## 🌟 Flujo recomendado de desarrollo

1. Levantar el frontend:

```bash
npm run dev
```

2. Consumir API Backend (`http://localhost:3000/api/...`) mediante **Axios** o **Fetch**.
3. Diseñar usando clases de TailwindCSS directamente en los componentes.
4. Modularizar componentes y páginas para mantener el código limpio.

---

## 📋 Notas importantes

- El frontend espera que el backend de PrometeoBack esté corriendo en `http://localhost:3000/`.
- Los formularios de subida de libros deben ser enviados como `multipart/form-data`.
- Es fundamental mantener sincronizado el tipo de datos (`types/`) con los modelos del backend (Book, Category).
- Para producción (futuro despliegue), se recomienda hacer el build:

```bash
npm run build
```

Y después servirlo en un hosting o integrarlo a una plataforma tipo Vercel, Netlify, etc.

¿Seguimos?
