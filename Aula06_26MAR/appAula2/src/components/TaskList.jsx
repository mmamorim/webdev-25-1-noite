import { useState } from "react"

export default function TaskList() {
    const [ taskList, setTaskList ] = useState(["Tarefa 1","Tarefa 1","Tarefa 3","Tarefa 4"])

    return (
        <>
            <div className="border border-black p-2 m-2 rounded">
                <div>
                    tarefas
                </div>
                <hr className="my-2" />
                { taskList.map((elem,idx) => <div className="bg-gray-300 p-2 my-1" key={idx}>{elem}</div> ) }
            </div>
        </>
    )
}