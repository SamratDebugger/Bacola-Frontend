import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
// Import Swiper styles
import "swiper/css";
import Product from "./pages/Product";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/:category/:product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
