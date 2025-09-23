"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    question: "How is your approach different from traditional therapy?",
    answer: "We provide continuous support between sessions, not just during scheduled appointments. This keeps you engaged and moving forward every day. Our approach is designed specifically for men, focusing on practical solutions and goal-oriented strategies."
  },
  {
    question: "Do you accept insurance?",
    answer: "Most extended health insurance plans cover our services. We provide detailed receipts that you can submit to your insurance provider for reimbursement. We also have sliding scale options for those in need."
  },
  {
    question: "How does insurance reimbursement work?",
    answer: "After each session, you'll receive a detailed receipt with all necessary information. You submit this to your insurance provider for reimbursement according to your plan's benefits. We'll help you understand your coverage and the claims process."
  },
  {
    question: "How quickly can I get an appointment?",
    answer: "We offer same-day consultations for crisis situations and flexible scheduling for regular appointments. Our free 15-minute consultation is typically available within 1-2 business days."
  },
  {
    question: "Is online therapy as effective as in-person?",
    answer: "Yes, research shows online therapy is just as effective as in-person therapy, with the added benefit of convenience and accessibility. Our secure platform ensures your privacy and comfort."
  },
  {
    question: "What if I'm not sure if therapy is right for me?",
    answer: "That's why we offer a free 15-minute consultation - no obligation, just a chance to see if we're the right fit. This allows you to ask questions and understand our approach before making any commitment."
  },
  {
    question: "What if my insurance doesn't cover therapy?",
    answer: "We offer sliding scale rates for clients with financial need, ensuring therapy remains accessible regardless of insurance coverage. We believe everyone deserves access to quality mental health care."
  },
  {
    question: "How long does therapy usually take?",
    answer: "The duration varies based on your goals and needs. Some men need a few sessions for specific goals, while others engage in longer-term therapy. We regularly review progress and adjust our approach as needed."
  },
  {
    question: "What if I don't know what to talk about?",
    answer: "That's completely normal and we'll help guide the conversation. We often start by checking in on your week, reviewing progress toward your goals, and discussing any challenges or successes you've experienced."
  },
  {
    question: "How is your approach different for men?",
    answer: "We tailor our approach to be more goal-oriented, practical, and skills-based, which often resonates well with men. We understand male communication styles and focus on actionable strategies rather than just talking."
  },
  {
    question: "Is everything I say confidential?",
    answer: "Yes, everything you discuss in therapy is strictly confidential and protected by law. We only share information in rare circumstances: when required by law, to protect your safety or others' safety, or with your written consent."
  },
  {
    question: "What should I expect in my first session?",
    answer: "The first session is an assessment where we'll discuss your goals, challenges, and background. We'll explain our approach and work together to create a personalized treatment plan. You'll leave with clear next steps and actionable strategies."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
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
              <Link href="/services" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about our services, approach, and what to expect from therapy designed for men.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqData.map((item, index) => (
            <Card key={index} className="border-2 border-gray-100">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">{item.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-therapeutic-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-therapeutic-primary flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still have questions section */}
        <div className="bg-therapeutic-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            Can't find what you're looking for? Our team is here to help. Book a free consultation to get personalized answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us Directly
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