import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });

    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !register.email ||
      !register.password ||
      !register.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (register.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (register.password !== register.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(register));

    console.log("Registration successful:", register);

    navigate("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-widest drop-shadow-lg">
            VYBE
          </h1>
        </div>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
        >
          ← Back
        </button>

        <form
          className="bg-gray-50 p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Register
          </h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              autoComplete="off"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              autoComplete="new-password"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={register.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {error && (
            <p className="mb-4 text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;