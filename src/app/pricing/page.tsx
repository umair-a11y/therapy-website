"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Calendar, CreditCard } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <Layout>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Investment in Yourself</h1>
          <p className="text-lg text-therapeutic-primary font-medium mb-4">
            Virtual-only therapy across Ontario
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Quality mental health support is one of the most valuable investments you can make. Consider the cost of staying stuck versus the value of moving forward with professional guidance.
          </p>
          <div className="bg-therapeutic-primary/5 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-therapeutic-primary mb-3">Compare Your Options</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-therapeutic-primary font-medium">Professional Therapy</div>
                <div className="text-gray-600">$160/session - Personalized, evidence-based support</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500">Monthly Gym Membership</div>
                <div className="text-gray-500">$60-120/month - Physical health focus only</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500">Self-Help Books</div>
                <div className="text-gray-500">$15-30 each - Generic, no personalized guidance</div>
              </div>
            </div>
          </div>
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
                  Book a 30-minute consult
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
              <div className="text-4xl font-bold text-gray-900 mt-2">$160</div>
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
              <div className="text-4xl font-bold text-gray-900 mt-2">$110-$160</div>
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

        {/* Value Investment Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Why This Investment Makes Sense</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-therapeutic-primary mb-3">Long-Term Value</h3>
              <p className="text-gray-700 mb-4">
                Mental health support is a skill-building investment. The coping strategies, emotional regulation techniques, and self-awareness you develop continue benefiting you long after therapy ends.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Tools you can use for life</li>
                <li>• Better relationships and communication</li>
                <li>• Improved work performance and satisfaction</li>
                <li>• Enhanced overall quality of life</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-therapeutic-primary mb-3">Cost of Waiting</h3>
              <p className="text-gray-700 mb-4">
                Unaddressed mental health challenges often compound over time, potentially affecting your career, relationships, and overall well-being. Early intervention can prevent larger issues.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Relationship strain and potential breakdown</li>
                <li>• Career stagnation or workplace conflicts</li>
                <li>• Physical health impacts from chronic stress</li>
                <li>• Missed opportunities for growth and connection</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </p>
          </div>
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
                  Book a 30-minute consult
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

    </Layout>
  );
}