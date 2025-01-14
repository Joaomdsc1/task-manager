const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Certifique-se de ter um modelo Task criado

// Rota para criar uma nova tarefa
router.post('/tasks', async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar a tarefa', error: error.message });
  }
});

// Outras rotas (opcional para agora)

// Rota para listar todas as tarefas
router.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();  // Buscar todas as tarefas no banco
      res.status(200).json(tasks);  // Retorna as tarefas encontradas
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar as tarefas', error: error.message });
    }
  });
  
// Rota para atualizar uma tarefa
router.put('/tasks/:id', async (req, res) => {
    try {
      const { title, description, status } = req.body;
      const task = await Task.findByIdAndUpdate(
        req.params.id,
        { title, description, status },
        { new: true }  // Retorna o documento atualizado
      );
      if (!task) {
        return res.status(404).json({ message: 'Tarefa não encontrada' });
      }
      res.status(200).json(task);  // Retorna a tarefa atualizada
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar a tarefa', error: error.message });
    }
  });

// Rota para excluir uma tarefa
router.delete('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).json({ message: 'Tarefa não encontrada' });
      }
      res.status(200).json({ message: 'Tarefa excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir a tarefa', error: error.message });
    }
  });
  

module.exports = router;
