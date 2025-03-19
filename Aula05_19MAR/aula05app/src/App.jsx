import { Icon } from "@iconify/react";
import CaraCoroa from "./CaraCoroa";

function App() {

  return (
    <>
      <div className="bg-gray-500 text-white p-1 rounded">
        <div className="flex items-center gap-1">
          <div>Meu App</div>
          <Icon icon="ph:orange-light"/>
        </div>
      </div>
      <div className="border border-black rounded p-2">
          <CaraCoroa />
      </div>
    </>
  )
}

export default App
