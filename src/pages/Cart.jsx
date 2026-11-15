import CartTable from "../components/product/CartTable";

export default function Cart() {
  return (
    <>
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
      </section>
      <section className="max-w-360 p-5 mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-9">
            <CartTable />
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <div className="join gap-3">
                <div>
                  <label className="input validator join-item outline-none border-none bg-gray-200">
                    <input type="text" placeholder="Coupon Code" />
                  </label>
                </div>
                <button className="btn btn-info join-item">Apply Coupon</button>
              </div>

              <button className="btn btn-info">Remove All</button>
            </div>
          </div>
          <div className="col-span-3 border border-black/10 p-5">
            <h3 className="uppercase">Cart Totals</h3>
            <div className="divider"></div>
            <div className="flex items-center justify-between gap-5">
              <h3>Subtotal</h3>
              <span>$100</span>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between gap-5">
              <h3>Total</h3>
              <span>$100</span>
            </div>
            <div className="divider"></div>
            <button className="btn btn-error w-full text-white">
              Process to checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
