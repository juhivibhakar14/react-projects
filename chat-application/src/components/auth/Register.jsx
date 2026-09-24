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

    const existingUsersStr = localStorage.getItem("users");
    let existingUsers = existingUsersStr ? JSON.parse(existingUsersStr) : [];

    const userExists = existingUsers.find(u => u.email === register.email);
    if (userExists) {
      setError("An account with this email already exists.");
      return;
    }

    // Save to users array
    existingUsers.push(register);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Set current active user
    localStorage.setItem("user", JSON.stringify(register));

    console.log("Registration successful:", register);

    navigate("/MainChat");
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden text-white p-4">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/30 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/30 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-widest drop-shadow-lg">
            VYBE
          </h1>
        </div>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex items-center gap-2 rounded-xl bg-white/5 backdrop-blur-md px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition shadow-lg border border-white/5"
        >
          ← Back
        </button>

        <form
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Create Account
          </h2>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl text-sm text-center font-medium">
              {error}
            </div>
          )}

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-slate-300 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              autoComplete="off"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-slate-300 font-medium mb-2"
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
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="confirmPassword"
              className="block text-slate-300 font-medium mb-2"
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
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 px-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              Register
            </button>
            
            <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">or</span>
                <div className="flex-grow border-t border-white/10"></div>
            </div>

            <div className="text-center">
                <p className="text-slate-400 mb-3 text-sm">Already have an Account?</p>
                <button 
                    type="button" 
                    onClick={() => navigate('/login')}
                    className="w-full bg-white/5 border border-white/10 text-white py-3.5 px-4 rounded-xl font-semibold hover:bg-white/10 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                    Log In
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;