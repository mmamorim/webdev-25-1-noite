import { useState, useEffect } from "react"
import AddTaskBox from "./AddTaskBox";
import TaskListItem from "./TaskListItem"
import sgdb from "../sgdb.js"

sgdb.init()

export default function TaskList() {
    const [taskList, setTaskList] = useState({})

    useEffect(() => {
        setTaskList(sgdb.getData().todos)        
    }, [])

    function onAddTask(taskName) {
        console.log("chamei onTaskAdd com: ",taskName);
        //setTaskList([ ...taskList, taskName])
        let task = {
            id: sgdb.newID("task"),
            task: taskName,
            done: false
        }
        sgdb.data.todos[task.id] = task
        sgdb.write()
        setTaskList(sgdb.getData().todos)
    }

    function onRemoveItem(id) {
        console.log("onRemoveItem: ",id);
        delete sgdb.data.todos[id]
        sgdb.write()
        setTaskList(sgdb.getData().todos)
    }

    return (
        <>
            <AddTaskBox onAddTask={onAddTask} />
            <div className="border border-black p-2 m-2 rounded w-140">
                <div>
                    tarefas
                </div>
                <hr className="my-2" />
                {Object.keys(taskList).map((id) => <TaskListItem idx={id} onRemove={onRemoveItem} taskName={taskList[id].task} key={id} />)}
            </div>
        </>
    )
}