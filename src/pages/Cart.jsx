import { useContext } from "react";
import CartTable from "../components/product/CartTable";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "../components/EmptyCart";

export default function Cart() {
  const { cartItems, subTotal, removeFromCart, updateQuantity } =
    useContext(CartContext);
  return (
    <main className="bg-base-300">
      <section className="max-w-360 p-5 mx-auto">
        <div className="breadcrumbs text-sm ">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>
      </section>{" "}
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <section className="max-w-360 p-5 mx-auto">
          <div className="grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-9">
              <CartTable
                updateQuantity={updateQuantity}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
              <div className="divider"></div>
              <div className="flex max-md:flex-col justify-between md:items-center gap-5">
                <div className="join gap-3 flex-1">
                  <label className="input join-item w-full md:max-w-md">
                    <input className="" type="text" placeholder="Coupon Code" />
                  </label>

                  <button className="btn btn-info join-item">
                    Apply Coupon
                  </button>
                </div>

                <button className="btn btn-info max-md:w-full ">
                  Remove All
                </button>
              </div>
            </div>
            <div className="lg:col-span-3 border border-black/10 p-5">
              <h3 className="uppercase">Cart Totals</h3>
              <div className="divider"></div>
              <div className="flex items-center justify-between gap-5">
                <h3>Subtotal</h3>
                <span>${subTotal()}</span>
              </div>
              <div className="divider"></div>
              <div className="flex items-center justify-between gap-5">
                <h3>Total</h3>
                <span>${subTotal()}</span>
              </div>
              <div className="divider"></div>
              <button className="btn btn-error w-full text-white">
                Process to checkout
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
