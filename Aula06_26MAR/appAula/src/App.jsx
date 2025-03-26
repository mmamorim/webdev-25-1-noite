import { useState } from "react";
import { Icon } from "@iconify/react";
import { Topo } from "./components/Topo";
import { AddTodo } from "./components/AddTodo";

function App() {
  const [ todoList, setTodoList ] = useState(["Algo","Algo","outro","terceiro"])

  return (
    <>
      <Topo />
      <AddTodo />
      <div>
        { todoList.map((task,idx) => <div key={idx}>{task}</div> ) }
      </div>
    </>
  )
}

export default App
