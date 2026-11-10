import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router";
export default function ForgotPassword() {
  return (
    <section className="p-5 min-h-[calc(100dvh-156px)] flex items-center justify-center">
      <form className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
          <legend className="fieldset-legend text-2xl">Reset Password</legend>

          <label htmlFor="email" className="label">
            Enter Your Email
          </label>
          <label className="input">
            <FaEnvelope className="opacity-50" />
            <input
              className="grow"
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>

          <button className="btn btn-neutral mt-4">Reset Password</button>

          <Link to="/login">
            <button className="btn btn-ghost btn-info w-full">
              <FaArrowAltCircleLeft /> Back To Login
            </button>
          </Link>
        </fieldset>
      </form>
    </section>
  );
}
