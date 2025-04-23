import { Link } from "react-router";
import Header from "./Header";

export default function Error() {

  return (
    <div>
      <Header />
      <div>Error COMPONENT</div>
      <Link to="/" className="border border-black px-2 m-1 rounded bg-gray-300">
        Hello
      </Link>
    </div>
  )
}
