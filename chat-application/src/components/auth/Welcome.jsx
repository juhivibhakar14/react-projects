import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to VYBE</h1>

        <p className="mt-4 text-slate-400">
          Talk. Connect. Belong.
        </p>

        <div className="flex justify-center items-center gap-5">
          <Link
            to="/login"
            className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;