"use client";

import { ArrowLeft, Mail, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("Priyanshi Agarwal");
  const [email, setEmail] = useState("agarwalpriyanshi690@gmail.com");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSent(true);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-5 py-6">
      <div className="mx-auto max-w-md">

        <div className="flex items-center gap-3">
          <Link
            href="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#64748B] shadow-sm"
          >
            <ArrowLeft size={20} />
          </Link>

          <h1 className="text-xl font-bold text-[#0F172A]">
            Contact Us
          </h1>
        </div>

        <div className="mt-8 rounded-3xl bg-[#7C3AED] p-6 text-white">
          <Mail size={28} />

          <h2 className="mt-4 text-xl font-bold">
            We're here to help 💜
          </h2>

          <p className="mt-2 text-sm leading-6 text-purple-100">
            Have a question or facing an issue? Send us a message
            and we'll get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-5 rounded-3xl bg-white p-5 shadow-sm"
        >
          <label className="mb-2 block text-sm font-semibold text-[#334155]">
            Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3.5 text-sm outline-none focus:border-[#7C3AED]"
          />

          <label className="mb-2 mt-5 block text-sm font-semibold text-[#334155]">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3.5 text-sm outline-none focus:border-[#7C3AED]"
          />

          <label className="mb-2 mt-5 block text-sm font-semibold text-[#334155]">
            Message
          </label>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            placeholder="Tell us how we can help..."
            className="w-full resize-none rounded-2xl border border-[#E2E8F0] px-4 py-3.5 text-sm outline-none focus:border-[#7C3AED]"
          />

          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7C3AED] py-3.5 text-sm font-semibold text-white hover:bg-[#6D28D9]"
          >
            <Send size={17} />
            Send Message
          </button>

          {sent && (
            <p className="mt-4 rounded-2xl bg-[#ECFDF5] p-3 text-center text-sm text-[#047857]">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </main>
  );
}