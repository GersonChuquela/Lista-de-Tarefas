/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviou o formulário...");
    if(!value || !category) return;
    console.log(value, category);
    addTodo(value, category)
    setValue("");
    setCategory("");
  };
  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder="Digite o título" 
         value={value}
         onChange={(e) => setValue(e.target.value)} 
         />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="trabalho">trabalho</option>
          <option value="casa">casa</option>
          <option value="saúde">saúde</option>
          <option value="estudos">estudos</option>
          <option value="lazer">lazer</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm
