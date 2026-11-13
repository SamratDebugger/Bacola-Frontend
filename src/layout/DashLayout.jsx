import { Outlet } from "react-router";
import DashDrawer from "../pages/dashboard/DashDrawer";

export default function DashLayout() {
  return (
    <DashDrawer>
      <Outlet />
    </DashDrawer>
  );
}
