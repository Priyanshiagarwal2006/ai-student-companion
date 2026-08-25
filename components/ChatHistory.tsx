"use client";

import {
  MessageCircle,
  Plus,
  Trash2,
  Loader2,
} from "lucide-react";

export interface ChatSession {
  id: number;
  title: string;
  created_at?: string;
}

interface ChatHistoryProps {
  chats: ChatSession[];
  activeChatId: number | null;
  loading: boolean;
  onNewChat: () => void;
  onSelectChat: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ChatHistory({
  chats,
  activeChatId,
  loading,
  onNewChat,
  onSelectChat,
  onDelete,
}: ChatHistoryProps) {
  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm">

      {/* Header */}

      <div className="mb-4 flex items-center justify-between">

        <h2 className="font-semibold text-[#0F172A]">
          Chat History
        </h2>

        <button
          type="button"
          onClick={onNewChat}
          className="flex items-center gap-1 rounded-xl bg-[#EDE9FE] px-3 py-2 text-xs font-semibold text-[#7C3AED] transition hover:bg-[#DDD6FE]"
        >
          <Plus size={15} />
          New
        </button>

      </div>

      {/* Loading */}

      {loading ? (
        <div className="flex items-center justify-center py-6">
          <Loader2
            size={20}
            className="animate-spin text-[#7C3AED]"
          />
        </div>
      ) : chats.length === 0 ? (

        /* Empty */

        <p className="py-5 text-center text-sm text-[#64748B]">
          No previous chats
        </p>

      ) : (

        /* Chat List */

        <div className="space-y-2">

          {chats.map((chat) => (

            <div
              key={chat.id}
              className={`flex items-center gap-3 rounded-2xl p-3 transition ${
                activeChatId === chat.id
                  ? "bg-[#EDE9FE]"
                  : "hover:bg-slate-50"
              }`}
            >

              {/* Open Chat */}

              <button
                type="button"
                onClick={() =>
                  onSelectChat(chat.id)
                }
                className="flex min-w-0 flex-1 items-center gap-3 text-left"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EDE9FE]">
                  <MessageCircle
                    size={17}
                    className="text-[#7C3AED]"
                  />
                </div>

                <p className="truncate text-sm font-medium text-[#334155]">
                  {chat.title}
                </p>

              </button>

              {/* Delete */}

              <button
                type="button"
                onClick={() =>
                  onDelete(chat.id)
                }
                className="shrink-0 text-slate-400 transition hover:text-red-500"
                title="Delete chat"
              >
                <Trash2 size={16} />
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}