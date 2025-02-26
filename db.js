import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./url_routes.js";
import net from "net";
const server = net.createServer();

const app = express();
const PORT = 3001;
const MONGO_URI = "mongodb://127.0.0.1:27017/urls";

// Middleware
app.use(json());
app.use(cors());

// Conexión a MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((e) => console.error("❌ Error al conectar ", e));

// Rutas
app.use("/", router); // redirigir todas al archivo url_routes.js

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(
      `El puerto ${PORT} está en uso, intentaremos con otro puerto...`
    );
    server.listen(3002); // Cambiar a otro puerto, por ejemplo, 3002
  }
});

app.listen(PORT, () => {
  console.log(`▶ Servidor corriendo en http://localhost:${PORT}`);
});
