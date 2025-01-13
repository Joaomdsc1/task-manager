const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json()); // Para interpretar JSON
app.use(cors());

// Conecte ao banco de dados
connectDB();

// Rotas simples para teste
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
