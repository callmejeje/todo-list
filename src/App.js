import "./App.css";
import Todo from "./components/Todo";
import useFetch from "./util/useFetch";

function App() {
  const [todos, isPending, error] = useFetch("http://localhost:3001/todos/");

  return (
    <div className="App">
      <Todo todos={todos} isPending={isPending} />
    </div>
  );
}

export default App;
