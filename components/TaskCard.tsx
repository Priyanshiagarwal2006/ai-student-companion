"use client";

import { Check, Trash2 } from "lucide-react";

interface TaskCardProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskCard({
  title,
  completed,
  onToggle,
  onDelete,
}: TaskCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <button
        onClick={onToggle}
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
          completed
            ? "border-[#10B981] bg-[#10B981] text-white"
            : "border-slate-300"
        }`}
      >
        {completed && <Check size={15} />}
      </button>

      <p
        className={`flex-1 text-sm font-medium ${
          completed
            ? "text-[#94A3B8] line-through"
            : "text-[#0F172A]"
        }`}
      >
        {title}
      </p>

      <button
        onClick={onDelete}
        className="rounded-xl p-2 text-slate-400 hover:bg-red-50 hover:text-red-500"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}