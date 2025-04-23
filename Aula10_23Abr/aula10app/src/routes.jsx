import { createBrowserRouter } from "react-router";
import Hello from "./Hello";
import Foo from "./Foo";
import Error from "./Error";

const router = createBrowserRouter([
  { path: "/", Component: Hello },
  { path: "/foo", Component: Foo },
  { path: "*", Component: Error },
]);

export default router