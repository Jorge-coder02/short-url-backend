import express from "express";
const router = express.Router();
import { nanoid } from "nanoid";
import Url from "./Url.js";

// Rutas

// GET server (pruebas)
router.get("/", (_, res) => {
  res.send("Conectado 🚀");
});

// GET all results (pruebas)
router.get("/all", async (_, res) => {
  try {
    const allUrls = await Url.find({}); //
    const result = allUrls.map((url) => ({
      shortUrl: url.shortId,
      originalUrl: url.originalUrl,
    }));
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ err: "No encontrada" });
  }
});

// GET ShortUrl (pruebas)
router.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  if (!shortId || shortId === "") {
    return res.status(404).json({ err: "Url con formato no válido" }); // ❌
  }

  try {
    const resulbbdd = await Url.findOne({ shortId }); // Buscar el shortId en la bbdd
    // Validar si se encuentra
    if (!resulbbdd) {
      return res.status(404).json({ error: "Url no encontrada" }); // ❌
    }
    // Redirigir a la URL original
    res.redirect(resulbbdd.originalUrl); // ✅ Redirigir al campo originalUrl que contiene la URL
  } catch (error) {
    return res.status(404).json({ err: "Url con formato no válido", error }); // ❌
  }
});

// POST (recibir URL del usuario)
router.post("/", async (req, res) => {
  const { originalUrl } = req.body;

  // Validar
  // no está vacía
  if (!originalUrl || originalUrl.trim() === "") {
    return res.status(404).json({ err: "URL no puede estar vacía" });
  }
  // formato url
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  if (!urlRegex.test(originalUrl)) {
    return res.status(400).json({ err: "La URL no tiene un formato válido" });
  }
  // BBDD
  try {
    const shortId = nanoid(6); // generar id de 6 chars

    const newUrl = new Url({ originalUrl, shortId }); // crear lo que vamos a guardar en bbdd
    const savedUrl = await newUrl.save(); // guardar en bbdd
    console.log("Objeto guardado:", savedUrl); // Verifica el objeto

    return res.status(201).json({ shortId }); // ✅ Envío el ID de vuelta al Front
  } catch (e) {
    return res.status(500).json({ err_msg: "Url no llega", e });
  }
});

export default router;
