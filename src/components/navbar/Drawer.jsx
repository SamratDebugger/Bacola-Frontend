import Dock from "../dock/Dock";
import CopyRight from "../footer/CopyRight";
import FooterTop from "../footer/FooterTop";
import NewsLetter from "../footer/NewsLetter";
import TrustBadge from "../footer/TrustBadge";
import NavBottom from "./NavBottom";
import NavTop from "./NavTop";

export default function Drawer({ children }) {
  return (
    <div className="drawer">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle lg:hidden"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}{" "}
        <div className="max-lg:sticky top-0 z-50">
          <NavTop />
        </div>
        <NavBottom />
        {/* Page content here */}
        <main>{children}</main>
        <NewsLetter />
        <TrustBadge />
        <FooterTop />
        <CopyRight />
        <div className="lg:hidden p-5">
          <Dock />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 my-12">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
