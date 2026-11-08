import {
  FaFacebookF,
  FaLinkedin,
  FaPinterestP,
  FaReddit,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
export default function Socials() {
  return (
    <div className="flex gap-5 ">
      <a href="#">
        <button className="btn btn-circle">
          <FaFacebookF />
        </button>
      </a>
      <a href="#">
        <button className="btn btn-circle">
          <FaTwitter />
        </button>
      </a>
      <a href="#">
        <button className="btn btn-circle">
          <FaPinterestP />
        </button>
      </a>
      <a href="#">
        <button className="btn btn-circle">
          <FaLinkedin />
        </button>
      </a>
      <a href="#">
        <button className="btn btn-circle">
          <FaReddit />
        </button>
      </a>
      <a href="#">
        <button className="btn btn-circle">
          <FaWhatsapp />
        </button>
      </a>
    </div>
  );
}
