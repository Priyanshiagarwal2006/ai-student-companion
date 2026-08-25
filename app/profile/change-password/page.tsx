"use client";

import { ArrowLeft, CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

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

      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch(
        "https://ai-student-companion.onrender.com/api/auth/change-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            currentPassword,
            newPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update password"
        );
      }

      setSuccess(true);

      setCurrentPassword("");
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
    <main className="min-h-screen bg-[#F8FAFC] px-5 py-6">
      <div className="mx-auto max-w-md">

        {/* Header */}
        <div className="flex items-center gap-3">
          <Link
            href="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#64748B] shadow-sm"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>
            <p className="text-xs text-[#64748B]">
              Account
            </p>

            <h1 className="text-xl font-bold text-[#0F172A]">
              Change Password
            </h1>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-3xl bg-white p-5 shadow-sm"
        >
          <div className="mb-6 flex items-center gap-3 rounded-2xl bg-[#EDE9FE] p-4">
            <Lock size={21} className="text-[#7C3AED]" />

            <p className="text-sm leading-5 text-[#5B21B6]">
              Choose a strong password that you don't use elsewhere.
            </p>
          </div>

          {/* Current Password */}
          <label className="mb-2 block text-sm font-semibold text-[#334155]">
            Current Password
          </label>

          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#7C3AED]"
          />

          {/* New Password */}
          <label className="mb-2 mt-5 block text-sm font-semibold text-[#334155]">
            New Password
          </label>

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#7C3AED]"
          />

          {/* Confirm Password */}
          <label className="mb-2 mt-5 block text-sm font-semibold text-[#334155]">
            Confirm New Password
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#7C3AED]"
          />

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
              Password updated successfully!
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-2xl bg-[#7C3AED] py-3.5 text-sm font-semibold text-white hover:bg-[#6D28D9] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </main>
  );
}