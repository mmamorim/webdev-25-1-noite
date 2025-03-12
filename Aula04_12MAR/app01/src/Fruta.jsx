import Cor from "./Cor"

function Fruta({nome,cor,hexCor}) {

    return (
        <>
            <p style={{ border: '1px solid black', fontSize: '18pt' }}>
                Eu sou uma {nome} 
                de <Cor cor={cor} hexCor={hexCor} /> 
            </p>
        </>
    )
}

export default Fruta