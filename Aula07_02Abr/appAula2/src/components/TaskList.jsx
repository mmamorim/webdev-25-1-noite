import { useState } from "react"
import AddTaskBox from "./AddTaskBox";
import TaskListItem from "./TaskListItem"

export default function TaskList() {
    const [taskList, setTaskList] = useState(["Tarefa 1", "fsfsfsf", "Tarefa 3", "Tarefa 4"])

    function onAddTask(taskName) {
        console.log("chamei onTaskAdd com: ",taskName);
        setTaskList([ ...taskList, taskName])
    }

    function onRemoveItem(idx) {
        console.log("onRemoveItem: ",idx);
        taskList.splice(idx,1)
        setTaskList([...taskList])
    }

    return (
        <>
            <AddTaskBox onAddTask={onAddTask} />
            <div className="border border-black p-2 m-2 rounded">
                <div>
                    tarefas
                </div>
                <hr className="my-2" />
                {taskList.map((elem, idx) => <TaskListItem idx={idx} onRemove={onRemoveItem} taskName={elem} key={idx} />)}
            </div>
        </>
    )
}