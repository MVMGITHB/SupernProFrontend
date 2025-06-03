"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { base_url } from '../Helper/helper';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const response = await axios.post(`${base_url}/api/auth/register`, formData);
      console.log("registered data--", response.data);
      setSuccessMsg("Registration successful!");
      setTimeout(() => {
        router.push('/login');
      }, 1500);
    } catch (error) {
      if (error.response?.status === 500) {
        setErrorMsg("Server error. Please try again later.");
      } else {
        setErrorMsg(error.response?.data?.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-md shadow-md overflow-hidden max-w-4xl w-full">
        <div className="md:w-1/2">
          <img
            src="/register.webp"
            alt="Registration"
            className="w-full h-full object-cover md:object-contain p-4"
          />
        </div>

        <div className="md:w-1/2 p-6 md:p-8 bg-white">
          <h2 className="text-2xl font-semibold mb-5 text-gray-700">Create Account</h2>

          {errorMsg && (
            <div className="text-red-600 bg-red-100 p-2 rounded mb-4 text-sm">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="text-green-600 bg-green-100 p-2 rounded mb-4 text-sm">
              {successMsg}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-600">Mobile Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
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
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-md text-white transition-colors ${
                loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <p className="text-sm text-gray-600 mt-3 text-center">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:underline">
                Click here to login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
