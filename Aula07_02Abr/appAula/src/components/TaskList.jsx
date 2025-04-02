import { useState } from "react";
import { AddTask } from "./AddTask";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const [ todoList, setTodoList ] = useState(["Uma tarefa","Algo","outro","terceiro"])

    return (
        <>
            <AddTask />
            <div>
                {todoList.map((task, idx) => <TaskItem taskName={task} key={idx} />)}
            </div>
        </>
    )
}