import { useState } from "react";
import { AddTask } from "./AddTask";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const [ todoList, setTodoList ] = useState([])

    function onTaskAdd(taskName) {
        console.log("onTaskAdd foi chamado com: ",taskName);
        setTodoList([...todoList, taskName])
    }

    function onClickRemoveItem(idx) {
        console.log("onClickRemoveItem",idx);   
        todoList.splice(idx,1)        
        setTodoList([...todoList])     
    }

    return (
        <>
            <AddTask onAdd={onTaskAdd} />
            <div>
                {todoList.map((task, idx) => <TaskItem onRemove={onClickRemoveItem} taskName={task} idx={idx} key={idx} />)}
            </div>
        </>
    )
}