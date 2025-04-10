import { Icon } from "@iconify/react"

export default function TaskListItem({ taskName, onRemove, idx }) {

    function removeItem() {
        onRemove(idx)
    }

    return (
        <>
            <div className="flex items-center  justify-between bg-gray-300 p-2 my-1">
                <div>
                    {taskName}
                </div>
                <div className="flex items-center gap-2">
                    <div className="px-1 rounded-lg pt-1 bg-white text-black text-xl">
                        <Icon icon="mdi:pencil" />
                    </div>
                    <div className="px-1 rounded-lg pt-1 bg-white text-green-800 text-xl">
                        <Icon icon="mdi:check" />
                    </div>
                    <div onClick={removeItem} className="px-1 rounded-lg pt-1 bg-white text-red-800 text-xl">
                        <Icon icon="mdi:delete" />
                    </div>
                </div>
            </div>
        </>
    )
}