"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Heart, Brain } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { StatsCounter } from "@/components/StatsCounter";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-base leading-relaxed">
      {/* Hero */}
      <section className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left column */}
          <div className="space-y-8">
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-gray-900">
              Learning That Embraces Everyone.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-gray-700">
              Global-standard Cambridge teaching, caring guidance, and space for
              every learner’s unique journey.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                variant="brand"
                className="w-full sm:w-auto"
              >
                <Link href="/contact">Book a Tour</Link>
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-1 text-brand underline-offset-4 hover:underline"
              >
                Get to know more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 7l-10 10m0-10h10v10"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <StatsCounter end={1000} label="Students" suffix="+" />
              <StatsCounter end={54} label="Awards" suffix="+" />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-64 w-full rounded-[2rem] md:h-96 lg:h-[460px]">
            <Image
              src="/mald-centered.jpg"
              alt="Students collaborating around a laptop — learning together"
              fill
              priority
              className="rounded-[2rem] object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-white to-gray-50" />

      {/* Why Choose MALD */}
      <section id="why" className="bg-gray-50 px-4 py-20">
        <div className="relative mx-auto max-w-7xl space-y-12">
          {/* Vertical label */}
          <span className="absolute left-0 top-2 hidden -rotate-90 transform bg-brand px-4 py-2 font-semibold text-white md:block">
            WHY US
          </span>

          {/* Heading */}
          <div className="grid gap-6 md:grid-cols-2 md:pl-28">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Choose a Quality School for a Bright Future
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              MALD School is committed to providing high-quality education and
              an inclusive, inspiring curriculum.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: (
                  <>
                    Guided <span className="text-brand">Growth</span>, Inspired
                    Minds
                  </>
                ),
                desc: "Dedicated mentors nurture curiosity and support every learner’s journey to their full potential.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-10 w-10 stroke-[1.5] text-brand"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M4 10l8-5 8 5v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z" />
                    <polyline points="12 5 12 22" />
                  </svg>
                ),
              },
              {
                title: (
                  <>
                    Dream <span className="text-brand">Big</span>, Think Global
                  </>
                ),
                desc: "Future-ready skills and a worldwide mindset empower our students to lead and innovate everywhere.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-10 w-10 stroke-[1.5] text-brand"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M8 21h8M12 17v4" />
                    <path d="M12 3a6 6 0 0 1 6 6c0 5-6 9-6 9S6 14 6 9a6 6 0 0 1 6-6z" />
                  </svg>
                ),
              },
              {
                title: (
                  <>
                    Skills That <span className="text-brand">Matter</span> For
                    Life
                  </>
                ),
                desc: "A holistic education that blends knowledge, character and compassion—shaping confident world citizens.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-10 w-10 stroke-[1.5] text-brand"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 2l1.09 3.41L16 6l-2.91 2.09L12 11l-1.09-2.91L8 6l2.91-0.59L12 2z" />
                  </svg>
                ),
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                {/* Arrow */}
                <div className="absolute -right-6 -top-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand text-brand">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 7l-10 10m0-10h10v10"
                    />
                  </svg>
                </div>

                {card.icon}
                <h3 className="mt-6 text-xl font-semibold leading-snug">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-gray-50 to-white" />

      {/* Stats */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { end: 340, label: "Successful Trainings", suffix: "" },
            { end: 54, label: "Awards Received", suffix: "+" },
            { end: 1380, label: "Satisfied Parents", suffix: "+" },
            { end: 1000, label: "Outstanding Students", suffix: "+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md"
            >
              <StatsCounter
                end={stat.end}
                label={stat.label}
                suffix={stat.suffix as string}
                numberClassName="bg-gradient-to-br from-brand-accent to-brand text-transparent bg-clip-text"
                labelClassName="mt-4 text-lg font-semibold text-gray-900 normal-case tracking-normal"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-white to-gray-50" />

      {/* Call-to-Action */}
      <section className="px-4 pb-24 pt-16">
        <div className="container mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-16 md:py-24 md:px-20 text-white">
            {/* Textured noise pattern overlay (optional) */}
            {/* <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-20" /> */}

            <h2 className="max-w-4xl font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Ready to join the MALD community?
            </h2>

            <Button
              asChild
              variant="brand"
              size="lg"
              className="mt-8 inline-flex items-center gap-2 bg-white text-brand hover:bg-white/90"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 7l10 5-10 5"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
