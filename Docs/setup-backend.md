# 🚀 Guía de Instalación y Configuración – Prometeo Backend

Este documento describe todos los pasos necesarios para instalar, configurar y correr el backend de **Prometeo** en un entorno de desarrollo local.

---

## 📦 Instalación de PostgreSQL

**En Debian/Ubuntu**:

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

**Verificar si PostgreSQL está corriendo**:

```bash
sudo systemctl status postgresql
```

**Desactivar arranque automático** (opcional para desarrollo):

```bash
sudo systemctl disable postgresql
sudo systemctl stop postgresql
```

**Levantar manualmente PostgreSQL**:

```bash
sudo systemctl start postgresql
```

---

## 🌐 Instalación de pgAdmin4 (modo web)

**Instalar pgAdmin4 web**:

```bash
sudo apt install pgadmin4-web
```

**Configurar acceso a pgAdmin4**:

```bash
sudo /usr/pgadmin4/bin/setup-web.sh
```

Esto pedirá:
- Correo electrónico (solo para pgAdmin, no para la base)
- Contraseña de acceso a pgAdmin

**Acceder a pgAdmin4**:

- Levantar servidor web si es necesario:

```bash
sudo systemctl start apache2
```

- Acceder desde navegador:

```
http://localhost/pgadmin4
```

**Desactivar arranque automático de Apache2** (opcional):

```bash
sudo systemctl disable apache2
sudo systemctl stop apache2
```

---

## 🔑 Cambiar la contraseña del usuario `postgres`

1. Ingresar a consola de PostgreSQL:

```bash
sudo -u postgres psql
```

2. Cambiar la contraseña:

```sql
ALTER USER postgres WITH PASSWORD 'nueva_contraseña';
```

3. Salir:

```bash
\q
```

---

## 🛠️ Instalación de dependencias del proyecto Prometeo Backend

Desde la carpeta `prometeoback/`:

```bash
npm install express cors dotenv
npm install -D typescript ts-node-dev @types/node @types/express
npm install prisma @prisma/client
npm install multer @types/multer
```

**Resumen de dependencias instaladas**:

| Paquete | Uso |
|:---|:---|
| express | Framework HTTP |
| cors | Permitir acceso cross-origin |
| dotenv | Variables de entorno |
| typescript | TypeScript en backend |
| ts-node-dev | Desarrollo en hot-reload |
| @types/node | Tipos de Node.js |
| @types/express | Tipos de Express |
| prisma | ORM para base de datos |
| @prisma/client | Cliente generado por Prisma |
| multer | Subida de archivos |
| @types/multer | Tipos de Multer |

---

## ⚙️ Configurar archivo `.env`

Crear un archivo `.env` en la raíz de `prometeoback/`:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/prometeo"
```

Ejemplo real:

```env
DATABASE_URL="postgresql://postgres:miclave123@localhost:5432/prometeo"
```

---

## 🛠️ Migraciones iniciales con Prisma

1. Editar el archivo `prisma/schema.prisma` con los modelos.
2. Crear la base de datos y las tablas:

```bash
npx prisma migrate dev --name init
```

Esto:
- Crea la base si no existe.
- Aplica las migraciones.
- Genera el cliente Prisma actualizado.

**Actualizar cliente Prisma manualmente** (opcional):

```bash
npx prisma generate
```

---

## 🏁 Comandos para desarrollo

**Levantar el backend**:

```bash
npx ts-node-dev src/index.ts
```

**Levantar PostgreSQL** (si está detenido):

```bash
sudo systemctl start postgresql
```

**Levantar Apache para acceder a pgAdmin** (si está detenido):

```bash
sudo systemctl start apache2
```

---

## 📋 Flujo de trabajo recomendado

1. Start PostgreSQL (`sudo systemctl start postgresql`).
2. Start backend (`npx ts-node-dev src/index.ts`).
3. (Opcional) Start Apache y pgAdmin para gestionar base de datos (`sudo systemctl start apache2`).
4. Hacer cambios en código, migraciones y probar.
5. Stop servicios al finalizar (`sudo systemctl stop apache2 && sudo systemctl stop postgresql`).


