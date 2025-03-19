import { useState } from 'react';
import { Icon } from "@iconify/react";

export default function CaraCoroa() {
    const [texto, setTexto] = useState("Cara")

    function mudaCaraCoroa() {
        console.log("mudaCaraCoroa");
        if (texto == 'Cara') {
            setTexto("Coroa")
        } else {
            setTexto("Cara")
        }
    }

    return (
        <>
            <div onClick={mudaCaraCoroa} className='flex items-center gap-2'>
                <div className='px-1 bg-gray-800 rounded text-white hover:bg-gray-500 cursor-pointer'>
                    {texto}
                </div>
                { texto=='Cara' ? <Icon icon="tabler:coin" /> : <Icon icon="tabler:coin-filled" /> }
                
                
            </div>
        </>
    )
}