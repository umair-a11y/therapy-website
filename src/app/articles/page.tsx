"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    slug: "managing-work-stress",
    title: "Navigating High-Pressure Careers: 5 Actionable Strategies for Managing Stress in Ontario",
    description: "In a fast-paced province, workplace stress is common. Learn five practical, evidence-based strategies to regain control and improve your work-life balance.",
    readTime: "8 min read",
    category: "Stress Management"
  },
  {
    slug: "recognizing-depression",
    title: "It's Not Just Anger: Recognizing the Hidden Signs of Depression in Men",
    description: "Depression in men often looks different. Learn to recognize the subtle signs, like irritability and physical pain, and understand the steps to getting support.",
    readTime: "6 min read",
    category: "Mental Health"
  },
  {
    slug: "choosing-therapist-ontario",
    title: "How to Choose a Therapist in Ontario: A Guide for Men",
    description: "Finding the right therapist can feel overwhelming. This comprehensive guide helps you understand your options, ask the right questions, and find a therapist who understands your needs.",
    readTime: "10 min read",
    category: "Getting Started"
  }
];

export default function ArticlesPage() {
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
            <BookOpen className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles & Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Actionable insights and professional guidance on topics that matter to men's mental health. Written by our team for you.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-therapeutic-primary/30 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-therapeutic-primary/10 text-therapeutic-primary">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-3 hover:text-therapeutic-primary transition-colors">
                      <Link href={`/article-${article.slug}`}>
                        {article.title}
                      </Link>
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Link href={`/article-${article.slug}`}>
                  <Button variant="outline" className="group">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Articles Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            We're continuously adding new content to help men navigate mental health challenges. Topics we're working on include:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="text-gray-700">
              • Managing ADHD in the workplace
            </div>
            <div className="text-gray-700">
              • Building resilience after trauma
            </div>
            <div className="text-gray-700">
              • Healthy relationship communication
            </div>
            <div className="text-gray-700">
              • Coping with seasonal depression
            </div>
            <div className="text-gray-700">
              • Setting boundaries at work
            </div>
            <div className="text-gray-700">
              • Understanding male grief patterns
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-700 mb-6">
              Information is a great first step. When you're ready for personalized support, our team is here to help. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline">
                  View Our FAQ
                </Button>
              </Link>
            </div>
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