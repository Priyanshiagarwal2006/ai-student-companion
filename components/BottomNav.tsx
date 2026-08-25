"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageCircle, CheckSquare, User } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/home",
    icon: Home,
  },
  {
    name: "AI",
    href: "/chat",
    icon: MessageCircle,
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center justify-around px-3 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-[65px] flex-col items-center gap-1 rounded-2xl px-3 py-2 text-xs font-medium transition ${
                active
                  ? "bg-[#EDE9FE] text-[#7C3AED]"
                  : "text-[#64748B] hover:bg-slate-100"
              }`}
            >
              <Icon size={21} strokeWidth={active ? 2.5 : 2} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}