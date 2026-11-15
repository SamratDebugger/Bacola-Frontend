export default function CartTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="">
            <td>
              <div className="flex items-center gap-5">
                <img
                  className="max-w-20"
                  src="/assets/images/beef.jpg"
                  alt="beef img"
                />
                <h3>eropgfrbhg</h3>
              </div>
            </td>
            <td>$50</td>
            <td>×1</td>
            <td>$50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
