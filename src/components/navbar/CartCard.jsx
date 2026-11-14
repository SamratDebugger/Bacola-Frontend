import { useContext } from "react";
import { FaBagShopping, FaX } from "react-icons/fa6";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";

export default function CartCard() {
  const { cartItems, subTotal, removeFromCart } = useContext(CartContext);

  return (
    <>
      <div
        tabIndex={0}
        className="card  dropdown-content bg-base-100 z-10 mt-3 w-80  shadow"
      >
        <div className="card-body">
          {cartItems.length === 0 ? (
            <>
              {" "}
              <FaBagShopping className="text-3xl text-error mx-auto" />
              <span className="text-lg font-bold text-center">No Product</span>
            </>
          ) : (
            <div className="">
              <ul className="max-h-70 overflow-y-auto">
                {cartItems.map((cartItem) => (
                  <li key={cartItem.id}>
                    <div className="flex items-center gap-5">
                      <div className="flex-1/3 relative">
                        <button
                          type="button"
                          onClick={() => removeFromCart(cartItem.id)}
                          className="btn btn-circle btn-xs btn-error absolute top-0 left-0 z-20"
                        >
                          <FaX />
                        </button>
                        <img src={cartItem.img} alt={cartItem.title} />
                      </div>
                      <div className="flex-2/3">
                        <h3>{cartItem.title}</h3>
                        <span>
                          {cartItem.quantity} ×{" "}
                          <span className="text-error">${cartItem.price}</span>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="divider"></div>
              <div className="flex items-center gap-5 justify-between my-3">
                <h4>Subtotal</h4>
                <h4 className="text-error">${subTotal()}</h4>
              </div>
              <div className="grid gap-2">
                <Link to="/cart">
                  <button className="btn w-full">View Cart</button>
                </Link>
                <Link to="/checkout">
                  <button className="btn btn-error w-full">Checkout</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
