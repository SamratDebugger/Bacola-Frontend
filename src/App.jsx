import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import MeatsAndSeafood from "./pages/MeatsAndSeafood";
import Bakery from "./pages/Bakery";
import Beverages from "./pages/Beverages";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
// Import Swiper styles
import "swiper/css";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/meats-and-seafood" element={<MeatsAndSeafood />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}
