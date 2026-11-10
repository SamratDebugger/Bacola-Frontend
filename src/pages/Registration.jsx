import { FaEnvelope, FaEye, FaKey, FaUser } from "react-icons/fa6";
import { Link } from "react-router";
export default function Registration() {
  return (
    <section className="p-5 min-h-[calc(100dvh-156px)] flex items-center justify-center">
      <form className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
          <legend className="fieldset-legend text-2xl">Registration</legend>

          <label htmlFor="name" className="label">
            Username
          </label>
          <label className="input">
            <FaUser className="opacity-50" />
            <input
              className="grow"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </label>
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

          <button className="btn btn-neutral mt-4">Registration</button>
          <p>
            Don't have account?{" "}
            <Link to="/login" className="link link-hover link-info">
              Login Here
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}
