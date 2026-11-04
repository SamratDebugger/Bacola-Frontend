import { FaArrowRightLong } from "react-icons/fa6";

export default function View({ view }) {
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <h2 className="text-xl font-bold uppercase">{view.title}</h2>
        <p className="opacity-50 font-inter text-sm">{view.description}</p>
      </div>
      <button className="btn  btn-outline rounded-full">
        {view.button} <FaArrowRightLong />
      </button>
    </div>
  );
}
