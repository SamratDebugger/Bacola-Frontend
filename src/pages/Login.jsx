import { FaEnvelope, FaEye, FaKey } from "react-icons/fa6";
import { Link } from "react-router";

export default function Login() {
  return (
    <section className="p-5 min-h-[calc(100dvh-156px)] flex items-center justify-center">
      <form className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
          <legend className="fieldset-legend text-2xl">Login</legend>

          <label htmlFor="email" className="label">
            Email
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

          <label htmlFor="password" className="label">
            Password
          </label>
          <label className="input">
            <FaKey className="opacity-50" />
            <input
              name="password"
              type="password"
              className="grow"
              placeholder="Password"
            />
            <FaEye className="opacity-50" />
          </label>
          <Link to="/forgot-password" className="link link-hover link-info">
            Forgot Password
          </Link>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>
            Don't have account?{" "}
            <Link to="/registration" className="link link-hover link-info">
              Register Now
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}
