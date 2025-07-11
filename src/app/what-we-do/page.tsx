"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardProps {
  title: string;
  bullets: string[];
  icon: React.ReactNode;
}

function ServiceCard({ title, bullets, icon }: CardProps) {
  return (
    <div className="relative rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg">
      {/* Icon */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-2xl text-brand">
          {icon}
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-900">
          {title}
        </h3>
      </div>

      <ul className="space-y-3 text-sm leading-relaxed text-gray-700 list-disc pl-6">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-base leading-relaxed">
      {/* Hero */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl sm:text-4xl font-bold md:text-5xl mb-6 text-gray-900">
            What We Do
          </h1>
          <p className="text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto">
            Explore our core services and programmes designed to boost every
            learner's potential.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl grid grid-cols-1 gap-6 sm:gap-8 px-4 py-8 sm:py-10 md:py-12 md:grid-cols-3">
        <ServiceCard
          title="Training"
          icon={
            <span aria-hidden className="text-2xl">
              🎓
            </span>
          }
          bullets={[
            "Parental Training – unleash children's potential, bridge learning gaps, and create 21st-century skills awareness",
            "Teachers Training – equip staff to identify diverse needs and cultivate safe, non-threatening classrooms",
            "Self-Development Courses – help learners explore strengths and interests through guided surveys",
          ]}
        />
        <ServiceCard
          title="Camps & Festivals"
          icon={
            <span aria-hidden className="text-2xl">
              🏕️
            </span>
          }
          bullets={[
            "Fun Camps & Summer Camps – readers' theatre, writers' workshops, critical-thinking and project-based learning",
            "Read Aloud / Fun & Educational Festivals – activities like Vocabulary Games, Hands-on Maths, Science Experiments, Beading, Arts & Crafts and more",
          ]}
        />
        <ServiceCard
          title="After-School Programs"
          icon={
            <span aria-hidden className="text-2xl">
              📚
            </span>
          }
          bullets={[
            "Daily homework support, project-based & problem-based learning, readers' & writers' workshops, public speaking",
            "SAT tutorials and comprehensive US college-prep guidance: exam coaching, essay support, application assistance & financial-aid orientation",
          ]}
        />
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-16 sm:pb-20 md:pb-24 pt-12 sm:pt-14 md:pt-16">
        <div className="container mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-brand px-6 sm:px-8 py-12 sm:py-16 md:py-24 md:px-20 text-white">
            <h2 className="max-w-4xl font-display text-2xl sm:text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Ready to collaborate with MALD?
            </h2>
            <Button
              asChild
              variant="brand"
              size="lg"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-white text-brand hover:bg-white/90"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Contact Us
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
