import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fazendo a requisição GET para o backend
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data); // Atualiza o estado com as tarefas
      })
      .catch(error => {
        console.error("Erro ao carregar as tarefas", error);
      });
  }, []); // A dependência vazia significa que o efeito será executado apenas uma vez, quando o componente for montado.

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title} - {task.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;