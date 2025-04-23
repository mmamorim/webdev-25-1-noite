import { Icon } from "@iconify/react";
import { RouterProvider, Link } from "react-router";
import router from "./routes";

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
