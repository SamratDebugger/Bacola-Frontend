import NavMenus from "./NavMenus";
export default function SidebarMenus() {
  return (
    <ul className="menu menu-paged menu-vertical rounded-b-box w-60 border border-black/20 border-t-0 absolute -bottom-px translate-y-full font-inter z-50">
      <NavMenus />
      <li>
        <details>
          <summary>Products</summary>
          <ul>
            <li>
              <a>All products</a>
            </li>
            <li>
              <a>Electronics</a>
            </li>
            <li>
              <a>Clothing</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}
