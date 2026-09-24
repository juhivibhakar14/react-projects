import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden text-white">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/30 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/30 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="relative z-10 text-center flex flex-col items-center max-w-lg p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
        <h1 className="text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 tracking-tight drop-shadow-sm">
          VYBE
        </h1>

        <p className="mt-4 text-lg font-medium text-slate-300 tracking-wide mb-8">
          Talk. Connect. <span className="text-white font-bold">Belong.</span>
        </p>

        <div className="flex w-full flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-semibold text-white backdrop-blur-md shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;