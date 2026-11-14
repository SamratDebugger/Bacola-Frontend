import { useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  //add to cart function
  const addToCart = (product, quantity) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      const newQuantity = existingProduct.quantity + quantity;
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item,
        ),
      );
      toast.success(`${product.title} added to cart`);
    } else {
      const newProduct = {
        id: product.id,
        title: product.title,
        price: product.hasDiscount
          ? product.discountedPrice
          : product.regularPrice,
        quantity,
        img: product.img,
      };
      setCartItems((prev) => [...prev, newProduct]);
      toast.success(`${product.title} added to cart`);
    }
  };
  //remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  //total amount
  const subTotal = () => {
    if (cartItems.length === 0) {
      return 0;
    }
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    return total.toFixed(2);
  };
  //total item
  const totalItem = () => {
    if (cartItems.length === 0) {
      return 0;
    }
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  const data = { cartItems, addToCart, subTotal, totalItem, removeFromCart };

  return <CartContext value={data}>{children}</CartContext>;
}
