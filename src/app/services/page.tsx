"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Award, AlertCircle, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/site-config";

export default function ServicesPage() {
  const handleBooking = () => {
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Tools for the path forward.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We provide practical, evidence-based therapy for men facing common but difficult challenges. Each service is tailored to your specific goals, with our signature focus on systems, self-assessment, and clear progress reviews.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Services Tailored for Men</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Anger Management */}
            <Link href="/anger-management">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer h-full">
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Anger Management</h3>
                <p className="text-gray-600 text-center mb-4">
                  Move from reaction to response.
                </p>
                <span className="text-therapeutic-primary font-medium flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Anxiety & Stress */}
            <Link href="/anxiety-support">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer h-full">
                <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Anxiety & Stress</h3>
                <p className="text-gray-600 text-center mb-4">
                  Quiet the noise and regain control.
                </p>
                <span className="text-therapeutic-primary font-medium flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Burnout & Overload */}
            <Link href="/stress-burnout">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer h-full">
                <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Burnout & Overload</h3>
                <p className="text-gray-600 text-center mb-4">
                  Rebuild your energy and set boundaries.
                </p>
                <span className="text-therapeutic-primary font-medium flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* ADHD & Focus */}
            <Link href="/adhd-support">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer h-full">
                <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">ADHD & Focus</h3>
                <p className="text-gray-600 text-center mb-4">
                  Create systems that work with your brain.
                </p>
                <span className="text-therapeutic-primary font-medium flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Relationships & Connection */}
            {/* Depression & Low Mood */}
            <Link href="/depression-support">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer h-full">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Depression & Low Mood</h3>
                <p className="text-gray-600 text-center mb-4">
                  Find the motivation to move forward again.
                </p>
                <span className="text-therapeutic-primary font-medium flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialized Support Tracks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Specialized Support Tracks</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Focused programs built for specific seasons of life. Each path blends practical skills with supportive accountability so you are never working alone.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/mens-issues">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Men's Issues Therapy</h3>
                <p className="text-gray-600 mb-4">Identity, purpose, and relationships through a men's mental health lens.</p>
                <span className="text-therapeutic-primary font-medium flex items-center">Explore Track<ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
            <Link href="/for-partners">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Support for Partners</h3>
                <p className="text-gray-600 mb-4">Guidance for loved ones supporting someone through change or recovery.</p>
                <span className="text-therapeutic-primary font-medium flex items-center">Explore Track<ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
            <Link href="/performance-anxiety">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Anxiety</h3>
                <p className="text-gray-600 mb-4">Build calm confidence for presentations, athletics, and high-stakes moments.</p>
                <span className="text-therapeutic-primary font-medium flex items-center">Explore Track<ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
            <Link href="/work-life-balance">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Work-Life Balance Reset</h3>
                <p className="text-gray-600 mb-4">Rebuild sustainable rhythms that protect your health, family, and career.</p>
                <span className="text-therapeutic-primary font-medium flex items-center">Explore Track<ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
            <Link href="/parenting-support">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Parenting Support for Dads</h3>
                <p className="text-gray-600 mb-4">Tools for nurturing connection with your kids while leading with patience.</p>
                <span className="text-therapeutic-primary font-medium flex items-center">Explore Track<ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
            <Link href="/grief-support">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Grief & Loss Support</h3>
                <p className="text-gray-600 mb-4">Compassionate space to process loss and find steadier ground.</p>
                <span className="text-therapeutic-primary font-medium flex items-center">Explore Track<ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
            <Link href="/first-responder-support">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">First Responder Support</h3>
                <p className="text-gray-600 mb-4">Trauma-informed support for police, fire, EMS, and frontline professionals.</p>
                <span className="text-therapeutic-primary font-medium flex items-center">Explore Track<ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
            <Link href="/emdr-therapy">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">EMDR Therapy</h3>
                <p className="text-gray-600 mb-4">Evidence-based trauma processing to reduce stuck memories and body responses.</p>
                <span className="text-therapeutic-primary font-medium flex items-center">Explore Track<ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Care Wherever You Are */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Care Wherever You Are</h2>
          <p className="text-gray-600 mb-8">We provide secure virtual therapy across Ontario, with focused regional hubs so you can get connected quickly.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/toronto">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Toronto (GTA)</h3>
                <p className="text-gray-600">Virtual-first with limited in-person intensives. Evening availability for busy professionals.</p>
                <span className="text-therapeutic-primary font-medium flex items-center justify-center mt-4">View Toronto Support<ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
            <Link href="/ottawa">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ottawa + Eastern Ontario</h3>
                <p className="text-gray-600">Dedicated team for military, public service, and bilingual households.</p>
                <span className="text-therapeutic-primary font-medium flex items-center justify-center mt-4">View Ottawa Support<ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Self-Assessment Callout Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Find Your Starting Point</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Not sure where to begin? Take a free, confidential self-assessment to get a snapshot of your mental health in just 90 seconds.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mood Snapshot */}
            <Link href="/self-check/depression">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Mood Snapshot</h3>
                <p className="text-gray-600 text-sm mb-4">Quick depression check - 90 seconds</p>
                <span className="text-therapeutic-primary font-medium flex items-center">
                  Take Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Anxiety Check */}
            <Link href="/self-check/anxiety">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Anxiety Check</h3>
                <p className="text-gray-600 text-sm mb-4">Quick anxiety screening - 90 seconds</p>
                <span className="text-therapeutic-secondary font-medium flex items-center">
                  Take Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Focus & Habits */}
            <Link href="/self-check/adhd">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Focus & Habits</h3>
                <p className="text-gray-600 text-sm mb-4">ADHD screening - 90 seconds</p>
                <span className="text-therapeutic-accent font-medium flex items-center">
                  Take Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Stress Load & Recovery */}
            <Link href="/self-check/stress">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Stress Load & Recovery</h3>
                <p className="text-gray-600 text-sm mb-4">Stress assessment - 90 seconds</p>
                <span className="text-orange-500 font-medium flex items-center">
                  Take Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Your Path Forward in 4 Steps</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-therapeutic-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Book</h3>
              <p className="text-gray-600 text-sm">Schedule a free, 30-minute consultation to see if we're the right fit. No pressure, no obligation.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-therapeutic-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Plan</h3>
              <p className="text-gray-600 text-sm">In our first session, we'll map out your goals and build a clear, practical plan to get you there.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-therapeutic-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Work</h3>
              <p className="text-gray-600 text-sm">Engage in weekly sessions focused on building skills and making targeted changes. Use Self-Assessments to track progress.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Review</h3>
              <p className="text-gray-600 text-sm">At weeks 4–6, we'll review what's working and fine-tune our approach so you continue to move forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Making Therapy Accessible</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Insurance Coverage</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mr-3 mt-0.5" />
                  <span>Therapy with a Registered Psychotherapist is covered by many extended health benefits plans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mr-3 mt-0.5" />
                  <span>We provide receipts for reimbursement. We do not offer direct billing.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mr-3 mt-0.5" />
                  <span>Insurance guidance and support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Options</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mr-3 mt-0.5" />
                  <span>Sliding scale options for financial hardship</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mr-3 mt-0.5" />
                  <span>Flexible payment plans available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mr-3 mt-0.5" />
                  <span>Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-therapeutic-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step toward better mental health. Book your free consultation or start with an assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-therapeutic-primary hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              onClick={handleBooking}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a 30-minute consult
            </Button>
            <Link href="/self-check">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-therapeutic-primary px-8 py-4 text-lg font-semibold"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Take a free Self-Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
