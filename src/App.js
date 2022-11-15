import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const LOCAL_STORAGE_KEY = 'todosApp.todos'

function App() {

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storedTodos);
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function togolTodo(id){
    const newTodos =[...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function addTodo(e) {
    let name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function clearTodo(){
    const newTodos =todos.filter(todo=>!todo.complete)
    setTodos(newTodos)

  }

  return (
    <>

      <input ref={todoNameRef} type="text" placeholder="Enter a To do" />
      <br/>
      <button onClick={addTodo}>Add To do</button>{" "}
      <button onClick={clearTodo}>Clear To do</button>
      <br/>
      <br/>
      <div>Yuo have {todos.filter(todo=>!todo.complete).length} to do</div>
      <br/>
      <TodoList todoList={todos} togolTodo={togolTodo}/>
    </>
  );
}

export default App;
