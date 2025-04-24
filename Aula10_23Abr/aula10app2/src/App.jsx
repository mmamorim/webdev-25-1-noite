import { Icon } from "@iconify/react";
import router from "./routes";
import { RouterProvider } from "react-router";

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <hr />
    </>
  )
}

export default App
