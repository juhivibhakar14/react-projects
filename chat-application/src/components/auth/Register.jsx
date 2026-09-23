import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        email: "",
        password: ""
    });

    function handleChange(e) {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
            <div className="w-full max-w-md">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="mb-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
                >
                    ← Back
                </button>

                <form
                    className="bg-gray-50 p-8 rounded-lg shadow-lg"
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(register);
                    }}
                >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={register.email} onChange={handleChange} required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" value={register.password} onChange={handleChange} required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;