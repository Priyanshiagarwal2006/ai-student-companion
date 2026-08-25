"use client";

import { Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const checkApp = async () => {
      // =========================
      // Theme
      // Default = Light Mode
      // =========================
      const savedDarkMode =
        localStorage.getItem("darkMode") === "true";

      if (savedDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      // =========================
      // Splash delay
      // =========================
      await new Promise((resolve) =>
        setTimeout(resolve, 2200)
      );

      // =========================
      // Authentication
      // =========================
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/api/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          router.replace("/home");
          return;
        }

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        router.replace("/login");
      } catch (error) {
        console.error(
          "Authentication check failed:",
          error
        );

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        router.replace("/login");
      }
    };

    checkApp();
  }, [router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#7C3AED] px-6">

      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10" />

      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/10" />

      <div className="relative z-10 flex flex-col items-center text-center">

        <div className="animate-bounce rounded-[28px] bg-white p-5 shadow-2xl">
          <Sparkles
            size={42}
            className="text-[#7C3AED]"
          />
        </div>

        <h1 className="mt-7 text-3xl font-bold tracking-tight text-white">
          AI Student Companion
        </h1>

        <p className="mt-3 max-w-xs text-sm leading-6 text-purple-100">
          Your simple AI-powered companion for learning
          and productivity.
        </p>

        <div className="mt-10 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />

          <span className="h-2 w-2 animate-pulse rounded-full bg-white [animation-delay:200ms]" />

          <span className="h-2 w-2 animate-pulse rounded-full bg-white [animation-delay:400ms]" />
        </div>

      </div>
    </main>
  );
}