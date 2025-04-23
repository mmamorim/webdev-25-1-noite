import { Link } from "react-router";

export default function Header() {
    return (
        <div>
            <div className="text-xl m-2 p-2 bg-gray-200 rounded">
                Aula 10
                <Link to="/foo" className="border border-black px-2 m-1 rounded bg-gray-300">
                    Foo
                </Link>
                <Link to="/" className="border border-black px-2 m-1 rounded bg-gray-300">
                    Hello
                </Link>
            </div>
        </div>
    )
}
