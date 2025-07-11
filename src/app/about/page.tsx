"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { StatsCounter } from "@/components/StatsCounter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-base leading-relaxed">
      {/* Hero */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold md:text-5xl mb-6 text-gray-900">
            About Us
          </h1>
          <p className="text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto">
            Discover our mission, values, and commitment to inclusive education
            excellence
          </p>
        </div>
      </section>

      {/* Our School */}
      <section className="py-12 sm:py-14 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our School
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              MALD Educational Support PLC offers tutoring, training,
              consultation, coaching, and mentoring for a wide variety of
              educational institutions, students, teachers, and parents.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to guide and support children, parents, and schools
              so kids can grasp 21st-century skills: collaborative learning,
              problem-solving, critical thinking—equipping them to be
              competitive globally.
            </p>
          </div>
          <div className="relative w-full h-80 lg:h-[400px]">
            <Image
              src="/mald-centered.jpg"
              alt="MALD School students in a circle celebrating Down Syndrome day"
              fill
              className="rounded-lg object-cover shadow-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* What We Are */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            What We Are
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              As our name indicates,{" "}
              <strong>Multiple Approaches in Learning Diversity</strong>, we
              strongly believe children learn in many different ways. The
              mission and goal of MALD KG and Primary School is to provide
              exceptional care while fostering each child's intellectual,
              social, physical and moral development.
            </p>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  MALD KG and Primary
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  Our mission is to provide exceptional care to children while
                  fostering each child's development in an academic-rich
                  environment. The school environment encompasses a diverse
                  curriculum, allowing for individual growth and success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Tabs */}
      <section className="py-12 sm:py-14 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="beliefs" className="w-full">
            <TabsList className="mb-6 sm:mb-8 grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="beliefs" className="text-sm">
                Belief Statements
              </TabsTrigger>
              <TabsTrigger value="vision" className="text-sm">
                Vision
              </TabsTrigger>
              <TabsTrigger value="teaching" className="text-sm">
                Teaching & Learning
              </TabsTrigger>
              <TabsTrigger value="opportunities" className="text-sm">
                Opportunities
              </TabsTrigger>
            </TabsList>
            <TabsContent value="beliefs" className="space-y-6">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                    MALD School Belief Statements
                  </h3>
                  <div className="space-y-4">
                    {[
                      "We believe that education should address the dynamic of each child's unique development.",
                      "We believe that developing and evaluating moral and ethical values are a critical part of a person's education and growth.",
                      "We believe that education in all its forms is collaboration among parents, students, teachers and other community members.",
                      "We believe that education should nurture and preserve the love of learning.",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="mr-4 mt-3 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                        <p className="leading-relaxed text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vision" className="space-y-6">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                    Our Vision
                  </h3>
                  <div className="space-y-4">
                    {[
                      "To provide a warm and nurturing environment where young children can learn through play and directed activities.",
                      "To stimulate young children with activities in reading readiness, language arts, math readiness, art, motor skills, and ethics.",
                      "To create a love of learning and develop a life-long learner.",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="mr-4 mt-3 h-2 w-2 shrink-0 rounded-full bg-brand" />
                        <p className="leading-relaxed text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="teaching" className="space-y-6">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    MALD{" "}
                    <Badge className="bg-brand-accent text-white">
                      Teaching
                    </Badge>{" "}
                    and Learning
                  </h3>
                  <p className="leading-relaxed text-gray-700 mb-4">
                    The main objective of teaching-learning is to enhance
                    children's social skills and self-image. Activities are
                    designed to ensure a developmentally appropriate,
                    child-centered program.
                  </p>
                  <p className="leading-relaxed text-gray-700">
                    MALD partners with parents and education providers to
                    cultivate a love of learning and teaching.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="opportunities" className="space-y-6">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                    Opportunities at MALD
                  </h3>
                  <p className="leading-relaxed text-gray-700 mb-4">
                    Families have many opportunities to be actively involved in
                    their child's school experience. We believe family
                    involvement is essential.
                  </p>
                  <p className="leading-relaxed text-gray-700">
                    We look forward to collaborating with families through the
                    year to ensure each child's needs are met.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { end: 340, label: "Successful Trainings", suffix: "" },
            { end: 54, label: "Awards Received", suffix: "+" },
            { end: 1380, label: "Satisfied Parents", suffix: "+" },
            { end: 1000, label: "Outstanding Students", suffix: "+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-md"
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

      {/* Our Campus Locations */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Campus Locations
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
              Visit us at either of our two convenient locations in Addis Ababa, designed to serve different communities with the same quality education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CMC Campus */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-48 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.5!2d38.7586!3d9.0065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMjMuNCJOIDM4wrA0NSczMS4wIkU!5e0!3m2!1sen!2set!4v1635000000000!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-5 w-5 text-brand"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    Summit (CMC) Campus
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Our main campus located in the CMC area, offering comprehensive programs from Early Years through Lower Secondary Division.
                </p>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="font-medium">Programs:</span>
                    <span>Early Years & Primary to Lower Secondary</span>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/sGEPDZYuK8Xh7KNZ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand/90 transition-colors duration-200 text-sm font-medium"
                >
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
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Abo Campus */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-48 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.5!2d38.7586!3d9.0065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMjMuNCJOIDM4wrA0NSczMS4wIkU!5e0!3m2!1sen!2set!4v1635000000001!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-5 w-5 text-brand"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    Abo (Vatican Embassy) Campus
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Our second campus near the Vatican Embassy, specializing in early childhood education and primary programs.
                </p>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="font-medium">Programs:</span>
                    <span>Early Years & Primary Division</span>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/ZtYLforThjtycjVdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand/90 transition-colors duration-200 text-sm font-medium"
                >
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
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
