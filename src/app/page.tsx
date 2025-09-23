"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { TherapyButton } from "@/components/ui/therapy-button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Calendar, Phone, MapPin, Clock, Shield, CheckCircle,
  Heart, Brain, Users, ArrowRight, ChevronLeft, ChevronRight,
  Mail, Laptop, Building, UserCheck, Award, BookOpen,
  AlertCircle, HelpCircle, Target, Zap
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [email, setEmail] = useState("");

  const emotionalStates = [
    "Lost", "Anxious", "Broken", "Inauthentic", "Disconnected",
    "Isolated", "Powerless", "Stuck", "Depressed"
  ];

  const teamMembers = [
    { name: "Dr. Michael Chen", role: "Registered Psychotherapist", image: "/team/member1.jpg" },
    { name: "James Wilson", role: "Registered Psychotherapist (Qualifying)", image: "/team/member2.jpg" },
    { name: "David Kumar", role: "Registered Social Worker", image: "/team/member3.jpg" },
    { name: "Robert Martinez", role: "Registered Psychotherapist", image: "/team/member4.jpg" },
    { name: "Thomas Anderson", role: "Clinical Psychologist", image: "/team/member5.jpg" },
    { name: "Christopher Lee", role: "Registered Psychotherapist", image: "/team/member6.jpg" },
  ];

  const specializations = [
    { name: "ADHD", link: "/adhd-support" },
    { name: "Anger Management", link: "/anger-management" },
    { name: "Anxiety", link: "/anxiety-support" },
    { name: "Dating & Relationships", link: "/relationship-therapy" },
    { name: "Depression", link: "/depression-support" },
    { name: "EMDR Therapy", link: "/emdr-therapy" },
    { name: "First Responders", link: "/first-responder-support" },
    { name: "Grief & Loss", link: "/grief-support" },
    { name: "Parenting & New Fathers", link: "/parenting-support" },
    { name: "Men's Issues", link: "/mens-issues" },
    { name: "Addiction Recovery", link: "/addiction-therapy" },
    { name: "Stress & Burnout", link: "/stress-burnout" },
    { name: "Performance Anxiety", link: "/performance-anxiety" },
    { name: "Trauma & PTSD", link: "/trauma-therapy" },
    { name: "Work-Life Balance", link: "/work-life-balance" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Overline text */}
            <p className="mb-6 text-sm font-medium tracking-wide text-slate-600 uppercase">
              RESOLVE MEN'S THERAPY
            </p>

            {/* Main headline - Much larger and more impactful */}
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance">
              Men's Mental Health Support{" "}
              <span className="text-therapeutic-primary">Across Ontario</span>
            </h1>

            {/* Subheading with better spacing */}
            <p className="mb-12 text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Supporting men through evidence-based therapy and professional guidance
            </p>

            {/* CTA buttons with consistent styling */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Link href="/book-consultation">
                <TherapyButton
                  variant="primary"
                  size="lg"
                  className="therapy-shadow-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </TherapyButton>
              </Link>
              <Link href="/contact">
                <TherapyButton
                  variant="outline"
                  size="lg"
                >
                  Request Information
                </TherapyButton>
              </Link>
            </div>
          </div>

          {/* Feature cards with better spacing */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-200 hover:therapy-shadow-lg">
              <div className="mb-3 text-2xl">🏥</div>
              <h3 className="mb-1 font-semibold text-slate-900">Services Available</h3>
              <p className="text-sm text-slate-600">Across Ontario</p>
            </div>
            <div className="rounded-xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-200 hover:therapy-shadow-lg">
              <div className="mb-3 text-2xl">👤</div>
              <h3 className="mb-1 font-semibold text-slate-900">Online & In-Person</h3>
              <p className="text-sm text-slate-600">Flexible Options</p>
            </div>
            <div className="rounded-xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-200 hover:therapy-shadow-lg">
              <div className="mb-3 text-2xl">🛡️</div>
              <h3 className="mb-1 font-semibold text-slate-900">Insurance Coverage</h3>
              <p className="text-sm text-slate-600">Direct Billing Available</p>
            </div>
            <div className="rounded-xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-200 hover:therapy-shadow-lg">
              <div className="mb-3 text-2xl">👥</div>
              <h3 className="mb-1 font-semibold text-slate-900">Expert Team</h3>
              <p className="text-sm text-slate-600">CRPO Registered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional States Section - Enhanced Design */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
              {/* Left column - Feelings checklist */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-slate-900 lg:text-4xl">
                  If you find yourself feeling...
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {emotionalStates.map((state, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                      <span className="text-slate-700">{state}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-lg bg-white p-6 therapy-shadow ring-1 ring-slate-200">
                  <p className="text-slate-600 leading-relaxed">
                    Men often wait until crisis to seek support.
                    Professional support is available when you're ready.
                  </p>
                </div>
              </div>

              {/* Right column - Support info */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                  We provide evidence-based support to help men:
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">Understand themselves and develop healthier coping strategies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">Build stronger relationships with partners, family, and friends</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">Process and heal from past experiences and trauma</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">Navigate life transitions and challenges with confidence</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/book-consultation">
                    <TherapyButton variant="primary" size="lg">
                      Start Your Journey Today
                    </TherapyButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - CRPO Compliant */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Professional Mental Health Support for Men
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We are CRPO registered psychotherapists providing evidence-based therapy services
              designed specifically for men's mental health needs across Ontario.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 lg:p-12 therapy-shadow ring-1 ring-emerald-100">
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-8 text-2xl font-bold text-slate-900 lg:text-3xl">
                Welcome — taking the first step requires courage
              </h3>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  Resolve Men's Therapy was founded on the belief that men deserve specialized,
                  understanding mental health support. Many men struggle with seeking help due to
                  societal expectations and stigma.
                </p>
                <p>
                  Our team of registered psychotherapists understands the unique challenges men face.
                  We provide a confidential, judgment-free space where you can explore your thoughts,
                  feelings, and experiences.
                </p>
                <p>
                  Whether you're dealing with anxiety, depression, relationship issues, or life transitions,
                  our evidence-based approach is tailored to help you develop practical strategies and
                  achieve meaningful change.
                </p>
                <p className="font-semibold text-emerald-700 text-lg">
                  Reaching out is a sign of strength, not weakness.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/about">
                  <TherapyButton variant="primary" size="lg">
                    Learn More About Our Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </TherapyButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - CRPO Compliant */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Why Choose Resolve Men's Therapy
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Our practice focuses on providing professional, evidence-based mental health support
              specifically designed for men's unique needs and experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <Brain className="mb-4 h-12 w-12 text-emerald-600" />
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Specialized Focus</h3>
              <p className="text-slate-600 leading-relaxed">
                We exclusively focus on men's mental health, with training and expertise
                in addressing men's specific psychological needs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <UserCheck className="mb-4 h-12 w-12 text-emerald-600" />
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Registered Professionals</h3>
              <p className="text-slate-600 leading-relaxed">
                Our team consists of CRPO registered psychotherapists committed to
                professional standards and ethical practice.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <Award className="mb-4 h-12 w-12 text-emerald-600" />
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Evidence-Based Methods</h3>
              <p className="text-slate-600 leading-relaxed">
                We utilize proven therapeutic approaches including CBT, DBT, EMDR,
                and trauma-informed care tailored to your needs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <Heart className="mb-4 h-12 w-12 text-emerald-600" />
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Flexible Options</h3>
              <p className="text-slate-600 leading-relaxed">
                Choose between in-person sessions in our offices or convenient
                virtual therapy sessions from anywhere in Ontario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Services - Enhanced Design */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Therapy Services
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Choose the approach that feels right for your healing journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl bg-white p-8 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg hover:ring-slate-300">
              <div className="mb-6 text-4xl">👤</div>

              <h3 className="mb-4 text-xl font-bold text-slate-900">
                Individual Therapy
              </h3>

              <p className="mb-6 text-slate-600 leading-relaxed">
                One-on-one sessions focused on your personal growth and healing
              </p>

              <ul className="mb-8 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Personalized approach
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Evidence-based methods
                </li>
              </ul>

              <Link href="/individual-therapy">
                <TherapyButton
                  variant="outline"
                  className="w-full group-hover:border-emerald-300 group-hover:text-emerald-700"
                >
                  Learn More
                </TherapyButton>
              </Link>
            </div>

            <div className="group rounded-2xl bg-white p-8 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg hover:ring-slate-300">
              <div className="mb-6 text-4xl">💕</div>

              <h3 className="mb-4 text-xl font-bold text-slate-900">
                Couples Therapy
              </h3>

              <p className="mb-6 text-slate-600 leading-relaxed">
                Strengthen your relationship with professional guidance
              </p>

              <ul className="mb-8 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Communication skills
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Conflict resolution
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Intimacy building
                </li>
              </ul>

              <Link href="/couples-therapy">
                <TherapyButton
                  variant="outline"
                  className="w-full group-hover:border-emerald-300 group-hover:text-emerald-700"
                >
                  Learn More
                </TherapyButton>
              </Link>
            </div>

            <div className="group rounded-2xl bg-white p-8 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg hover:ring-slate-300">
              <div className="mb-6 text-4xl">👥</div>

              <h3 className="mb-4 text-xl font-bold text-slate-900">
                Group Therapy
              </h3>

              <p className="mb-6 text-slate-600 leading-relaxed">
                Connect with other men facing similar challenges
              </p>

              <ul className="mb-8 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Peer support
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Shared experiences
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  Cost-effective
                </li>
              </ul>

              <Link href="/group-therapy">
                <TherapyButton
                  variant="outline"
                  className="w-full group-hover:border-emerald-300 group-hover:text-emerald-700"
                >
                  Learn More
                </TherapyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Support */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Areas of Support We Specialize In
            </h2>
            <p className="text-lg text-slate-600">Click to learn more about each area</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {specializations.map((spec, index) => (
              <Link key={index} href={spec.link}>
                <div className="group rounded-xl bg-white p-4 text-center therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg hover:-translate-y-1 cursor-pointer">
                  <p className="font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {spec.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Find a therapist that's right for you
            </h2>
            <p className="text-lg text-slate-600">
              Our team of registered professionals is here to support you
            </p>
          </div>

          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <div className="overflow-hidden rounded-2xl therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
                    <div className="h-64 bg-slate-100 flex items-center justify-center">
                      <UserCheck className="h-32 w-32 text-slate-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-slate-900">{member.name}</h3>
                      <p className="text-sm text-slate-600">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/team">
                <TherapyButton variant="primary" size="lg">
                  Meet Our Full Team
                </TherapyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Mail className="mx-auto mb-6 h-12 w-12 text-emerald-600" />
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Stay Connected
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Receive educational content about men's mental health and wellness
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <TherapyButton variant="primary">
                Subscribe
              </TherapyButton>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-600">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Take Your First Step Today
            </h2>
            <p className="mb-10 text-lg text-white/90 leading-relaxed">
              Whether it's your first time seeking therapy or you're looking for a new approach,
              we're here to support your journey. Taking the first step requires courage,
              and we're ready to walk alongside you.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/book-consultation">
                <TherapyButton size="lg" className="bg-white text-emerald-700 hover:bg-slate-100">
                  Book a Free Consultation
                </TherapyButton>
              </Link>
              <Link href="/contact">
                <TherapyButton size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ask Us a Question
                </TherapyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <MapPin className="mx-auto mb-6 h-12 w-12 text-emerald-600" />
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Our Locations
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We offer in-person sessions in Toronto, Ottawa, and surrounding areas,
              plus virtual services across Ontario.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Toronto Office</h3>
              <p className="mb-2 text-slate-600">Downtown Toronto Location</p>
              <p className="mb-6 text-sm text-slate-500">Available by appointment</p>
              <Link href="/contact">
                <TherapyButton variant="outline" className="w-full">
                  Get Directions
                </TherapyButton>
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Ottawa Office</h3>
              <p className="mb-2 text-slate-600">Central Ottawa Location</p>
              <p className="mb-6 text-sm text-slate-500">Available by appointment</p>
              <Link href="/contact">
                <TherapyButton variant="outline" className="w-full">
                  Get Directions
                </TherapyButton>
              </Link>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-white p-8 therapy-shadow ring-1 ring-slate-200">
            <div className="flex items-start space-x-4">
              <Laptop className="mt-1 h-6 w-6 text-emerald-600" />
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">Virtual Therapy Available</h3>
                <p className="text-slate-600 leading-relaxed">
                  Can't make it to our offices? We offer secure video therapy sessions
                  for clients anywhere in Ontario. Same professional support, from the
                  comfort of your own space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}