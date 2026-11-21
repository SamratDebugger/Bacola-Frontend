import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search({ ref }) {
  return (
    <dialog ref={ref} id="my_modal_1" className="modal">
      <div className="modal-box">
        <label className="input w-full">
          <input type="search" required placeholder="Search For Product..." />
          <FaMagnifyingGlass className="h-[1em] opacity-50" />
        </label>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-error">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
