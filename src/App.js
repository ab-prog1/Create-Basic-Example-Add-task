import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Lists from "./components/Lists";

function App() {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();

    if(todo.length < 5){
      setError("Enter your Task (minimum 5 characters)");
      return false;
    }

    setTodos([...todos, {id: Date.now(), title : todo, done : false}])
    setError(null);
    setTodo("")
  }

  const delHandler = (todoId) => {
    if(window.confirm("Are you sure about the deletion?")){
      const updateTodos = todos.filter((item) => item.id !== todoId);
    setTodos(updateTodos)
    }
  }

  const doneHandler = (todoId) => {
   const index = todos.findIndex((item) => item.id === todoId);
   const duplicateTodos = [...todos];

   duplicateTodos[index] = {
     id: todos[index].id,
     title : todos[index].title,
     done : !todos[index].done,
   }

   setTodos(duplicateTodos);

  }

  return (
    <Layout>
      <Header />
      <Form 
      todo={todo}
       change={(e)=> setTodo(e.target.value)}
        submit={submitHandler}
        error={error}
        />
      <Lists del={delHandler} done={doneHandler} todos={todos} />
    </Layout>
  );
}

export default App;
