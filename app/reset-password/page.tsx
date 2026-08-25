"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Lock, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (!token) {
      setError("Invalid or missing reset token.");
      return;
    }

    if (newPassword.length < 6) {
      setError("New password must contain at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            newPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to reset password"
        );
      }

      setSuccess(true);

      setNewPassword("");
      setConfirmPassword("");

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
              <Lock
                size={25}
                className="text-[#7C3AED]"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-5 text-center">
            <h1 className="text-2xl font-bold text-[#0F172A]">
              Reset Password
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              Create a new password for your account.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-7"
          >

            {/* New Password */}
            <label className="mb-2 block text-sm font-semibold text-[#334155]">
              New Password
            </label>

            <div className="flex items-center rounded-2xl border border-[#E2E8F0] px-4 focus-within:border-[#7C3AED]">
              <Lock
                size={18}
                className="text-[#94A3B8]"
              />

              <input
                type="password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(e.target.value)
                }
                placeholder="••••••••"
                required
                className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"
              />
            </div>

            {/* Confirm Password */}
            <label className="mb-2 mt-5 block text-sm font-semibold text-[#334155]">
              Confirm New Password
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
                className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="mt-4 rounded-2xl bg-red-50 p-3 text-sm text-red-500">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="mt-4 flex items-center gap-2 rounded-2xl bg-[#ECFDF5] p-3 text-sm text-[#047857]">
                <CheckCircle2 size={17} />
                Password reset successfully!
              </div>
            )}

            {/* Button */}
            {!success && (
              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-2xl bg-[#7C3AED] py-3.5 text-sm font-semibold text-white transition hover:bg-[#6D28D9] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Resetting..."
                  : "Reset Password"}
              </button>
            )}

            {/* Login after success */}
            {success && (
              <Link
                href="/login"
                className="mt-6 block w-full rounded-2xl bg-[#7C3AED] py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#6D28D9]"
              >
                Go to Login
              </Link>
            )}

          </form>

          {/* Back */}
          {!success && (
            <Link
              href="/login"
              className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#7C3AED]"
            >
              <ArrowLeft size={16} />
              Back to Login
            </Link>
          )}

        </div>
      </div>
    </main>
  );
}