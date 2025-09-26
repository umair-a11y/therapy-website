"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

const faqData = [
  {
    question: "What are your fees?",
    answer: "Our session fee is $160 for a 50-minute virtual session. We provide a receipt that you can use for reimbursement from most extended health benefits plans."
  },
  {
    question: "Do you offer direct billing?",
    answer: "We do not offer direct billing at this time. You can submit your receipt to your insurance provider for reimbursement according to your plan's coverage for Registered Psychotherapists."
  },
  {
    question: "What technology do you use for sessions?",
    answer: "We use a secure, PHIPA-compliant video platform designed for healthcare. You will receive a private link before each session."
  },
  {
    question: "Is online therapy as effective as in-person?",
    answer: "For many issues, research shows that online therapy is just as effective as traditional in-person therapy. It offers the same expert support with added convenience and accessibility from anywhere in Ontario."
  },
  {
    question: "How do I know if we're a good fit?",
    answer: "The free 30-minute consult is for exactly that. It's a chance for you to ask questions, share what's on your mind, and get a feel for my approach. There is no pressure to continue if it doesn't feel right."
  },
  {
    question: "What if I'm in crisis?",
    answer: "This practice is not equipped for crisis support. If you are in immediate distress or having thoughts of harming yourself, please contact 9-8-8 (call or text) or go to your nearest emergency room. For non-urgent mental health support, you can contact ConnexOntario at 1-866-531-2600."
  },
  {
    question: "Does my insurance plan cover services from a Registered Psychotherapist?",
    answer: "Therapy with a Registered Psychotherapist is covered by many, but not all, extended health benefits plans in Ontario. We recommend you ask your insurance provider if your plan covers services from a 'Registered Psychotherapist' or 'RP'."
  },
  {
    question: "What is my total coverage amount per year for mental health services?",
    answer: "Coverage amounts vary by plan. Check with your insurance provider about your specific annual limits for mental health services or psychotherapy."
  },
  {
    question: "Is there a per-session maximum that my plan will reimburse?",
    answer: "Many plans have per-session maximums. Contact your insurance provider to confirm if there are limits on what they'll reimburse per session."
  },
  {
    question: "Do I need a doctor's referral to be covered?",
    answer: "Some insurance plans require a doctor's referral for coverage. Check with your provider about whether a referral is needed for your specific plan."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Please provide at least 24 hours' notice to avoid being charged for the session. Life happens, and we understand that sometimes you need to reschedule."
  },
  {
    question: "How long are sessions?",
    answer: "Individual therapy sessions are 50 minutes long. The initial consultation is 30 minutes and free of charge."
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
      {/* FAQPage JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
          url: `${SITE_URL}/faq`,
        }}
      />
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
