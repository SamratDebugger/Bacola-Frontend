export default function Order({ ref }) {
  return (
    <div className="card card-border bg-base-100">
      <div className="card-body">
        <h3 className="card-title">Your Order</h3>
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
