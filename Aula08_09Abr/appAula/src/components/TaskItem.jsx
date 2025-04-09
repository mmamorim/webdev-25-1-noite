import { Icon } from "@iconify/react";

export default function TaskItem({ taskName, onRemove, idx }) {

    function removeClick() {
        console.log("removeClick");
        onRemove(idx)
    }

    return (
        <>
            <div className="flex items-center justify-between bg-gray-600 text-white p-1 m-1 rounded">
                <div>
                    {taskName}
                </div>
                <div className="flex items-center gap-1">
                    <div className="mx-1 px-1 pt-1 text-xl text-black bg-gray-200 rounded-lg">
                        <Icon icon="mdi:pencil" />
                    </div>
                    <div className="mx-1 px-1 pt-1 text-xl text-green-600 bg-gray-300 rounded-lg">
                        <Icon icon="mdi:check" />
                    </div>
                    <div onClick={removeClick} className="mx-1 px-1 pt-1 text-xl text-red-600 bg-gray-300 rounded-lg">
                        <Icon icon="mdi:delete" />
                    </div>
                </div>
            </div>
        </>
    )
}