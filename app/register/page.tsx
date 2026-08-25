"use client";

import Link from "next/link";
import { Lock, Mail, Sparkles, User } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://ai-student-companion.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Registration failed"
        );
      }

      setSuccess(true);

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Login page par bhejne se pehle
      // success message dikhega
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);

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
        <div className="mb-7 flex justify-center">
          <div className="rounded-2xl bg-[#EDE9FE] p-4">
            <Sparkles
              size={30}
              className="text-[#7C3AED]"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0F172A]">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-[#64748B]">
            Start your learning journey
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleRegister}
          className="mt-7 rounded-3xl bg-white p-6 shadow-sm"
        >

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#334155]">
              Name
            </label>

            <div className="flex items-center rounded-2xl border border-[#E2E8F0] px-4 focus-within:border-[#7C3AED]">
              <User
                size={18}
                className="text-[#94A3B8]"
              />

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Your name"
                required
                className="w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-[#334155]">
              Email
            </label>

            <div className="flex items-center rounded-2xl border border-[#E2E8F0] px-4 focus-within:border-[#7C3AED]">
              <Mail
                size={18}
                className="text-[#94A3B8]"
              />

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="your@email.com"
                required
                className="w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-[#334155]">
              Password
            </label>

            <div className="flex items-center rounded-2xl border border-[#E2E8F0] px-4 focus-within:border-[#7C3AED]">
              <Lock
                size={18}
                className="text-[#94A3B8]"
              />

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="••••••••"
                required
                className="w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-[#334155]">
              Confirm Password
            </label>

            <div className="flex items-center rounded-2xl border border-[#E2E8F0] px-4 focus-within:border-[#7C3AED]">
              <Lock
                size={18}
                className="text-[#94A3B8]"
              />

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="••••••••"
                required
                className="w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-2xl bg-red-50 p-3 text-center text-sm font-medium text-red-500">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mt-4 rounded-2xl bg-[#ECFDF5] p-3 text-center text-sm font-medium text-[#047857]">
              Account created successfully! ✅
              <br />
              Redirecting to login...
            </div>
          )}

          {/* Register */}
          <button
            type="submit"
            disabled={loading || success}
            className="mt-6 w-full rounded-2xl bg-[#7C3AED] py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6D28D9] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-[#64748B]">
            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-[#7C3AED] hover:underline"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </main>
  );
}