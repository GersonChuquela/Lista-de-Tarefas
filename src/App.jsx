import { useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import TodoForm from "./components/todoForm";
import Search from "./components/search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 2,
      text: "finalizar relatório de vendas",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 3,
      text: "comprar leite e pão",
      category: "casa",
      isCompleted: false,
    },
    {
      id: 4,
      text: "marcar consulta médica",
      category: "saúde",
      isCompleted: false,
    },
    {
      id: 5,
      text: "estudar para a prova de matemática",
      category: "estudos",
      isCompleted: false,
    },
    {
      id: 6,
      text: "fazer exercícios físicos",
      category: "saúde",
      isCompleted: false,
    },
    {
      id: 7,
      text: "organizar a gaveta de documentos",
      category: "casa",
      isCompleted: false,
    },
    {
      id: 8,
      text: "planejar viagem de férias",
      category: "lazer",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("ASC");

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "ASC"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
