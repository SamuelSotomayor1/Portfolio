import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import submitFormRoute from './api/submitForm.js';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error al conectar a MongoDB:', err));

app.use('/api/submit-form', submitFormRoute);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
