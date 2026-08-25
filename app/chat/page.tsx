"use client";

import { useEffect, useState } from "react";
import {
  Bot,
  Loader2,
  Plus,
  Send,
  User,
} from "lucide-react";

import ReactMarkdown from "react-markdown";

import BottomNav from "@/components/BottomNav";
import ChatHistory, {
  ChatSession,
} from "@/components/ChatHistory";

interface Message {
  id?: number;
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi 👋 I’m your AI study companion. What would you like to learn today?",
    },
  ]);

  const [chats, setChats] = useState<ChatSession[]>([]);

  const [sessionId, setSessionId] =
    useState<number | null>(null);

  const [loading, setLoading] = useState(false);

  const [loadingHistory, setLoadingHistory] =
    useState(true);

  // =========================
  // LOAD CHAT HISTORY
  // =========================

  useEffect(() => {
    const loadChats = async () => {
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
            data.message ||
              "Failed to load chat history"
          );
        }

        setChats(data.chats || []);
      } catch (error) {
        console.error(
          "Chat history error:",
          error
        );
      } finally {
        setLoadingHistory(false);
      }
    };

    loadChats();
  }, []);

  // =========================
  // SEND MESSAGE
  // =========================

  const sendMessage = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || loading) return;

    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: trimmedMessage,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://ai-student-companion.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            message: trimmedMessage,
            ...(sessionId
              ? { sessionId }
              : {}),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            data.message ||
            "Failed to get AI response"
        );
      }

      // Save session ID

      if (data.sessionId) {
        setSessionId(data.sessionId);

        // If this is a new chat,
        // refresh chat history

        if (!sessionId) {
          const historyResponse =
            await fetch(
              "https://ai-student-companion.onrender.com/api/chat",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          const historyData =
            await historyResponse.json();

          if (historyResponse.ok) {
            setChats(
              historyData.chats || []
            );
          }
        }
      }

      // Add AI response

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error(
        "AI chat error:",
        error
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? `Sorry, something went wrong: ${error.message}`
              : "Sorry, something went wrong while connecting to the AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // OPEN OLD CHAT
  // =========================

  const selectChat = async (
    id: number
  ) => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    setLoading(true);
    setSessionId(id);

    try {
      const response = await fetch(
        `https://ai-student-companion.onrender.com/api/chat/${id}`,
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
          data.message ||
            "Failed to load chat"
        );
      }

      setMessages(
        (data.messages || []).map(
          (msg: Message) => ({
            id: msg.id,
            role: msg.role,
            content: msg.content,
          })
        )
      );
    } catch (error) {
      console.error(
        "Open chat error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // NEW CHAT
  // =========================

  const newChat = () => {
    setSessionId(null);

    setMessages([
      {
        role: "assistant",
        content:
          "New chat started! What would you like to learn today?",
      },
    ]);

    setMessage("");
  };

  // =========================
  // DELETE CHAT
  // =========================

  const deleteChat = async (
    id: number
  ) => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const response = await fetch(
        `https://ai-student-companion.onrender.com/api/chat/${id}`,
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
          data.message ||
            "Failed to delete chat"
        );
      }

      // Remove from history

      setChats((prev) =>
        prev.filter(
          (chat) => chat.id !== id
        )
      );

      // If currently opened chat was deleted

      if (sessionId === id) {
        newChat();
      }
    } catch (error) {
      console.error(
        "Delete chat error:",
        error
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-28">

      <div className="mx-auto max-w-md px-5 py-6">

        {/* ================= HEADER ================= */}

        <div className="mb-5 flex items-center justify-between">

          <div>
            <p className="text-sm text-[#64748B]">
              Your AI companion
            </p>

            <h1 className="text-2xl font-bold text-[#0F172A]">
              AI Chat
            </h1>
          </div>

          <button
            type="button"
            onClick={newChat}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-[#7C3AED] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6D28D9] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Plus size={17} />
            New Chat
          </button>

        </div>

        {/* ================= CHAT AREA ================= */}

        <div className="mb-5 space-y-3 rounded-3xl bg-white p-4 shadow-sm">

          {messages.map(
            (msg, index) => (
              <div
                key={msg.id ?? index}
                className={`flex gap-3 ${
                  msg.role === "user"
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}
              >

                {/* Avatar */}

                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    msg.role ===
                    "assistant"
                      ? "bg-[#EDE9FE]"
                      : "bg-[#7C3AED]"
                  }`}
                >
                  {msg.role ===
                  "assistant" ? (
                    <Bot
                      size={17}
                      className="text-[#7C3AED]"
                    />
                  ) : (
                    <User
                      size={17}
                      className="text-white"
                    />
                  )}
                </div>

                {/* Message */}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    msg.role ===
                    "assistant"
                      ? "bg-slate-100 text-[#334155]"
                      : "bg-[#7C3AED] text-white"
                  }`}
                >

                  {msg.role ===
                  "assistant" ? (
                    <ReactMarkdown
                      components={{
                        h1: ({
                          children,
                        }) => (
                          <h1 className="mb-3 text-lg font-bold">
                            {children}
                          </h1>
                        ),

                        h2: ({
                          children,
                        }) => (
                          <h2 className="mb-2 mt-4 text-base font-bold">
                            {children}
                          </h2>
                        ),

                        h3: ({
                          children,
                        }) => (
                          <h3 className="mb-2 mt-3 text-sm font-bold">
                            {children}
                          </h3>
                        ),

                        p: ({
                          children,
                        }) => (
                          <p className="mb-3 last:mb-0">
                            {children}
                          </p>
                        ),

                        ul: ({
                          children,
                        }) => (
                          <ul className="mb-3 ml-5 list-disc space-y-1">
                            {children}
                          </ul>
                        ),

                        ol: ({
                          children,
                        }) => (
                          <ol className="mb-3 ml-5 list-decimal space-y-1">
                            {children}
                          </ol>
                        ),

                        li: ({
                          children,
                        }) => (
                          <li>
                            {children}
                          </li>
                        ),

                        strong: ({
                          children,
                        }) => (
                          <strong className="font-bold">
                            {children}
                          </strong>
                        ),

                        em: ({
                          children,
                        }) => (
                          <em>
                            {children}
                          </em>
                        ),

                        blockquote: ({
                          children,
                        }) => (
                          <blockquote className="my-3 border-l-4 border-[#7C3AED] pl-3 italic">
                            {children}
                          </blockquote>
                        ),

                        code: ({
                          children,
                        }) => (
                          <code className="rounded bg-black/10 px-1.5 py-0.5 text-xs">
                            {children}
                          </code>
                        ),

                        pre: ({
                          children,
                        }) => (
                          <pre className="my-3 overflow-x-auto rounded-xl bg-slate-900 p-3 text-xs leading-5 text-slate-100">
                            {children}
                          </pre>
                        ),

                        hr: () => (
                          <hr className="my-4 border-slate-300" />
                        ),
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    msg.content
                  )}

                </div>

              </div>
            )
          )}

          {/* ================= LOADING ================= */}

          {loading && (
            <div className="flex gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDE9FE]">
                <Bot
                  size={17}
                  className="text-[#7C3AED]"
                />
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3">

                <Loader2
                  size={16}
                  className="animate-spin text-[#7C3AED]"
                />

                <span className="text-sm text-[#64748B]">
                  Thinking...
                </span>

              </div>

            </div>
          )}

        </div>

        {/* ================= INPUT ================= */}

        <div className="mb-5 flex gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">

          <input
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                !e.shiftKey
              ) {
                e.preventDefault();
                sendMessage();
              }
            }}
            disabled={loading}
            placeholder="Ask anything..."
            className="min-w-0 flex-1 bg-transparent px-3 text-sm text-[#0F172A] outline-none placeholder:text-slate-400 disabled:opacity-60"
          />

          <button
            type="button"
            onClick={sendMessage}
            disabled={
              loading ||
              !message.trim()
            }
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7C3AED] text-white transition hover:bg-[#6D28D9] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <Loader2
                size={18}
                className="animate-spin"
              />
            ) : (
              <Send size={18} />
            )}
          </button>

        </div>

        {/* ================= CHAT HISTORY ================= */}

        <ChatHistory
          chats={chats}
          activeChatId={sessionId}
          loading={loadingHistory}
          onNewChat={newChat}
          onSelectChat={selectChat}
          onDelete={deleteChat}
        />

      </div>

      <BottomNav />

    </main>
  );
}