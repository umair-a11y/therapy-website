"use client";

import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Users, Award, AlertCircle, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const handleBooking = () => {
    window.open("https://resolve-mens-therapy.janeapp.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                <span className="text-therapeutic-primary">Resolve</span>
                <span className="text-gray-700 ml-2">Men's Therapy</span>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">About</Link>
              <Link href="/services" className="text-therapeutic-primary font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Comprehensive mental health support designed specifically for men, with evidence-based approaches and continuous engagement.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Individual Therapy */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-therapeutic-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Individual Therapy</h3>
              <p className="text-gray-600 text-center mb-6">
                One-on-one sessions designed specifically for men who want practical solutions, not just talk.
              </p>
              <Link href="/services/individual-therapy">
                <Button variant="outline" className="w-full border-therapeutic-primary text-therapeutic-primary hover:bg-therapeutic-primary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* ADHD Specialization */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-therapeutic-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-therapeutic-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">ADHD Therapy</h3>
              <p className="text-gray-600 text-center mb-6">
                Expert support for men with ADHD challenges - work, relationships, and life management.
              </p>
              <Link href="/services/adhd-therapy">
                <Button variant="outline" className="w-full border-therapeutic-secondary text-therapeutic-secondary hover:bg-therapeutic-secondary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Crisis Support */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Crisis Support</h3>
              <p className="text-gray-600 text-center mb-6">
                Immediate availability when possible and connection to government crisis resources.
              </p>
              <Link href="/services/crisis-support">
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Continuous Engagement */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-therapeutic-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-therapeutic-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Continuous Support</h3>
              <p className="text-gray-600 text-center mb-6">
                Support between sessions, progress tracking, and resources to keep you moving forward.
              </p>
              <Link href="/services/continuous-support">
                <Button variant="outline" className="w-full border-therapeutic-accent text-therapeutic-accent hover:bg-therapeutic-accent hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Mental Health Assessments</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Take our confidential assessments to better understand your mental health and get personalized recommendations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Depression Assessment */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mood Check-In</h3>
              <p className="text-gray-600 text-sm mb-4">PHQ-9 Depression Screening - 3-5 minutes</p>
              <Link href="/assessment/depression">
                <Button size="sm" className="w-full bg-therapeutic-primary hover:bg-therapeutic-primary/90 text-white">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Take Assessment
                </Button>
              </Link>
            </div>

            {/* Anxiety Assessment */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Anxiety Check-In</h3>
              <p className="text-gray-600 text-sm mb-4">GAD-7 Anxiety Screening - 2-3 minutes</p>
              <Link href="/assessment/anxiety">
                <Button size="sm" className="w-full bg-therapeutic-secondary hover:bg-therapeutic-secondary/90 text-white">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Take Assessment
                </Button>
              </Link>
            </div>

            {/* ADHD Assessment */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">ADHD Check-In</h3>
              <p className="text-gray-600 text-sm mb-4">ASRS Focus Assessment - 5-7 minutes</p>
              <Link href="/assessment/adhd">
                <Button size="sm" className="w-full bg-therapeutic-accent hover:bg-therapeutic-accent/90 text-white">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Take Assessment
                </Button>
              </Link>
            </div>

            {/* Stress Assessment */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Stress Check-In</h3>
              <p className="text-gray-600 text-sm mb-4">Stress Load Assessment - 3-4 minutes</p>
              <Link href="/assessment/stress">
                <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Take Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-therapeutic-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600 text-sm">15-minute discussion of your needs and goals</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-therapeutic-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Understanding your challenges and creating a personalized plan</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-therapeutic-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Treatment Planning</h3>
              <p className="text-gray-600 text-sm">Customized approach for your specific situation</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Continuous engagement between sessions</p>
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
                  <span>Most extended health insurance plans cover our services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mr-3 mt-0.5" />
                  <span>Detailed receipts provided for insurance reimbursement</span>
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
              Book Free Consultation
            </Button>
            <Link href="/assessment/depression">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-therapeutic-primary px-8 py-4 text-lg font-semibold"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Take Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                <span className="text-therapeutic-accent">Resolve</span>
                <span className="text-gray-300 ml-2">Men's Therapy</span>
              </div>
              <p className="text-gray-300">
                Evidence-based therapy for men with systematic progress tracking and continuous support.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/services/individual-therapy" className="hover:text-therapeutic-accent transition-colors">Individual Therapy</Link></li>
                <li><Link href="/services/adhd-therapy" className="hover:text-therapeutic-accent transition-colors">ADHD Therapy</Link></li>
                <li><Link href="/services/crisis-support" className="hover:text-therapeutic-accent transition-colors">Crisis Support</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Assessments</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/assessment/depression" className="hover:text-therapeutic-accent transition-colors">Mood Check-In</Link></li>
                <li><Link href="/assessment/anxiety" className="hover:text-therapeutic-accent transition-colors">Anxiety Check-In</Link></li>
                <li><Link href="/assessment/adhd" className="hover:text-therapeutic-accent transition-colors">ADHD Check-In</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Resolve Men's Therapy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}