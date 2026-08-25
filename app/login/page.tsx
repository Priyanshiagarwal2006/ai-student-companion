"use client";

import Link from "next/link";
import { Lock, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save JWT token
      localStorage.setItem("token", data.token);

      // Save user information
      localStorage.setItem("user", JSON.stringify(data.user));

      // Login successful
      window.location.href = "/home";
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5 py-8">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-2xl bg-[#EDE9FE] p-4">
            <Sparkles size={30} className="text-[#7C3AED]" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0F172A]">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-sm text-[#64748B]">
            Continue your learning journey
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="mt-8 rounded-3xl bg-white p-6 shadow-sm"
        >
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#334155]">
              Email
            </label>

            <div className="flex items-center rounded-2xl border border-[#E2E8F0] bg-white px-4 transition focus-within:border-[#7C3AED]">
              <Mail size={18} className="text-[#94A3B8]" />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-transparent px-3 py-3.5 text-sm text-[#0F172A] outline-none placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-[#334155]">
              Password
            </label>

            <div className="flex items-center rounded-2xl border border-[#E2E8F0] bg-white px-4 transition focus-within:border-[#7C3AED]">
              <Lock size={18} className="text-[#94A3B8]" />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-transparent px-3 py-3.5 text-sm text-[#0F172A] outline-none placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          {/* Forgot */}
          <div className="mt-3 text-right">
            <Link
              href="/forgot-password"
              className="text-sm font-semibold text-[#7C3AED] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Error */}
          {error && (
            <p className="mt-4 text-center text-sm font-medium text-red-500">
              {error}
            </p>
          )}

          {/* Login */}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-2xl bg-[#7C3AED] py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6D28D9] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-[#64748B]">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#7C3AED] hover:underline"
            >
              Register
            </Link>
          </p>
        </form>

      </div>
    </main>
  );
}