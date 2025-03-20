
export default function Emoji({ nome }) {
    const fruits = {
        "Morango": "🍓",
        "Pera": "🍐",
        "Maçã": "🍎"
    }
    return(
        <>
            { fruits[nome] }
        </>
    )
}