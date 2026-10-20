import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
