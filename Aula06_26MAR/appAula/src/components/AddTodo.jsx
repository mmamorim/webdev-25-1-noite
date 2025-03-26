
export function AddTodo() {

    return (
        <>
            <div className="m-2 p-2 border border-black rounded w-120">
                <div className="text-base mb-1">
                    Digite nome da tarefa
                </div>
                <hr className="my-2" />
                <div className="flex items-center justify-start gap-2">
                    <div>Nome:</div>
                    <div>
                        <input type="text" className="border border-black p-2" />
                    </div>
                    <div>
                        <button className="border border-black p-1 rounded">
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}