import Fruta from "./Fruta"
import Verdura from "./Verdura"
import "./estilos.css"

function App() {

  return (
    <>
      <h1 className="caixinhalegal">Oi gente</h1>
      <Fruta nome="Pera" />
      <Verdura />
      <Fruta nome="Maçã" />
      <Fruta nome="Morango" />
    </>
  )
}

export default App
