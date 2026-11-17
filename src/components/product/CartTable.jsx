import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
export default function CartTable({ cartItems, removeFromCart }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="text-right max-lg:hidden">Price</th>
            <th className="text-right max-lg:hidden">Subtotal</th>
            <th className="max-lg:hidden"></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cartItems.map((cartItem) => (
            <tr key={cartItem.id} className="">
              <td>
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <button
                      onClick={() => removeFromCart(cartItem.id)}
                      className="btn btn-circle btn-xs btn-error absolute lg:hid"
                    >
                      <FaTrash />
                    </button>
                    <img
                      className="max-w-20"
                      src={cartItem.img}
                      alt={cartItem.title}
                    />
                  </div>
                  <div>
                    <h3 className="line-clamp-2">{cartItem.title}</h3>{" "}
                    <p className="">Price: ${cartItem.price}</p>
                  </div>
                </div>
              </td>
              <td className="">
                <div className="flex gap-3">
                  <button className="btn btn-circle btn-xs">
                    <FaMinus />
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button className="btn btn-circle btn-xs">
                    <FaPlus />
                  </button>
                </div>
              </td>
              <td className="text-right max-lg:hidden">${cartItem.price}</td>
              <td className="text-right max-lg:hidden">
                ${(cartItem.price * cartItem.quantity).toFixed(2)}
              </td>
              <td className="text-right max-lg:hidden">
                <button
                  onClick={() => removeFromCart(cartItem.id)}
                  className="btn btn-circle btn-sm btn-error "
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
