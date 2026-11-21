import { useRef } from "react";
import {
  FaCartArrowDown,
  FaHouse,
  FaMagnifyingGlass,
  FaUser,
} from "react-icons/fa6";
import { NavLink } from "react-router";
import Search from "./Search";

export default function Dock() {
  const searchModalRef = useRef();
  return (
    <>
      <Search ref={searchModalRef} />
      <div className="dock justify-between">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "dock-active" : "")}
        >
          <FaHouse className="size-[1.2em]" />
          <span className="dock-label ">Home</span>
        </NavLink>

        <button
          onClick={() => searchModalRef.current?.showModal()}
          className=""
        >
          <FaMagnifyingGlass />
          <span className="dock-label">Search</span>
        </button>

        <NavLink
          className={({ isActive }) => (isActive ? "dock-active" : "")}
          to="/login"
        >
          <FaUser />
          <span className="dock-label">Account</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "dock-active" : "")}
          to="/cart"
        >
          <FaCartArrowDown />
          <span className="dock-label">Cart</span>
        </NavLink>
      </div>
    </>
  );
}
