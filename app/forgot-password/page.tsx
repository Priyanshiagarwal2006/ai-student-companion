"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSent(false);
    setLoading(true);

    try {
      const response = await fetch(
        "https://ai-student-companion.onrender.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong"
        );
      }

      setResetToken(data.resetToken);
      setSent(true);
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
            <Sparkles
              size={30}
              className="text-[#7C3AED]"
            />
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDE9FE]">
              <Mail
                size={25}
                className="text-[#7C3AED]"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-5 text-center">
            <h1 className="text-2xl font-bold text-[#0F172A]">
              Forgot Password?
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              Enter your email to generate a password
              reset token.
            </p>
          </div>

          {!sent ? (
            <form
              onSubmit={handleSubmit}
              className="mt-7"
            >
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

              {error && (
                <div className="mt-4 rounded-2xl bg-red-50 p-3 text-sm text-red-500">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-5 w-full rounded-2xl bg-[#7C3AED] py-3.5 text-sm font-semibold text-white transition hover:bg-[#6D28D9] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Generating..."
                  : "Generate Reset Token"}
              </button>
            </form>
          ) : (
            <div className="mt-7">

              <div className="rounded-2xl bg-[#ECFDF5] p-4 text-center">
                <p className="text-sm font-semibold text-[#047857]">
                  Reset token generated! ✅
                </p>

                <p className="mt-2 text-xs leading-5 text-[#059669]">
                  Your reset token is ready. Continue
                  to create a new password.
                </p>
              </div>

              {/* Token */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold text-[#64748B]">
                  Reset Token
                </p>

                <div className="break-all rounded-2xl bg-slate-100 p-3 text-xs text-slate-600">
                  {resetToken}
                </div>
              </div>

              {/* Continue */}
              <Link
                href={`/reset-password?token=${resetToken}`}
                className="mt-5 block w-full rounded-2xl bg-[#7C3AED] py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#6D28D9]"
              >
                Continue to Reset Password
              </Link>
            </div>
          )}

          {/* Back */}
          <Link
            href="/login"
            className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#7C3AED]"
          >
            <ArrowLeft size={16} />
            Back to Login
          </Link>

        </div>
      </div>
    </main>
  );
}