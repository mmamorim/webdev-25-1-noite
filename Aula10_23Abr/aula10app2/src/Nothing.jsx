import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Nothing() {
  return (
    <div>
      <Header />
      <div>
        <Icon icon="mdi:target" className="text-5xl"/>
        Nothing Component
      </div>
      <Footer />
    </div>
  )
}
