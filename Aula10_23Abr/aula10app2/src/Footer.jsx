import { Link } from "react-router"

export default function Footer() {
    return (
        <div>
            <div className="m-2 p-2 bg-gray-400">
                Footer
                <Link to="/" className="px-2 m-1 bg-gray-300 rounded">
                    Hello
                </Link>
            </div>
        </div>
    )
}
