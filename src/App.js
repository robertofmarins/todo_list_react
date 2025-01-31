import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); // Armazena as tarefas
  const [newTodo, setNewTodo] = useState(''); // Armazena o valor da nova tarefa

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={handleAddTodo}>Adiciona</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => handleToggleComplete(index)}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
