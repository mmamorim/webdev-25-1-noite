import { createBrowserRouter } from "react-router";
import Hello from "./Hello";
import Foo from "./Foo";
import Error from "./Error";
import Nothing from "./Nothing";

const router = createBrowserRouter([
  { path: "/", Component: Hello },
  { path: "/foo", Component: Foo },
  { path: "/nothing", Component: Nothing },
  { path: "*", Component: Error },
]);

export default router