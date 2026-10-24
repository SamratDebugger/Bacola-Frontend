import { FaArrowDown, FaBars } from "react-icons/fa6";

import NavMenus from "./NavMenus";
import SidebarMenus from "./SidebarMenus";
import { useState } from "react";

export default function NavBottom() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-base-100 border-b border-b-black/20 ">
      <div className="navbar max-w-360 px-5 mx-auto max-lg:hidden font-dosis ">
        <div className="flex-1">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="btn btn-lg rounded-full btn-info text-white"
          >
            <FaBars /> ALL CATEGORIES <FaArrowDown />
          </button>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg uppercase gap-3 ">
            <NavMenus />
          </ul>
        </div>
        {isVisible && <SidebarMenus />}
      </div>
    </div>
  );
}
