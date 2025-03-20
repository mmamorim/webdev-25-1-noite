import Emoji from "./Emoji"

function Fruta({ nome, emoji }) {

    return(
        <>
            <div>
                <span className="bg-orange-800 text-white px-1 rounded">
                    Eu sou
                </span> 
                <Emoji nome={nome} /> 
                e me chamam de {nome}
            </div>
        </>
    )
}

export default Fruta