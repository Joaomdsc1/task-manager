import React, { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'pendente',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/tasks', task)
      .then(response => {
        console.log('Tarefa adicionada:', response.data);
        // Aqui você pode limpar o formulário ou adicionar a nova tarefa ao estado
      })
      .catch(error => {
        console.error('Erro ao adicionar tarefa:', error);
      });
  };

  return (
    <div>
      <h1>Adicionar Nova Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descrição</label>
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em Andamento</option>
            <option value="concluída">Concluída</option>
          </select>
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
};

export default AddTask;