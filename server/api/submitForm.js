import express from 'express';
import ContactMessage from '../models/contactMessage.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Formulario enviado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el mensaje' });
  }
});

export default router;