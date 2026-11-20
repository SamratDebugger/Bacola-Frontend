export default function Order({ ref }) {
  return (
    <div className="card card-border bg-base-100">
      <div className="card-body">
        <h3 className="card-title">Your Order</h3>
        <div className="divider px-5"></div>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>Product</th>
                <th className="text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>beef</th>
                <td className="text-right">$7</td>
              </tr>
            </tbody>
          </table>
          <div className="divider px-5"></div>
          <div className="flex justify-between items-center px-5">
            <span>Total</span>
            <span>$7</span>
          </div>
        </div>
        <button
          onClick={() => ref.current?.requestSubmit()}
          type="submit"
          className="btn btn-error w-full"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
