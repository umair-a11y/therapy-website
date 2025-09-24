"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Calendar, CreditCard } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Investment in Yourself</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in transparent pricing and making mental health care accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Free Consultation */}
          <Card className="border-2 border-green-200 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Start Here
              </div>
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl text-green-600">Free Consultation</CardTitle>
              <div className="text-4xl font-bold text-gray-900 mt-2">$0</div>
              <p className="text-gray-600">30-Minute Phone Call</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No-obligation chat to see if we're a good fit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Discuss your goals and ask questions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Learn about our approach</span>
                </li>
              </ul>
              <Link href="/contact" className="block">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Book Your Free Consultation
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Individual Therapy */}
          <Card className="border-2 border-therapeutic-primary relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-therapeutic-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl text-therapeutic-primary">Individual Therapy</CardTitle>
              <div className="text-4xl font-bold text-gray-900 mt-2">$125</div>
              <p className="text-gray-600">Per 50-Minute Session</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personalized, one-on-one sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Evidence-based strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Secure messaging between sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-therapeutic-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
              </ul>
              <Link href="/contact" className="block">
                <Button className="w-full bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Sliding Scale */}
          <Card className="border-2 border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-600">Sliding Scale</CardTitle>
              <div className="text-4xl font-bold text-gray-900 mt-2">$85-$125</div>
              <p className="text-gray-600">Based on Financial Need</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Same high-quality service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Confidential financial assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Limited spots available</span>
                </li>
              </ul>
              <Link href="/contact" className="block">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Discuss Your Situation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-6 w-6 text-therapeutic-primary mr-3" />
                Payment & Billing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Payment Methods</h4>
                <p className="text-gray-700">All major credit cards and e-Transfers.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Insurance Coverage</h4>
                <p className="text-gray-700">Services are provided by Registered Psychotherapists (Qualifying) and often covered by extended health plans. We provide a receipt for you to submit.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                <p className="text-gray-700">We require at least 24 hours' notice for cancellations or rescheduling to avoid being charged the full session fee.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-6 w-6 text-therapeutic-primary mr-3" />
                Making Therapy Accessible
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Insurance Guidance</h4>
                <p className="text-gray-700">We'll help you understand your coverage and claims process.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Flexible Options</h4>
                <p className="text-gray-700">Sliding scale rates available for those experiencing financial hardship.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transparent Pricing</h4>
                <p className="text-gray-700">No hidden fees or surprises. What you see is what you pay.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take the Next Step?</h2>
            <p className="text-gray-700 mb-6">
              Book your free, no-pressure consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Free Consultation
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline">
                  Read Our FAQ
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