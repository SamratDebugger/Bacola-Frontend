import { CartContext } from "./CartContext";

export default function CartProvider({ children }) {
  const data = {};
  return <CartContext value={data}>{children}</CartContext>;
}
