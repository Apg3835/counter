import { useSelector } from "react-redux";
import "./App.css";
import EditTodo from "./components/EditTodo";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const formOpen = useSelector((state) => state.todo.editForm);
  return (
    <div>
      <ResponsiveAppBar />
      <TodoForm />
      {formOpen && <EditTodo />}
      <TodoList />
    </div>
  );
}

export default App;
