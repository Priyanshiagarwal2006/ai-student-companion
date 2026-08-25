"use client";

import {
  ArrowLeft,
  CheckCircle2,
  Lock,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
          </div>
        </div>

        {/* Intro Card */}
        <section className="mt-7 rounded-3xl bg-[#7C3AED] p-6 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <Shield size={24} />
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Your Privacy Matters
              </h2>

              <p className="mt-1 text-xs text-purple-100">
                We respect and protect your information.
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-purple-100">
            AI Student Companion is designed to provide a
            simple and secure learning experience. This
            policy explains how information is handled while
            using the application.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mt-5 rounded-3xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EDE9FE]">
              <Lock
                size={20}
                className="text-[#7C3AED]"
              />
            </div>

            <h2 className="text-base font-bold text-[#0F172A]">
              Information We Collect
            </h2>
          </div>

          <p className="mt-4 text-sm leading-6 text-[#64748B]">
            We may collect basic information that you provide
            when creating and using your account, such as:
          </p>

          <div className="mt-4 space-y-3">

            {[
              "Name and email address",
              "Account information",
              "Learning and app activity",
              "Information you provide while using app features",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-3"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#7C3AED]"
                />

                <p className="text-sm leading-5 text-[#475569]">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* How We Use Information */}
        <section className="mt-5 rounded-3xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EDE9FE]">
              <Sparkles
                size={20}
                className="text-[#7C3AED]"
              />
            </div>

            <h2 className="text-base font-bold text-[#0F172A]">
              How We Use Information
            </h2>

          </div>

          <p className="mt-4 text-sm leading-6 text-[#64748B]">
            Your information is used to provide and improve
            the features of AI Student Companion, including
            account management, learning assistance, and
            personalized app experiences.
          </p>

        </section>

        {/* Data Protection */}
        <section className="mt-5 rounded-3xl bg-[#EDE9FE] p-5">

          <h2 className="text-base font-bold text-[#5B21B6]">
            Data Protection
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#6D28D9]">
            We take reasonable steps to protect your account
            information and help keep your data secure.
          </p>

        </section>

        {/* Your Choices */}
        <section className="mt-5 rounded-3xl bg-white p-5 shadow-sm">

          <h2 className="text-base font-bold text-[#0F172A]">
            Your Choices
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#64748B]">
            You can manage your account information through
            the Profile section of the application. You may
            also contact us if you have questions about your
            information.
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