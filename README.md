# Enlace de la página (front)
https://short-url-frontend-khaki.vercel.app/

# 👩‍💻🏛 ShortUrl (Acortador de enlaces)

[![Status](https://img.shields.io/badge/Status-✅_Ready-28A745)](https://github.com/Jorge-coder02/short-url-backend)

[![Licencia](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

🔗 **Visitar:** [Ver en vivo](https://short-url-frontend-khaki.vercel.app/)

## 🚀 ¿Cómo funciona?

Este backend actúa como un servicio de **acortamiento de URLs**. El flujo principal es el siguiente:

1. **Recepción de la URL original:**  
   El usuario envía una URL larga mediante una petición al backend.

2. **Generación y almacenamiento:**  
   - Se genera un identificador único corto usando [`nanoid`](https://github.com/ai/nanoid) de 6 caracteres.  
   - Se guarda en la base de datos MongoDB el par `{ id_corto, url_original }` para futuras consultas.

3. **Devolución de la URL corta:**  
   El backend responde con la URL acortada que contiene el `id` generado, por ejemplo:  
   `https://tu-dominio.com/abc123`

4. **Redirección a la URL original:**  
   Cuando alguien accede a la URL corta:  
   - El backend recibe el `id` como parámetro.  
   - Consulta en MongoDB la URL original asociada.  
   - Redirige al usuario a esa URL original.

---

Así, el backend funciona como intermediario, guardando y traduciendo URLs largas en versiones cortas fáciles de compartir, con un sistema eficiente y escalable basado en MongoDB y nanoid.


## 🚀 Tecnologías Principales
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-20.0.0-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18.2-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0.5-47A248?logo=mongodb)

## ✨ Características Destacadas
- ✅ Validación de url correcta
- ✅ Loading spinner de carga en peticiones al back
- ✅ Diseño responsive

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Jorge-coder02/short-url-backend.git
cd short-url-backend
```

2. **Instalar dependencias**
 ```bash
 npm install
```
o si usas Yarn
```bash
yarn install
 ```

3. **Ejecutar en modo desarrollo**
  ```bash
  npm run dev
  ```
  ## El servidor estará disponible en:
  ## http://localhost:3000


## 🗂️ Estructura del Proyecto

```plaintext
📦 root
├── .gitignore                 # Configuración de archivos ignorados por Git
├── README.md                  # 📄 Documentación del proyecto
├── Url.js                     # 🚦 Configuración de URLs / Endpoints
├── db.js                      # 🛢️ Configuración y conexión a MongoDB
├── package.json               # 📦 Dependencias y scripts Node.js
├── package-lock.json          # 🔒 Versionado exacto de dependencias
└── url_routes.js              # 🛣️ Definición de rutas backend (API)

```


# Versiones

- cors: "^2.8.5",
- dotenv: "^16.4.7",
- express: "^4.21.2",
- mongoose: "^8.10.1",
- nanoid: "^5.1.0"


## Dependencias de desarrollo:

- nodemon: "^3.1.9"



