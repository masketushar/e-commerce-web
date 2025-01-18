import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex w-[900px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Sign In Form */}
        <div className="flex flex-col justify-center p-10 flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-sm text-indigo-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition">
              Login
            </button>
          </form>
        </div>

        <div
          className="flex flex-col justify-center items-center
         flex-1 bg-cover bg-center text-white"
          style={{
            backgroundImage:
              "url('https://img.lovepik.com/photo/45009/7677.jpg_wh860.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
