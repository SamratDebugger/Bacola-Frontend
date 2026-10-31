import { FaCoffee } from "react-icons/fa";
import { FaCookie } from "react-icons/fa6";
import { LuBeef } from "react-icons/lu";
import { Link } from "react-router";

export default function NavMenus() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/meats-and-seafood">
          <LuBeef /> Meats & Seafood
        </Link>
      </li>
      <li>
        <Link to="/bakery">
          <FaCookie /> Bakery
        </Link>
      </li>
      <li>
        <Link to="/beverages">
          <FaCoffee /> Beverages
        </Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
}
