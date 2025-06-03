"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { base_url } from '../Helper/helper';
import { useAuth } from '@/components/context/auth';

const Login = () => {
  const router = useRouter();
  const [auth, setAuth] = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const formdata = {
        identifier: formData.email,
        password: formData.password,
      };

      const response = await axios.post(`${base_url}/api/auth/login`, formdata);
      if (response.data) {
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(response.data));
        setFormData({ email: "", password: "" });
                router.push("/");

      }
    } catch (error) {
      console.log("Login error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-md shadow-md overflow-hidden max-w-4xl w-full">
        
        <div className="md:w-1/2">
          <img
            src="/login.webp"
            alt="Login"
            className="w-full h-full object-cover md:object-contain p-4"
          />
        </div>

        <div className="md:w-1/2 p-6 md:p-8 bg-white">
          <h2 className="text-2xl font-semibold mb-5 text-gray-700">Welcome Back!</h2>

          {err && (
            <div className="text-red-600 bg-red-100 p-2 rounded mb-4 text-sm">
              Invalid email or password. Please try again.
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e7e7e7]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e7e7e7]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-md text-white transition-colors ${
                loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-sm text-gray-600 mt-2 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Click here to register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
