"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Target, CheckCircle, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { customProfessionalServiceJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/seo";

export default function IndividualTherapyPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={customProfessionalServiceJsonLd({ serviceType: "Individual Therapy for Men", url: `${SITE_URL}/individual-therapy` })} />
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
              <Link href="/services" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Individual Therapy for Men</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confidential, one-on-one therapy sessions focused on your specific goals. We provide a straightforward, evidence-based approach to help you navigate challenges and build a more resilient life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="#assessments">
              <Button size="lg" variant="outline">
                Try a Quick Check-In
              </Button>
            </Link>
          </div>
        </div>

        {/* Is Individual Therapy Right for You */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Is Individual Therapy Right for You?</CardTitle>
            <p className="text-gray-600">It's a fit if you're looking for a personalized, private, and focused approach to growth.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">You Want a Personalized Plan</h4>
                <p className="text-gray-700">A therapeutic approach tailored directly to your unique situation.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Privacy is a Priority</h4>
                <p className="text-gray-700">A completely confidential space to discuss sensitive topics.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">You're Ready for Focused Work</h4>
                <p className="text-gray-700">The full attention of a therapist to dive deep and make efficient progress.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">You Need Practical Skills</h4>
                <p className="text-gray-700">Concrete, evidence-based tools you can apply in your daily life.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-6 w-6 text-therapeutic-primary mr-3" />
              Our Collaborative & Goal-Oriented Process
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Intake & Goal Setting</h4>
                <p className="text-gray-700">We collaboratively set clear, measurable goals for our work together.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Evidence-Based Skill Building</h4>
                <p className="text-gray-700">We use proven models like CBT, ACT, and DBT to help you learn practical skills.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Active Practice & Feedback</h4>
                <p className="text-gray-700">We'll often agree on practical exercises to try between appointments.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Progress Review & Adjustment</h4>
                <p className="text-gray-700">We regularly check in on your progress toward your goals.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Not Sure Where to Start */}
        <Card className="mb-8" id="assessments">
          <CardHeader>
            <CardTitle>Not Sure Where to Start?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Our confidential Check-Ins can provide a snapshot of what you're experiencing and help clarify what you might want to focus on.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/assessment/depression">
                <Button variant="outline" className="w-full">
                  Depression Check-In
                </Button>
              </Link>
              <Link href="/assessment/anxiety">
                <Button variant="outline" className="w-full">
                  Anxiety Check-In
                </Button>
              </Link>
              <Link href="/assessment/stress">
                <Button variant="outline" className="w-full">
                  Stress Check-In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions about Individual Therapy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: How long does therapy usually take?</h4>
              <p className="text-gray-700">A: The duration varies. Some men need a few sessions for a specific goal, while others engage in longer-term therapy.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: What if I don't know what to talk about?</h4>
              <p className="text-gray-700">A: That's normal. It's our job to help guide the conversation, often by checking in on your week and progress.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: How is your approach different for men?</h4>
              <p className="text-gray-700">A: We tailor our approach to be more goal-oriented, practical, and skills-based, which often resonates well with men.</p>
            </div>
          </CardContent>
        </Card>

        {/* Investment Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>An Investment in Yourself</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Individual therapy is a powerful tool for personal and professional growth. Your free, 30-minute consultation is a confidential, no-pressure opportunity to see if we're the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-consultation">
                <Button className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Your Free Consultation
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline">
                  View Pricing & Fees
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-700 mb-6">
              Take the first step toward personal growth and better mental health. Our individual therapy sessions are designed to give you practical tools and continuous support.
            </p>
            <Link href="/book-consultation">
              <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                <MessageSquare className="mr-2 h-5 w-5" />
                Schedule Your Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-therapeutic-accent">Resolve</span>
            <span className="text-gray-300 ml-2">Men's Therapy</span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Resolve Men's Therapy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
