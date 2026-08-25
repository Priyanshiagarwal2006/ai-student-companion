"use client";

import {
  CheckCircle2,
  Clock3,
  MessageCircle,
  Sparkles,
  Target,
  Loader2,
} from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";

import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";

type UserData = {
  id: number;
  name: string;
  email: string;
};

type Task = {
  id: number;
  title: string;
  completed: boolean | number;
  created_at?: string;
};

type ChatSession = {
  id: number;
  title: string;
  created_at?: string;
};

export default function Home() {
  const [user, setUser] = useState<UserData | null>(null);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loadingTasks, setLoadingTasks] = useState(true);

  const [recentChat, setRecentChat] =
    useState<ChatSession | null>(null);

  const [loadingChat, setLoadingChat] = useState(true);

  // =========================
  // LOAD USER
  // =========================

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to load user:", error);
      }
    }
  }, []);

  // =========================
  // LOAD TASKS
  // =========================

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          window.location.href = "/login";
          return;
        }

        const response = await fetch(
          "https://ai-student-companion.onrender.com/api/tasks",
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
          throw new Error(
            data.message || "Failed to load tasks"
          );
        }

        setTasks(data.tasks || []);
      } catch (error) {
        console.error("Home tasks error:", error);
      } finally {
        setLoadingTasks(false);
      }
    };

    fetchTasks();
  }, []);

  // =========================
  // LOAD RECENT AI CHAT
  // =========================

  useEffect(() => {
    const fetchRecentChat = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          window.location.href = "/login";
          return;
        }

        const response = await fetch(
          "https://ai-student-companion.onrender.com/api/chat",
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
            data.message || "Failed to load recent chat"
          );
        }

        const chats: ChatSession[] =
          data.chats || [];

        // Backend already returns newest first
        setRecentChat(chats[0] || null);
      } catch (error) {
        console.error(
          "Recent chat error:",
          error
        );
      } finally {
        setLoadingChat(false);
      }
    };

    fetchRecentChat();
  }, []);

  // =========================
  // CALCULATE TASK STATS
  // =========================

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => Boolean(task.completed)
  ).length;

  const pendingTasks =
    totalTasks - completedTasks;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  const firstName =
    user?.name?.split(" ")[0] || "Student";

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-28">

      <div className="mx-auto max-w-md px-5 py-6">

        {/* ================= HEADER ================= */}

        <Header />

        {/* ================= AI COMPANION ================= */}

        <section className="mt-6 rounded-3xl bg-[#7C3AED] p-6 text-white shadow-lg">

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm text-purple-100">
                Welcome back, {firstName} 👋
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Stay focused,
                <br />
                keep learning.
              </h2>

            </div>

            <div className="rounded-2xl bg-white/15 p-3">
              <Sparkles size={25} />
            </div>

          </div>

          <Link
            href="/chat"
            className="mt-6 inline-block rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#7C3AED] transition hover:bg-purple-50"
          >
            Ask AI
          </Link>

        </section>

        {/* ================= TODAY'S OVERVIEW ================= */}

        <section className="mt-6">

          <div className="mb-3 flex items-center justify-between">

            <h2 className="text-lg font-bold text-[#0F172A]">
              Today&apos;s Overview
            </h2>

            <span className="text-xs text-[#64748B]">
              Today
            </span>

          </div>

          {loadingTasks ? (

            <div className="flex items-center justify-center rounded-3xl bg-white py-10 shadow-sm">

              <Loader2
                size={24}
                className="animate-spin text-[#7C3AED]"
              />

            </div>

          ) : (

            <div className="grid grid-cols-2 gap-3">

              <StatCard
                title="Total Tasks"
                value={String(totalTasks)}
                color="#EDE9FE"
                icon={
                  <Clock3
                    size={21}
                    className="text-[#7C3AED]"
                  />
                }
              />

              <StatCard
                title="Completed"
                value={String(completedTasks)}
                color="#D1FAE5"
                icon={
                  <CheckCircle2
                    size={21}
                    className="text-[#10B981]"
                  />
                }
              />

              <StatCard
                title="Pending"
                value={String(pendingTasks)}
                color="#FEF3C7"
                icon={
                  <Clock3
                    size={21}
                    className="text-[#F59E0B]"
                  />
                }
              />

              <StatCard
                title="Productivity"
                value={`${productivity}%`}
                color="#DBEAFE"
                icon={
                  <Target
                    size={21}
                    className="text-[#3B82F6]"
                  />
                }
              />

            </div>

          )}

        </section>

        {/* ================= RECENT AI CHAT ================= */}

        <section className="mt-6 rounded-3xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EDE9FE]">

              <MessageCircle
                size={21}
                className="text-[#7C3AED]"
              />

            </div>

            <div className="min-w-0">

              <h3 className="font-semibold text-[#0F172A]">
                Recent AI Chat
              </h3>

              {loadingChat ? (

                <div className="mt-1 h-4 w-40 animate-pulse rounded bg-slate-200" />

              ) : recentChat ? (

                <p className="mt-1 truncate text-sm text-[#64748B]">
                  {recentChat.title}
                </p>

              ) : (

                <p className="mt-1 text-sm text-[#64748B]">
                  No conversations yet
                </p>

              )}

            </div>

          </div>

          {loadingChat ? (

            <div className="mt-4 flex items-center gap-2 text-sm text-[#64748B]">
              <Loader2
                size={16}
                className="animate-spin text-[#7C3AED]"
              />
              Loading your recent chat...
            </div>

          ) : recentChat ? (

            <>
              <p className="mt-4 text-sm leading-6 text-[#64748B]">
                Continue your previous conversation
                with your AI study companion.
              </p>

              <Link
                href="/chat"
                className="mt-4 inline-block text-sm font-semibold text-[#7C3AED]"
              >
                Continue chat →
              </Link>
            </>

          ) : (

            <>
              <p className="mt-4 text-sm leading-6 text-[#64748B]">
                Start a conversation with your AI
                study companion for learning, coding,
                interview preparation, and more.
              </p>

              <Link
                href="/chat"
                className="mt-4 inline-block text-sm font-semibold text-[#7C3AED]"
              >
                Start AI Chat →
              </Link>
            </>

          )}

        </section>

        {/* ================= MOTIVATION ================= */}

        <section className="mt-6 rounded-3xl bg-[#EDE9FE] p-5">

          <p className="text-sm font-semibold text-[#7C3AED]">
            A little reminder 💜
          </p>

          <p className="mt-2 text-sm leading-6 text-[#475569]">
            You don&apos;t have to be perfect. Just keep
            learning, keep improving, and take one step
            forward at a time. ✨
          </p>

        </section>

      </div>

      <BottomNav />

    </main>
  );
}