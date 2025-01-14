const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes'); // Importando as rotas

dotenv.config();

const app = express();

// Middlewares
app.use(express.json()); // Para interpretar JSON
app.use(cors());

// Conecte ao banco de dados
connectDB();

// Rotas
app.use('/api', taskRoutes); // Todas as rotas de tarefas começarão com /api

// Rota simples para teste
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
