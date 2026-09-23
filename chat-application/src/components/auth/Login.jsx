import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    function handleChange(e) {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
        setError(""); // Clear error when typing
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!login.email || !login.password){
            setError("Please fill in all fields");
            return;
        }

        // Get saved user from localStorage
        const savedUserStr = localStorage.getItem("user");
        if (!savedUserStr) {
            setError("No user found. Please register first.");
            return;
        }

        const savedUser = JSON.parse(savedUserStr);

        // Check if credentials match
        if(login.email !== savedUser.email || login.password !== savedUser.password){
            setError("Invalid credentials. Please try again.");
            return;
        }

        console.log("Login successful:", login);
        navigate("/MainChat");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-4">
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
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                            {error}
                        </div>
                    )}

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={login.email} 
                            onChange={handleChange} required autoComplete="off"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 text-black" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" value={login.password} 
                            onChange={handleChange} required autoComplete="new-password"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 text-black" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Login</button>
                        <div className="text-center">
                            <p className="text-gray-800 mb-2">Don't have an Account?</p>
                            <button 
                                type="button" 
                                onClick={() => navigate('/register')}
                                className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;