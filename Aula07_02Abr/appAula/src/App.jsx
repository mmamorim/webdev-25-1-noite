import { useState } from "react";
import { Icon } from "@iconify/react";
import { NavBar } from "./components/NavBar";
import { AddTask } from "./components/AddTask";
import TaskItem from "./components/TaskItem";

function App() {
  const [ todoList, setTodoList ] = useState(["Algo","Algo","outro","terceiro"])

  return (
    <>
      <NavBar />
      <AddTask />
      <TaskItem />
      <div>
        { todoList.map((task,idx) => <div key={idx}>{task}</div> ) }
      </div>
    </>
  )
}

export default App
