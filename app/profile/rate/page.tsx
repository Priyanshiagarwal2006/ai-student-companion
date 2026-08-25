"use client";

import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RatePage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) return;

    setSubmitted(true);
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
            Rate App
          </h1>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EDE9FE]">
            <Star size={30} className="text-[#7C3AED]" />
          </div>

          <h2 className="mt-5 text-xl font-bold text-[#0F172A]">
            How was your experience?
          </h2>

          <p className="mt-2 text-sm text-[#64748B]">
            Your feedback helps us improve the app.
          </p>

          <div className="mt-7 flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className="rounded-lg p-1"
              >
                <Star
                  size={32}
                  fill={value <= rating ? "#F59E0B" : "transparent"}
                  className={
                    value <= rating
                      ? "text-[#F59E0B]"
                      : "text-slate-300"
                  }
                />
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-7 text-left">
            <label className="mb-2 block text-sm font-semibold text-[#334155]">
              Tell us more
            </label>

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              placeholder="Share your thoughts..."
              className="w-full resize-none rounded-2xl border border-[#E2E8F0] px-4 py-3.5 text-sm outline-none focus:border-[#7C3AED]"
            />

            <button
              type="submit"
              disabled={rating === 0}
              className="mt-5 w-full rounded-2xl bg-[#7C3AED] py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Rating
            </button>
          </form>

          {submitted && (
            <div className="mt-4 rounded-2xl bg-[#ECFDF5] p-3 text-sm font-medium text-[#047857]">
              Thank you for your feedback! ⭐
            </div>
          )}
        </div>
      </div>
    </main>
  );
}