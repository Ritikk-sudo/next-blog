// pages/login.js

"use client";
import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleSignIn = async (e: any) => {
    const user = "admin"
    const pass = "Ritik@admin"
    e.preventDefault();

    if (username === user && password === pass) {
      Cookies.set("loggedin", "true", { expires: 1 });
      return router.push("/studio");
    }
    return router.push("/signup");
  };

  return (
    <div className="flex items-center justify-center h-[100%] mt-4">
      <div className="w-96 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded"
            onClick={handleSignIn}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
