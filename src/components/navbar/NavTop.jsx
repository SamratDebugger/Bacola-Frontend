import { FaArrowDown, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { Link } from "react-router";
import CartCard from "./CartCard";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function NavTop() {
  const { totalItem, subTotal } = useContext(CartContext);
  return (
    <header className="bg-base-100">
      <div className="navbar max-w-360 mx-auto px-5 font-inter lg:gap-10">
        <div className="navbar-start lg:w-auto gap-5">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <Link className="max-lg:hidden" to="/">
            <img className="w-40 " src="/assets/images/logo.png" alt="logo" />
            <span className="text-xs opacity-50">
              Online Grocery Shopping Center
            </span>
          </Link>

          <div className="flex items-center gap-5 p-3 shadow-sm rounded-lg  border border-black/10 max-lg:hidden">
            <div className="flex flex-col">
              <span className="text-xs opacity-50">Your Location</span>
              <button className="text-md text-main">
                Select your Location
              </button>
            </div>
            <FaArrowDown />
          </div>
        </div>
        <div className="navbar-center lg:flex-1 ">
          <label className="input w-full h-16.5 rounded-lg max-lg:hidden">
            <input type="search" required placeholder="Search" />
            <FaMagnifyingGlass className="h-[1em] opacity-50" />
          </label>

          <Link className="lg:hidden" to="/">
            <img className="w-30 " src="/assets/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar-end lg:w-auto lg:gap-5">
          <Link to="/login" className="max-lg:hidden">
            <button className="btn btn-circle ">
              <FaUser />
            </button>
          </Link>
          <span>${subTotal()}</span>
          <div className="dropdown dropdown-end gap-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-soft btn-error btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>

                <span className="badge badge-sm badge-error indicator-item ">
                  {totalItem()}
                </span>
              </div>
            </div>
            <CartCard />
          </div>
        </div>
      </div>
    </header>
  );
}
