import { Icon } from "@iconify/react";

export default function Topo() {

    return (
        <>
            <div className="text-xl m-2 p-2 bg-gray-200 rounded">
                <div className="flex items-center justify-start gap-2">
                    <Icon icon="material-symbols:accessible-menu-sharp" className="text-2xl" />
                    <div>
                        Todo List
                    </div>
                </div>
            </div>
        </>
    )
}