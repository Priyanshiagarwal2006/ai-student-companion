"use client";

import {
  ChevronRight,
  Lock,
  LogOut,
  Mail,
  Moon,
  Pencil,
  Shield,
  Star,
  User,
} from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";

import BottomNav from "@/components/BottomNav";
import { useTheme } from "@/components/ThemeProvider";

const accountItems = [
  {
    title: "Edit Profile",
    description: "Update your personal information",
    icon: Pencil,
    href: "/profile/edit",
  },
  {
    title: "Change Password",
    description: "Update your account password",
    icon: Lock,
    href: "/profile/change-password",
  },
];

const supportItems = [
  {
    title: "Contact Us",
    description: "We're here to help you",
    icon: Mail,
    href: "/profile/contact",
  },
  {
    title: "Rate App",
    description: "Share your experience with us",
    icon: Star,
    href: "/profile/rate",
  },
];

const legalItems = [
  {
    title: "Privacy Policy",
    description: "Read our privacy policy",
    icon: Shield,
    href: "/profile/privacy",
  },
  {
    title: "Terms & Conditions",
    description: "Read our terms and conditions",
    icon: Shield,
    href: "/profile/terms",
  },
];

type UserData = {
  id: number;
  name: string;
  email: string;
  created_at?: string;
};

export default function ProfilePage() {
  const { theme, toggleTheme } = useTheme();

  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // LOAD PROFILE
  // =========================

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          window.location.href = "/login";
          return;
        }

        const response = await fetch(
          "https://ai-student-companion.onrender.com/api/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");

          window.location.href = "/login";
          return;
        }

        setUser(data.user);

        // Keep latest profile data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      } catch (error) {
        console.error("Profile fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-28">
      <div className="mx-auto max-w-md px-5 py-6">

        {/* ================= HEADER ================= */}

        <div className="mb-6">
          <p className="text-sm text-[#64748B]">
            Manage your account
          </p>

          <h1 className="mt-1 text-2xl font-bold text-[#0F172A]">
            Profile
          </h1>
        </div>

        {/* ================= PROFILE CARD ================= */}

        <section className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">

            {/* Profile Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EDE9FE]">
              <User
                size={34}
                className="text-[#7C3AED]"
              />
            </div>

            {/* User Information */}
            <div className="min-w-0">
              {loading ? (
                <>
                  <div className="h-5 w-40 animate-pulse rounded bg-slate-200" />

                  <div className="mt-2 h-4 w-48 animate-pulse rounded bg-slate-200" />
                </>
              ) : (
                <>
                  <h2 className="truncate text-lg font-bold text-[#0F172A]">
                    {user?.name || "User"}
                  </h2>

                  <p className="mt-1 truncate text-sm text-[#64748B]">
                    {user?.email || ""}
                  </p>
                </>
              )}
            </div>

          </div>
        </section>

        {/* ================= ACCOUNT ================= */}

        <section className="mt-6">
          <h2 className="mb-3 px-1 text-xs font-bold uppercase tracking-wider text-[#64748B]">
            Account
          </h2>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            {accountItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`flex w-full items-center gap-3 p-4 text-left transition hover:bg-slate-50 ${
                    index !== accountItems.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDE9FE]">
                    <Icon
                      size={19}
                      className="text-[#7C3AED]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#0F172A]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-[#64748B]">
                      {item.description}
                    </p>
                  </div>

                  <ChevronRight
                    size={19}
                    className="shrink-0 text-slate-400"
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* ================= APPEARANCE ================= */}

        <section className="mt-6">
          <h2 className="mb-3 px-1 text-xs font-bold uppercase tracking-wider text-[#64748B]">
            Appearance
          </h2>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-slate-50"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDE9FE]">
                <Moon
                  size={19}
                  className="text-[#7C3AED]"
                />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[#0F172A]">
                  Dark Mode
                </p>

                <p className="mt-1 text-xs text-[#64748B]">
                  {theme === "dark"
                    ? "Dark mode is enabled"
                    : "Switch to dark appearance"}
                </p>
              </div>

              {/* Toggle */}
              <div
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  theme === "dark"
                    ? "bg-[#7C3AED]"
                    : "bg-slate-300"
                }`}
              >
                <div
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                    theme === "dark"
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </section>

        {/* ================= SUPPORT ================= */}

        <section className="mt-6">
          <h2 className="mb-3 px-1 text-xs font-bold uppercase tracking-wider text-[#64748B]">
            Support
          </h2>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            {supportItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`flex w-full items-center gap-3 p-4 text-left transition hover:bg-slate-50 ${
                    index !== supportItems.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDE9FE]">
                    <Icon
                      size={19}
                      className="text-[#7C3AED]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#0F172A]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-[#64748B]">
                      {item.description}
                    </p>
                  </div>

                  <ChevronRight
                    size={19}
                    className="shrink-0 text-slate-400"
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* ================= LEGAL ================= */}

        <section className="mt-6">
          <h2 className="mb-3 px-1 text-xs font-bold uppercase tracking-wider text-[#64748B]">
            Legal
          </h2>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            {legalItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`flex w-full items-center gap-3 p-4 text-left transition hover:bg-slate-50 ${
                    index !== legalItems.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100">
                    <Icon
                      size={19}
                      className="text-[#64748B]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#0F172A]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-[#64748B]">
                      {item.description}
                    </p>
                  </div>

                  <ChevronRight
                    size={19}
                    className="shrink-0 text-slate-400"
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* ================= LOGOUT ================= */}

        <section className="mt-6">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-white p-4 text-sm font-semibold text-red-500 shadow-sm transition hover:bg-red-50"
          >
            <LogOut size={18} />
            Logout
          </button>
        </section>

        {/* ================= VERSION ================= */}

        <p className="mt-6 text-center text-xs text-[#94A3B8]">
          AI Student Companion · Version 1.0.0
        </p>

      </div>

      <BottomNav />
    </main>
  );
}