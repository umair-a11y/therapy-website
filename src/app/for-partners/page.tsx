"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function ForPartnersPage() {
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
          <div className="w-16 h-16 bg-heart-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Supporting Your Partner's Mental Health</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A compassionate guide for partners who want to support their loved one's mental health journey without pressure or judgment.
          </p>
        </div>

        {/* Understanding Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 text-therapeutic-primary mr-3" />
              Understanding the Challenge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Men often face unique barriers to seeking help. Your role isn't to fix them—it's to create a safe, supportive environment where they feel understood and accepted. Mental health challenges can affect anyone, and seeking help is actually a sign of strength, not weakness.
            </p>
          </CardContent>
        </Card>

        {/* What You Can Do */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What You Can Do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Listen Without Trying to Fix</h4>
              <p className="text-gray-700">Avoid offering solutions immediately. Focus on understanding and validating their feelings. Sometimes just being heard is incredibly powerful.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Educate Yourself</h4>
              <p className="text-gray-700">Learning about mental health helps you respond more effectively and understand what your partner is going through.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Encourage Professional Help</h4>
              <p className="text-gray-700">You can encourage this without being pushy. Share information or offer to help research options, but let them make the decision.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Take Care of Yourself</h4>
              <p className="text-gray-700">Supporting someone can be draining. Set boundaries and seek your own support when needed. You can't pour from an empty cup.</p>
            </div>
          </CardContent>
        </Card>

        {/* Important Quote */}
        <div className="bg-therapeutic-primary/5 border-l-4 border-therapeutic-primary p-6 mb-8">
          <blockquote className="text-lg italic text-gray-700">
            "The goal isn't to fix your partner—it's to support them as they work on fixing themselves."
          </blockquote>
        </div>

        {/* What to Avoid */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
              What to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Pressure</h4>
                <p className="text-gray-700">Don't push them to "just get over it" or rush their healing process.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Minimizing</h4>
                <p className="text-gray-700">Avoid saying "It's not that bad" or comparing their struggles to others.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Taking it Personally</h4>
                <p className="text-gray-700">Their struggles are not about you or your relationship, even if they affect it.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Enabling</h4>
                <p className="text-gray-700">Don't make excuses for harmful behaviors or avoid setting necessary boundaries.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Start the Conversation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Start the Conversation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Choose the Right Time and Place</h4>
              <p className="text-gray-700">Pick a calm, private moment when you won't be interrupted.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Use "I" Statements</h4>
              <p className="text-gray-700">"I've noticed you seem stressed lately, and I'm concerned" rather than "You always seem angry."</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Focus on Specific Behaviors</h4>
              <p className="text-gray-700">Mention observable changes rather than making general statements about their character.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Express Support</h4>
              <p className="text-gray-700">Let them know you're there to support them, not judge them.</p>
            </div>
          </CardContent>
        </Card>

        {/* Resources Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 text-therapeutic-primary mr-3" />
              Resources for Partners
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Support Groups</h4>
              <p className="text-gray-700">Consider joining support groups for partners of people with mental health challenges.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Your Own Therapy</h4>
              <p className="text-gray-700">Individual therapy can help you develop coping strategies and maintain your own mental health.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Educational Resources</h4>
              <p className="text-gray-700">Books, articles, and online resources about mental health and supporting loved ones.</p>
            </div>
          </CardContent>
        </Card>

        {/* Crisis Information */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-red-900 mb-3 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            When to Seek Immediate Help
          </h3>
          <p className="text-red-800 mb-4">
            If your partner expresses thoughts of self-harm or suicide, take it seriously:
          </p>
          <div className="space-y-2 text-red-800">
            <div>• <strong>Emergency:</strong> Call 911</div>
            <div>• <strong>Crisis Line:</strong> Call or text 9-8-8 (24/7)</div>
            <div>• <strong>Talk Suicide Canada:</strong> 1-833-456-4566 (24/7)</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Support Their Journey?</h2>
            <p className="text-gray-700 mb-6">
              If your partner is ready to seek professional help, we're here to support both of you. Our approach is designed to help men feel comfortable and understood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  Learn About Our Approach
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us with Questions
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