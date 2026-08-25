import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color: string;
}

export default function StatCard({
  title,
  value,
  icon,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <p className="text-sm text-[#64748B]">{title}</p>

      <p className="mt-1 text-2xl font-bold text-[#0F172A]">{value}</p>
    </div>
  );
}