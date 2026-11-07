import { FaClock, FaDownload, FaWallet } from "react-icons/fa6";

export default function List() {
  return (
    <ul className="list bg-base-100 rounded-box border border-black/10 my-5">
      <li className="list-row items-center">
        <FaDownload />
        <p>Download the bacola app to your phone</p>
      </li>
      <li className="list-row items-center">
        <FaWallet />
        <p>Order now so you don't miss the opportunities.</p>
      </li>
      <li className="list-row items-center">
        <FaClock />
        <p>Your order will arrive at your door in 15 minutes.</p>
      </li>
    </ul>
  );
}
