import { useState } from "react";
import { AddTask } from "./AddTask";
import TaskItem from "./TaskItem";
import sgdb from "../sgdb.js"

sgdb.init()

export default function TaskList() {
    const [todoList, setTodoList] = useState({})

    function onTaskAdd(taskName) {
        console.log("onTaskAdd foi chamado com: ", taskName);
        //setTodoList([...todoList, taskName])
        let task = {
            id: sgdb.newID("task"),
            task: taskName
        }
        sgdb.data.todos[task.id] = task
        sgdb.write()
        setTodoList(sgdb.getData().todos)
    }

    function onClickRemoveItem(idx) {
        console.log("onClickRemoveItem", idx);
        todoList.splice(idx, 1)
        setTodoList([...todoList])
    }

    return (
        <>
            <div className="border border-black p-2 m-1 w-140">
                <AddTask onAdd={onTaskAdd} />
                <div>
                    {Object.keys(todoList).map((id) => <TaskItem onRemove={onClickRemoveItem} taskName={todoList[id].task} idx={id} key={id} />)}
                </div>
            </div>
        </>
    )
}