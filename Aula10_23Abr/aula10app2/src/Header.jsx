import { Link } from "react-router"

export default function Header() {
    return (
        <div>
            <div className="text-xl m-2 p-2 bg-gray-200 rounded">
                Aula 10
                <Link to="/" className="px-2 m-1 bg-gray-300 rounded">
                    Hello
                </Link>
                <Link to="/foo" className="px-2 m-1 bg-gray-300 rounded">
                    Foo
                </Link>
                <Link to="/nothing" className="px-2 m-1 bg-gray-300 rounded">
                    Nothing
                </Link>
            </div>
        </div>
    )
}
