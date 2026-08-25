"use client";

import { ArrowLeft, Mail, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EditProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  // Load current profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          window.location.href = "/login";
          return;
        }

        const response = await fetch(
          "http://localhost:5000/api/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to load profile"
          );
        }

        setName(data.user.name);
        setEmail(data.user.email);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load profile"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Save profile
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSaved(false);

    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update profile"
        );
      }

      // Updated user ko localStorage mein bhi save karo
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setName(data.user.name);
      setEmail(data.user.email);

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2500);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
        <p className="text-sm text-[#64748B]">
          Loading profile...
        </p>
      </main>
    );
  }

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
              Edit Profile
            </h1>
          </div>
        </div>

        {/* Profile Icon */}
        <div className="mt-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#EDE9FE]">
            <User
              size={38}
              className="text-[#7C3AED]"
            />
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSave}
          className="mt-8 rounded-3xl bg-white p-5 shadow-sm"
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
                className="w-full bg-transparent px-3 py-3.5 text-sm text-[#0F172A] outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-[#334155]">
              Email
            </label>

            <div className="flex items-center rounded-2xl border border-[#E2E8F0] bg-slate-50 px-4">
              <Mail
                size={18}
                className="text-[#94A3B8]"
              />

              <input
                type="email"
                value={email}
                disabled
                className="w-full bg-transparent px-3 py-3.5 text-sm text-[#64748B] outline-none"
              />
            </div>

            <p className="mt-2 text-xs text-[#94A3B8]">
              Email cannot be changed.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-2xl bg-red-50 p-3 text-center text-sm font-medium text-red-500">
              {error}
            </div>
          )}

          {/* Success */}
          {saved && (
            <div className="mt-4 rounded-2xl bg-[#ECFDF5] p-3 text-center text-sm font-medium text-[#047857]">
              Profile updated successfully! ✅
            </div>
          )}

          {/* Save */}
          <button
            type="submit"
            disabled={saving}
            className="mt-7 w-full rounded-2xl bg-[#7C3AED] py-3.5 text-sm font-semibold text-white transition hover:bg-[#6D28D9] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving
              ? "Saving..."
              : "Save Changes"}
          </button>
        </form>
      </div>
    </main>
  );
}