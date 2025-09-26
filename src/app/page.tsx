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
import { HeroWithImage } from "@/components/sections/hero-with-image";
import { THERAPY_IMAGES, getUnsplashImage } from "@/lib/therapy-images";
import { BOOKING_URL } from "@/lib/site-config";
import Image from "next/image";

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
      {/* Hero Section with Image */}
      <HeroWithImage
        title="Tired of feeling stuck?"
        subtitle="Resolve Men's Therapy"
        description="Therapy that gives you a plan, not just a place to talk. We use a clear, system-based approach to help you navigate anger, anxiety, and burnout. Practical online therapy for men across Ontario."
        imageUrl={THERAPY_IMAGES.hero.main}
        imageAlt="Professional men's therapy and mental health support"
        primaryButtonText="Book a 30-minute consult"
        primaryButtonHref={BOOKING_URL}
        secondaryButtonText="Take a free Self-Assessment"
        secondaryButtonHref="/self-check"
        height="large"
        overlayOpacity={0.4}
      />

      {/* Feature cards section */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Feature cards with better spacing */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-200 hover:therapy-shadow-lg">
              <div className="mb-3 text-2xl">🏥</div>
              <h3 className="mb-1 font-semibold text-slate-900">Services Available</h3>
              <p className="text-sm text-slate-600">Across Ontario</p>
            </div>
            <div className="rounded-xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-200 hover:therapy-shadow-lg">
              <div className="mb-3 text-2xl">👤</div>
              <h3 className="mb-1 font-semibold text-slate-900">Systems Thinking</h3>
              <p className="text-sm text-slate-600">Find small levers for big impact</p>
            </div>
            <div className="rounded-xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-200 hover:therapy-shadow-lg">
              <div className="mb-3 text-2xl">🛡️</div>
              <h3 className="mb-1 font-semibold text-slate-900">See Your Progress</h3>
              <p className="text-sm text-slate-600">Regular Self-Assessments give us data</p>
            </div>
            <div className="rounded-xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-200 hover:therapy-shadow-lg">
              <div className="mb-3 text-2xl">👥</div>
              <h3 className="mb-1 font-semibold text-slate-900">The 4-6 Week Review</h3>
              <p className="text-sm text-slate-600">Formal check-in to ensure progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Different Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-3xl font-bold text-slate-900 lg:text-4xl text-center">
              A different approach. Clear results.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-8 rounded-xl therapy-shadow ring-1 ring-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Systems Thinking</h3>
                <p className="text-slate-600 leading-relaxed">
                  We look at the whole picture—your work, your relationships, your habits—to find the small levers that create the biggest impact. No endless talking without a goal.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl therapy-shadow ring-1 ring-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">See Your Progress</h3>
                <p className="text-slate-600 leading-relaxed">
                  Regular Self-Assessments give us data, not just feelings. We measure what's working so you know you're making real, tangible progress.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl therapy-shadow ring-1 ring-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">The 4–6 Week Review</h3>
                <p className="text-slate-600 leading-relaxed">
                  We formally check in early on. We review your progress against your goals and adjust the plan to make sure your investment is paying off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Brings Men Here Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-slate-900 lg:text-4xl text-center">
              If this sounds familiar, you're in the right place.
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-therapeutic-primary flex-shrink-0"></div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  You're running on empty, and the smallest thing can set you off.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-therapeutic-primary flex-shrink-0"></div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Anxiety hits you in the middle of the night with a looping list of worries.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-therapeutic-primary flex-shrink-0"></div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  You feel distant from your partner or kids, but don't know how to close the gap.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-therapeutic-primary flex-shrink-0"></div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  You're successful at work but feel like you're failing everywhere else.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-therapeutic-primary flex-shrink-0"></div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The old way of just "handling it" isn't working anymore.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/services">
                <TherapyButton variant="secondary" size="lg">
                  See how we can help
                  <ArrowRight className="ml-2 h-4 w-4" />
                </TherapyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-therapeutic-primary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-3xl font-bold text-slate-900 lg:text-4xl text-center">
              Your Path Forward in 4 Steps
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-xl therapy-shadow ring-1 ring-slate-200">
                <div className="text-3xl font-bold text-therapeutic-primary mb-4">1</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Book</h3>
                <p className="text-slate-600 leading-relaxed">
                  Schedule a free, 30-minute consultation to see if we're the right fit. No pressure, no obligation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl therapy-shadow ring-1 ring-slate-200">
                <div className="text-3xl font-bold text-therapeutic-primary mb-4">2</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Plan</h3>
                <p className="text-slate-600 leading-relaxed">
                  In our first session, we'll map out your goals and build a clear, practical plan to get you there.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl therapy-shadow ring-1 ring-slate-200">
                <div className="text-3xl font-bold text-therapeutic-primary mb-4">3</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Work</h3>
                <p className="text-slate-600 leading-relaxed">
                  Engage in weekly sessions focused on building skills and making targeted changes. Use Self-Assessments to track your progress.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl therapy-shadow ring-1 ring-slate-200">
                <div className="text-3xl font-bold text-therapeutic-primary mb-4">4</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Review</h3>
                <p className="text-slate-600 leading-relaxed">
                  At weeks 4–6, we'll review what's working and fine-tune our approach so you continue to move forward.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <TherapyButton variant="primary" size="lg">
                  Book a 30-minute consult
                  <ArrowRight className="ml-2 h-4 w-4" />
                </TherapyButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Who We Help
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our therapy services are designed for men who are ready to take control of their mental health and make positive changes in their lives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Working Professionals */}
            <div className="bg-white p-6 rounded-xl therapy-shadow ring-1 ring-slate-200">
              <div className="w-12 h-12 bg-therapeutic-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">💼</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Working Professionals</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Managing work stress, career transitions, burnout, and work-life balance challenges.
              </p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• High-stress careers</li>
                <li>• Leadership challenges</li>
                <li>• Career transitions</li>
              </ul>
            </div>

            {/* Relationship Challenges */}
            <div className="bg-white p-6 rounded-xl therapy-shadow ring-1 ring-slate-200">
              <div className="w-12 h-12 bg-therapeutic-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">💕</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Relationship Issues</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Improving communication, resolving conflicts, and strengthening intimate relationships.
              </p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Communication difficulties</li>
                <li>• Intimacy concerns</li>
                <li>• Separation/divorce</li>
              </ul>
            </div>

            {/* Life Transitions */}
            <div className="bg-white p-6 rounded-xl therapy-shadow ring-1 ring-slate-200">
              <div className="w-12 h-12 bg-therapeutic-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">🔄</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Life Transitions</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Navigating major life changes, new responsibilities, and identity shifts.
              </p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Becoming a father</li>
                <li>• Career changes</li>
                <li>• Life restructuring</li>
              </ul>
            </div>

            {/* Mental Health Concerns */}
            <div className="bg-white p-6 rounded-xl therapy-shadow ring-1 ring-slate-200">
              <div className="w-12 h-12 bg-therapeutic-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">🧠</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mental Health</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Managing anxiety, depression, ADHD, and other mental health challenges.
              </p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Anxiety & depression</li>
                <li>• ADHD support</li>
                <li>• Anger management</li>
              </ul>
            </div>

            {/* Trauma & Recovery */}
            <div className="bg-white p-6 rounded-xl therapy-shadow ring-1 ring-slate-200">
              <div className="w-12 h-12 bg-therapeutic-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">🛡️</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trauma & Recovery</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Processing past experiences, PTSD, and building resilience and coping strategies.
              </p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Childhood trauma</li>
                <li>• PTSD support</li>
                <li>• Addiction recovery</li>
              </ul>
            </div>

            {/* Personal Growth */}
            <div className="bg-white p-6 rounded-xl therapy-shadow ring-1 ring-slate-200">
              <div className="w-12 h-12 bg-therapeutic-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">📈</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personal Growth</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Building self-awareness, confidence, and developing healthier life patterns.
              </p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Self-confidence</li>
                <li>• Emotional regulation</li>
                <li>• Goal achievement</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Whether you're dealing with specific challenges or simply want to improve your overall well-being,
              our approach is tailored to meet you where you are in your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <TherapyButton size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a 30-minute consult
                </TherapyButton>
              </a>
              <Link href="/self-check">
                <TherapyButton size="lg" variant="outline" className="border-therapeutic-primary text-therapeutic-primary hover:bg-therapeutic-primary/5">
                  Take a free Self-Assessment
                </TherapyButton>
              </Link>
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

          <div className="bg-therapeutic-primary/5 rounded-2xl p-8 lg:p-12 therapy-shadow ring-1">
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
                <p className="font-semibold text-therapeutic-primary text-lg">
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
              What You Can Expect
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              When you work with us, you get more than just therapy sessions. You get a partnership focused on helping you achieve real, lasting change in your life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <Brain className="mb-4 h-12 w-12 text-therapeutic-primary" />
              <h3 className="mb-3 text-xl font-semibold text-slate-900">You Feel Understood</h3>
              <p className="text-slate-600 leading-relaxed">
                Finally work with someone who truly gets what you're going through as a man.
                No judgment, just genuine understanding and support.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <UserCheck className="mb-4 h-12 w-12 text-therapeutic-primary" />
              <h3 className="mb-3 text-xl font-semibold text-slate-900">You Can Trust the Process</h3>
              <p className="text-slate-600 leading-relaxed">
                Rest assured you're getting professional, ethical care from CRPO registered
                therapists who maintain the highest standards.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <Award className="mb-4 h-12 w-12 text-therapeutic-primary" />
              <h3 className="mb-3 text-xl font-semibold text-slate-900">You See Real Progress</h3>
              <p className="text-slate-600 leading-relaxed">
                Experience meaningful change through proven methods like CBT, DBT, and EMDR
                that are tailored specifically to your goals and needs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <Heart className="mb-4 h-12 w-12 text-therapeutic-primary" />
              <h3 className="mb-3 text-xl font-semibold text-slate-900">You Get Convenience</h3>
              <p className="text-slate-600 leading-relaxed">
                Receive support on your terms with secure virtual sessions from anywhere in Ontario.
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
                  <div className="h-1.5 w-1.5 rounded-full bg-therapeutic-primary/50"></div>
                  Personalized approach
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-therapeutic-primary/50"></div>
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-therapeutic-primary/50"></div>
                  Evidence-based methods
                </li>
              </ul>

              <Link href="/individual-therapy">
                <TherapyButton
                  variant="outline"
                  className="w-full group-hover:border-therapeutic-primary group-hover:text-therapeutic-primary"
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
                  <div className="h-1.5 w-1.5 rounded-full bg-therapeutic-primary/50"></div>
                  Communication skills
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-therapeutic-primary/50"></div>
                  Conflict resolution
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-therapeutic-primary/50"></div>
                  Intimacy building
                </li>
              </ul>

              <Link href="/couples-therapy">
                <TherapyButton
                  variant="outline"
                  className="w-full group-hover:border-therapeutic-primary group-hover:text-therapeutic-primary"
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
                  <div className="h-1.5 w-1.5 rounded-full bg-therapeutic-primary/50"></div>
                  Peer support
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-therapeutic-primary/50"></div>
                  Shared experiences
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-therapeutic-primary/50"></div>
                  Cost-effective
                </li>
              </ul>

              <Link href="/group-therapy">
                <TherapyButton
                  variant="outline"
                  className="w-full group-hover:border-therapeutic-primary group-hover:text-therapeutic-primary"
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
                  <p className="font-medium text-slate-900 group-hover:text-therapeutic-primary transition-colors">
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
            <Mail className="mx-auto mb-6 h-12 w-12 text-therapeutic-primary" />
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
      <section className="py-20 therapeutic-gradient">
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
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <TherapyButton size="lg" className="bg-white text-therapeutic-primary hover:bg-slate-100">
                  Book a 30-minute consult
                </TherapyButton>
              </a>
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
            <MapPin className="mx-auto mb-6 h-12 w-12 text-therapeutic-primary" />
            <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
              Our Locations
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We provide virtual therapy across Ontario, including Toronto and Ottawa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Toronto (Virtual)</h3>
              <p className="mb-2 text-slate-600">Downtown Toronto Location</p>
              <p className="mb-6 text-sm text-slate-500">Available by appointment</p>
              <Link href="/contact">
                <TherapyButton variant="outline" className="w-full">
                  Contact Us
                </TherapyButton>
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-6 therapy-shadow ring-1 ring-slate-200 transition-all duration-300 hover:therapy-shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Ottawa (Virtual)</h3>
              <p className="mb-2 text-slate-600">Central Ottawa Location</p>
              <p className="mb-6 text-sm text-slate-500">Available by appointment</p>
              <Link href="/contact">
                <TherapyButton variant="outline" className="w-full">
                  Contact Us
                </TherapyButton>
              </Link>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-white p-8 therapy-shadow ring-1 ring-slate-200">
            <div className="flex items-start space-x-4">
              <Laptop className="mt-1 h-6 w-6 text-therapeutic-primary" />
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">Virtual Therapy Available</h3>
                <p className="text-slate-600 leading-relaxed">
                  Prefer to meet from home? We offer secure video therapy sessions
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
