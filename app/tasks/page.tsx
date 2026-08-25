"use client";

import { useEffect, useState } from "react";
import { Plus, X, Loader2 } from "lucide-react";

import BottomNav from "@/components/BottomNav";
import TaskCard from "@/components/TaskCard";

interface Task {
  id: number;
  title: string;
  completed: boolean | number;
  created_at?: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // GET TASKS
  // =========================

  const fetchTasks = async () => {
    try {
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/tasks",
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
      console.error("Fetch tasks error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to load tasks"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOAD TASKS ON PAGE LOAD
  // =========================

  useEffect(() => {
    fetchTasks();
  }, []);

  // =========================
  // ADD TASK
  // =========================

  const addTask = async () => {
    if (!newTask.trim() || adding) {
      return;
    }

    try {
      setAdding(true);
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/tasks",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newTask.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to add task"
        );
      }

      setTasks((prev) => [data.task, ...prev]);

      setNewTask("");
    } catch (error) {
      console.error("Add task error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to add task"
      );
    } finally {
      setAdding(false);
    }
  };

  // =========================
  // TOGGLE TASK
  // =========================

  const toggleTask = async (id: number) => {
    try {
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch(
        `http://localhost:5000/api/tasks/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update task"
        );
      }

      setTasks((prev) =>
        prev.map((task) =>
          task.id === id
            ? data.task
            : task
        )
      );
    } catch (error) {
      console.error("Toggle task error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to update task"
      );
    }
  };

  // =========================
  // DELETE TASK
  // =========================

  const deleteTask = async (id: number) => {
    try {
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch(
        `http://localhost:5000/api/tasks/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete task"
        );
      }

      setTasks((prev) =>
        prev.filter((task) => task.id !== id)
      );
    } catch (error) {
      console.error("Delete task error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to delete task"
      );
    }
  };

  // =========================
  // CLEAR ALL TASKS
  // =========================

  const clearAllTasks = async () => {
    if (tasks.length === 0) {
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete all tasks?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");

      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/tasks",
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to clear tasks"
        );
      }

      setTasks([]);
    } catch (error) {
      console.error("Clear tasks error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to clear tasks"
      );
    }
  };

  // =========================
  // STATS
  // =========================

  const completedTasks = tasks.filter(
    (task) => Boolean(task.completed)
  ).length;

  const pendingTasks =
    tasks.length - completedTasks;

  const productivity =
    tasks.length === 0
      ? 0
      : Math.round(
          (completedTasks / tasks.length) * 100
        );

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-28">
      <div className="mx-auto max-w-md px-5 py-6">

        {/* Header */}
        <div className="mb-6">
          <p className="text-sm text-[#64748B]">
            Stay organized
          </p>

          <h1 className="mt-1 text-2xl font-bold text-[#0F172A]">
            My Tasks
          </h1>
        </div>

        {/* Progress */}
        <div className="mb-6 rounded-3xl bg-[#7C3AED] p-5 text-white">

          <p className="text-sm text-purple-100">
            Your progress
          </p>

          <div className="mt-3 flex items-end justify-between">

            <div>
              <p className="text-3xl font-bold">
                {completedTasks}/{tasks.length}
              </p>

              <p className="mt-1 text-sm text-purple-100">
                tasks completed
              </p>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold">
                {productivity}%
              </p>

              <p className="text-xs text-purple-100">
                productivity
              </p>
            </div>

          </div>
        </div>

        {/* Add Task */}
        <div className="mb-4 flex gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">

          <input
            value={newTask}
            onChange={(e) =>
              setNewTask(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            placeholder="Add a new task..."
            disabled={adding}
            className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[#94A3B8]"
          />

          <button
            onClick={addTask}
            disabled={
              adding || !newTask.trim()
            }
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7C3AED] text-white transition hover:bg-[#6D28D9] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {adding ? (
              <Loader2
                size={19}
                className="animate-spin"
              />
            ) : (
              <Plus size={20} />
            )}
          </button>

        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-2xl bg-red-50 p-3 text-center text-sm text-red-500">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex items-center justify-center py-12">

            <Loader2
              size={25}
              className="animate-spin text-[#7C3AED]"
            />

          </div>
        ) : (
          <>
            {/* Tasks */}
            <div className="space-y-3">

              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  completed={Boolean(
                    task.completed
                  )}
                  onToggle={() =>
                    toggleTask(task.id)
                  }
                  onDelete={() =>
                    deleteTask(task.id)
                  }
                />
              ))}

            </div>

            {/* Empty */}
            {tasks.length === 0 && (
              <div className="rounded-3xl bg-white px-5 py-12 text-center shadow-sm">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDE9FE] text-2xl">
                  📝
                </div>

                <p className="mt-4 font-semibold text-[#0F172A]">
                  No tasks yet
                </p>

                <p className="mt-1 text-sm text-[#64748B]">
                  Add your first task and start
                  getting things done.
                </p>

              </div>
            )}

            {/* Clear All */}
            {tasks.length > 0 && (
              <button
                onClick={clearAllTasks}
                className="mx-auto mt-6 flex items-center gap-2 text-xs text-slate-400 transition hover:text-red-500"
              >
                <X size={14} />
                Clear all
              </button>
            )}
          </>
        )}

      </div>

      <BottomNav />
    </main>
  );
}