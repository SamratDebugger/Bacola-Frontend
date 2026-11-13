import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEnvelope, FaEye, FaKey, FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";
export default function Registration() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      toast.success("Registration Sucessful");
    } catch (error) {
      toast.error("Registration failed");
      error(error.message);
    }
  };
  return (
    <section className="p-5 min-h-[calc(100dvh-156px)] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="">
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
              type={isVisible ? "text" : "password"}
              className="grow"
              placeholder="Password"
            />
            <button type="button" onClick={() => setIsVisible(!isVisible)}>
              <FaEye className="" />
            </button>
          </label>

          <button className="btn btn-neutral mt-4">Registration</button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link link-hover link-info">
              Login Here
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}
