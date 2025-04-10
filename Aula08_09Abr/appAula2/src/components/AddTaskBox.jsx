import { useState } from "react";

export default function AddTaskBox({ onAddTask }) {
    const [ taskName, setTaskName ] = useState("Alguma tarefa")

    function addTask() {
        console.log("addTask",taskName);
        onAddTask(taskName)
    }

    return (
        <>
            <div className="border border-black p-2 m-2 w-120 rounded">
                <div className="text-sm text-gray-700">
                    Digite o nome da tarefa
                </div> 
                <hr className="my-2" />
                <div className="flex items-center justify-start gap-2">
                    <div>Tarefa:</div>
                    <input value={taskName} onChange={(e) => { setTaskName(e.target.value) }} type="text" className="border border-black p-2" />
                    <button onClick={addTask} className="border p-1 border-black rounded">
                        Adicionar
                    </button>
                </div>
            </div>
        </>
    )
}