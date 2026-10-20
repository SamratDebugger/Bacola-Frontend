import { Outlet } from "react-router";
import Drawer from "../components/navbar/Drawer";

export default function Layout() {
  return (
    <Drawer>
      <Outlet />
    </Drawer>
  );
}
