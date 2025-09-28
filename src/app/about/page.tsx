"use client";

import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield, Award, Heart, Brain, Users, CheckCircle,
  Calendar, ArrowRight, Target, BookOpen, Lightbulb
} from "lucide-react";
import Link from "next/link";
import { HeroWithImage } from "@/components/sections/hero-with-image";
import { THERAPY_IMAGES } from "@/lib/therapy-images";
import { BOOKING_URL } from "@/lib/site-config";
import Image from "next/image";
import { getUnsplashImage } from "@/lib/therapy-images";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Your privacy is our priority. All sessions are completely confidential and judgment-free."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every client with empathy, understanding, and genuine care for their wellbeing."
    },
    {
      icon: Brain,
      title: "Evidence-Based",
      description: "Our methods are grounded in scientific research and proven therapeutic techniques."
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Your unique needs and goals guide our therapeutic approach and treatment planning."
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Image */}
      <HeroWithImage
        title="Stop treating the symptoms. Start fixing the system."
        subtitle="Our Approach"
        description="We use systems thinking and measurement-based care. Learn how our practical, structured approach to men's therapy delivers clear results."
        imageUrl={THERAPY_IMAGES.hero.about}
        imageAlt="Professional therapy consultation"
        primaryButtonText="Book a 30-minute consult"
        primaryButtonHref={BOOKING_URL}
        secondaryButtonText="Our Services"
        secondaryButtonHref="/services"
        height="medium"
      />

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                An Engineer's Mindset for Therapy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  You've been white-knuckling it for a long time. Pushing through the burnout, managing the anger, containing the anxiety. But that constant effort is exhausting, and it's not solving the underlying problem.
                </p>
                <p>
                  At Resolve, we believe burnout, anger, and anxiety aren't just random feelings. They are symptoms of a system under too much strain. Your work demands, family life, sleep patterns, and internal pressures are all connected. Our job is to help you see the whole map.
                </p>
                <p>
                  We use an engineer's mindset to find the small levers that create the biggest shifts. Instead of just talking about the problem, we identify the feedback loops that keep you stuck and build practical strategies to break them.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={getUnsplashImage(THERAPY_IMAGES.services.individualTherapy, { w: 600, h: 400 })}
                alt="Professional therapy session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Men's Mental Health Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={getUnsplashImage(THERAPY_IMAGES.services.mensIssues, { w: 600, h: 400 })}
                alt="Men's mental health support"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How Self-Assessments Steer Your Care
              </h3>
              <ul className="space-y-3">
                <p className="text-gray-700 mb-4">
                  We use simple, confidential check-ins to track your progress with real data. These on-device tools help us see what's improving—like sleep quality or focus—and where to adjust our plan.
                </p>
                <p className="text-gray-700 mb-4">
                  It ensures your therapy is always targeted, efficient, and moving in the right direction.
                </p>
                <p className="text-gray-700 font-semibold">
                  Therapy here is not a place to drift. It's a workshop to build a more resilient, intentional life.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From Engineer to Therapist
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  For over a decade, I designed complex systems as an engineer. My job was to find the single point of failure that could bring everything crashing down. I learned to see the world in feedback loops, inputs, and outputs—a way of thinking that values clarity and tangible results.
                </p>
                <p>
                  But in my own life, and in the lives of the men around me, I saw a different kind of system failure. Good men—smart, capable, and driven—were burning out, shutting down, or blowing up. They were trying to solve problems of the heart with brute force, and it was breaking them.
                </p>
                <p>
                  I realized the tools I used to diagnose system failures in engineering were missing from the world of mental health. The desire for a clear plan, for measurable progress, and for practical, no-bullshit solutions wasn't being met.
                </p>
                <p>
                  So I went back to school and became a therapist.
                </p>
                <p>
                  I founded Resolve Men's Therapy to bridge that gap. This practice combines evidence-based therapeutic models like CBT, ACT, and IFS with the practical, systematic approach I honed as an engineer. We find the root cause, build a plan, and execute it.
                </p>
                <p className="font-semibold text-therapeutic-primary">
                  My goal is to help you get unstuck. If you're ready for a practical, focused approach to therapy, let's talk.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Credentials & Specializations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">CRPO Registered Psychotherapist (Qualifying)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">ADHD Specialist with Advanced Training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Crisis Support Available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Professional Liability Insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Ongoing Supervision and Quality Assurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Evidence-Based Training and Methods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and how we support our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-therapeutic-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Unique Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach emphasizes continuous engagement, providing support between sessions to keep you moving forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-therapeutic-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Engagement</h3>
              <p className="text-gray-600">
                Regular check-ins, progress tracking, and support between sessions to keep you moving forward.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-therapeutic-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-therapeutic-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Male-Specific Approach</h3>
              <p className="text-gray-600">
                Therapy designed for how men think and communicate, with practical solutions that work in real life.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-therapeutic-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-therapeutic-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ADHD Expertise</h3>
              <p className="text-gray-600">
                Specialized support for men with ADHD challenges, understanding the unique ways ADHD affects work, relationships, and daily life.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crisis Readiness</h3>
              <p className="text-gray-600">
                Immediate support when you need it most, with same-day consultations and 24/7 crisis resources.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-therapeutic-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Integration</h3>
              <p className="text-gray-600">
                Seamless communication, progress tracking, and access to resources whenever you need them.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-therapeutic-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-therapeutic-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based Methods</h3>
              <p className="text-gray-600">
                Proven therapeutic techniques combined with innovative approaches specifically designed for men's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What to Expect
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <Target className="h-10 w-10 text-therapeutic-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Initial Consultation</h3>
              <p className="text-gray-600 mb-4">
                Your first session is about understanding your needs and goals.
                We'll discuss what brings you to therapy and develop a plan together.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>30-minute free consultation available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>No commitment required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Discuss your concerns privately</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <BookOpen className="h-10 w-10 text-therapeutic-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Regular Sessions</h3>
              <p className="text-gray-600 mb-4">
                Sessions typically last 50 minutes and occur weekly or bi-weekly,
                depending on your needs and preferences.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Secure virtual sessions across Ontario</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Consistent therapeutic support</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <Lightbulb className="h-10 w-10 text-therapeutic-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Your Journey</h3>
              <p className="text-gray-600 mb-4">
                Therapy is a collaborative process. You'll develop insights,
                learn new skills, and work toward your personal goals.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Progress at your own pace</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Practical tools and strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Ongoing support and guidance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8 lg:p-12">
            <div className="text-center mb-8">
              <Award className="h-16 w-16 text-therapeutic-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Professional Standards & Ethics
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
              <p>
                All our therapists are registered with the College of Registered
                Psychotherapists of Ontario (CRPO) or are qualifying members working
                under supervision. This ensures you receive professional, ethical,
                and competent care.
              </p>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Our Commitment to You:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Adherence to CRPO professional standards and code of ethics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Ongoing professional development and training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Regular supervision and peer consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Evidence-based practices and interventions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Complete confidentiality within legal requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-therapeutic-primary to-therapeutic-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to support you on your journey toward better mental health and wellbeing.
            Book a free consultation to see how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-therapeutic-primary hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Book a 30-minute consult
              </Button>
            </a>
            <Link href="/team">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

