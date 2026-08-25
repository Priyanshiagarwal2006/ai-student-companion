"use client";

import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-5 py-6 pb-10">
      <div className="mx-auto max-w-md">

        {/* Header */}
        <div className="flex items-center gap-3">

          <Link
            href="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#64748B] shadow-sm transition hover:bg-[#EDE9FE] hover:text-[#7C3AED]"
          >
            <ArrowLeft size={20} />
          </Link>

          <div>
            <p className="text-xs text-[#64748B]">
              Legal
            </p>

            <h1 className="text-xl font-bold text-[#0F172A]">
              Terms & Conditions
            </h1>
          </div>

        </div>

        {/* Intro */}
        <section className="mt-7 rounded-3xl bg-[#7C3AED] p-6 text-white shadow-lg">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <FileText size={24} />
            </div>

            <div>

              <h2 className="text-lg font-bold">
                Terms of Use
              </h2>

              <p className="mt-1 text-xs text-purple-100">
                Please read these terms carefully.
              </p>

            </div>

          </div>

          <p className="mt-5 text-sm leading-6 text-purple-100">
            By using AI Student Companion, you agree to use
            the application responsibly and in accordance
            with these terms.
          </p>

        </section>

        {/* Acceptance */}
        <section className="mt-5 rounded-3xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EDE9FE]">
              <CheckCircle2
                size={20}
                className="text-[#7C3AED]"
              />
            </div>

            <h2 className="text-base font-bold text-[#0F172A]">
              Acceptance of Terms
            </h2>

          </div>

          <p className="mt-4 text-sm leading-6 text-[#64748B]">
            By creating an account or using the application,
            you acknowledge that you have read and agreed to
            these Terms & Conditions.
          </p>

        </section>

        {/* Account Responsibility */}
        <section className="mt-5 rounded-3xl bg-white p-5 shadow-sm">

          <h2 className="text-base font-bold text-[#0F172A]">
            Account Responsibility
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#64748B]">
            You are responsible for keeping your account
            credentials secure and for activities performed
            through your account.
          </p>

        </section>

        {/* Appropriate Use */}
        <section className="mt-5 rounded-3xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EDE9FE]">
              <ShieldCheck
                size={20}
                className="text-[#7C3AED]"
              />
            </div>

            <h2 className="text-base font-bold text-[#0F172A]">
              Appropriate Use
            </h2>

          </div>

          <p className="mt-4 text-sm leading-6 text-[#64748B]">
            The application should be used for legitimate
            learning, productivity, and educational purposes.
            Users should not attempt to misuse, disrupt, or
            gain unauthorized access to the application.
          </p>

        </section>

        {/* AI Content */}
        <section className="mt-5 rounded-3xl bg-[#EDE9FE] p-5">

          <div className="flex items-center gap-3">

            <Sparkles
              size={21}
              className="text-[#7C3AED]"
            />

            <h2 className="text-base font-bold text-[#5B21B6]">
              AI-Generated Content
            </h2>

          </div>

          <p className="mt-3 text-sm leading-6 text-[#6D28D9]">
            AI-generated responses are intended to assist
            your learning. You should review important
            information and use your own judgment when
            relying on AI-generated content.
          </p>

        </section>

        {/* Service Changes */}
        <section className="mt-5 rounded-3xl bg-white p-5 shadow-sm">

          <h2 className="text-base font-bold text-[#0F172A]">
            Service Changes
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#64748B]">
            Features and functionality of the application
            may be updated or changed over time to improve
            the user experience.
          </p>

        </section>

        {/* Contact */}
        <section className="mt-5 rounded-3xl bg-white p-5 shadow-sm">

          <h2 className="text-base font-bold text-[#0F172A]">
            Questions
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#64748B]">
            If you have any questions regarding these terms,
            please contact the AI Student Companion support
            team.
          </p>

        </section>

        {/* Last Updated */}
        <div className="mt-6 text-center">

          <p className="text-xs text-[#94A3B8]">
            Last updated: August 2026
          </p>

        </div>

      </div>
    </main>
  );
}