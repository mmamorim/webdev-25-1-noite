import Fruta from "./Fruta.jsx"

function App() {

  return (
    <>
        <h1>Meu primeiro App</h1>
        <Fruta nome="Pera" cor="verde" hexCor="#00FF00" />
        <Fruta nome="Laranja" cor="amarela" hexCor="#FFFF00" />
        <hr/>
        <Fruta nome="limão" cor="verde" hexCor="#00FF00" />
    </>
  )
}

export default App
