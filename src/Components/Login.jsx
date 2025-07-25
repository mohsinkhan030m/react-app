import React from "react";
import { useNavigate } from "react-router-dom";
import vcImage from "../assets/vc.jpeg";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-blue-50 to-purple-100 px-6 py-12 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-5rem] left-[-5rem] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0"></div>
      <div className="absolute bottom-[-4rem] right-[-4rem] w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse z-0"></div>
      <div className="absolute top-[20%] right-[20%] w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse z-0"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 z-10">
        {/* Left Panel - Form */}
        <div className="bg-gradient-to-b from-indigo-600 to-violet-700 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-center">Welcome Back</h2>
          <p className="text-sm text-center mb-8 text-indigo-100">
            Login to your university dashboard
          </p>
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="student@university.edu"
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
            </div>
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-indigo-500" />
                Remember me
              </label>
              <a href="#" className="hover:underline text-indigo-100">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-indigo-700 font-semibold py-2 rounded-md hover:bg-gray-100 transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Panel - VC Vision */}
        <div className="bg-white p-10 flex flex-col justify-center items-center text-center">
          <img
            src={vcImage}
            alt="VC"
            className="w-36 h-36 rounded-full object-cover border-4 border-indigo-300 shadow-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
            VC's Vision
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Empowering future generations through quality education, innovation,
            and inclusive excellence. Our mission is to inspire minds and lead
            with purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
