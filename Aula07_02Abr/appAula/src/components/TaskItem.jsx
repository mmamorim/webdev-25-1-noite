import { Icon } from "@iconify/react";

export default function TaskItem({ taskName }) {

    return(
        <>
            <div className="flex items-center justify-start bg-gray-600 text-white p-1 m-1 rounded">
                <div>
                    {taskName}
                </div>
                <div className="mx-1 px-1 pt-1 text-xl text-green-600 bg-gray-300 rounded-lg">
                    <Icon icon="mdi:check" />
                </div>
                <div className="mx-1 px-1 pt-1 text-xl text-red-600 bg-gray-300 rounded-lg">
                    <Icon icon="mdi:delete" />
                </div>
            </div>
        </>
    )
}