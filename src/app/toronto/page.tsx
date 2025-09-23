"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, Clock, Calendar, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { useEffect } from "react";

export default function TorontoPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="localBusiness" location="toronto" />
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
            <MapPin className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Men's Therapy in Toronto</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional mental health support designed specifically for men across the Greater Toronto Area. Online sessions available throughout Toronto, Mississauga, Brampton, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/assessment/stress">
              <Button size="lg" variant="outline">
                Try a Quick Check-In
              </Button>
            </Link>
          </div>
        </div>

        {/* Why Toronto Men Choose Resolve */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="h-6 w-6 text-therapeutic-primary mr-3" />
              Why Toronto Men Choose Resolve
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              We understand the unique challenges of living and working in Canada's largest city.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-therapeutic-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                  <p className="text-gray-700">Evening and weekend sessions that work around your Toronto commute and work schedule.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Building className="h-5 w-5 text-therapeutic-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">City-Specific Strategies</h4>
                  <p className="text-gray-700">Tools and techniques designed for high-pressure urban environments.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Complete Privacy</h4>
                  <p className="text-gray-700">Online sessions from the comfort of your home or office.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Specialized Services for Toronto Men */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Specialized Services for Toronto Men</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">ADHD Support</h4>
              <p className="text-gray-700">Navigate workplace challenges and improve focus in fast-paced Toronto environments.</p>
              <Link href="/adhd-support" className="text-therapeutic-primary hover:underline text-sm">
                Learn more about ADHD support →
              </Link>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Anxiety & Stress</h4>
              <p className="text-gray-700">Manage work pressure, social anxiety, and the constant stimulation of city life.</p>
              <Link href="/anxiety-support" className="text-therapeutic-primary hover:underline text-sm">
                Learn more about anxiety support →
              </Link>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Depression & Mood</h4>
              <p className="text-gray-700">Address low mood, seasonal depression, and the isolation that can come with urban living.</p>
              <Link href="/depression-support" className="text-therapeutic-primary hover:underline text-sm">
                Learn more about depression support →
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Toronto-Specific Challenges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Toronto's Unique Pressures</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Work Pressures</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    High-pressure finance and tech sectors
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Long commutes and traffic stress
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Competitive work environments
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Work-life balance challenges
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">City Life Stressors</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    High cost of living pressures
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Social isolation in a big city
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Constant noise and stimulation
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Seasonal depression and weather impact
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GTA Coverage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Serving Men Across the Greater Toronto Area</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Our online therapy services are available to men throughout the GTA, including:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Toronto Proper</h4>
                <p className="text-gray-600 text-sm">Downtown, Midtown, North York, Scarborough, Etobicoke</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Peel Region</h4>
                <p className="text-gray-600 text-sm">Mississauga, Brampton, Caledon</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Surrounding Areas</h4>
                <p className="text-gray-600 text-sm">Markham, Richmond Hill, Vaughan, Oakville</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Questions from Toronto Men */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Questions from Toronto Men</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Do you offer in-person sessions in Toronto?</h4>
              <p className="text-gray-700">A: We currently offer online sessions only, which allows us to serve men across the entire GTA without the hassle of commuting.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Do you understand the pressures of working in Toronto?</h4>
              <p className="text-gray-700">A: Absolutely. We work with many men in finance, tech, healthcare, and other high-pressure Toronto industries.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can you help with work-life balance in a demanding city?</h4>
              <p className="text-gray-700">A: Yes, work-life balance is a common focus. We help you set boundaries and manage energy.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: How do online sessions work with my busy Toronto schedule?</h4>
              <p className="text-gray-700">A: Online sessions eliminate commute time and can be scheduled during lunch breaks, early mornings, or evenings to fit your schedule.</p>
            </div>
          </CardContent>
        </Card>

        {/* Industry-Specific Support */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Support for Toronto's Key Industries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Finance & Banking</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Managing high-stakes pressure and deadlines</li>
                  <li>• Dealing with market volatility stress</li>
                  <li>• Work-life balance in demanding roles</li>
                  <li>• Perfectionism and performance anxiety</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technology Sector</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Managing burnout and overwork</li>
                  <li>• Dealing with constant change and innovation pressure</li>
                  <li>• Social anxiety in tech environments</li>
                  <li>• ADHD support for tech professionals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Healthcare</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Compassion fatigue and emotional overwhelm</li>
                  <li>• Managing life-and-death decision stress</li>
                  <li>• Shift work and sleep issues</li>
                  <li>• Secondary trauma from patient care</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Legal Profession</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• High-pressure litigation stress</li>
                  <li>• Billable hour pressures</li>
                  <li>• Perfectionism and attention to detail anxiety</li>
                  <li>• Work-life balance challenges</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Not Sure Where to Start */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Not Sure Where to Start?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Take one of our quick, confidential assessments to better understand what you're experiencing and how we can help.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/assessment/stress">
                <Button variant="outline" className="w-full">
                  Try Stress Check-In
                </Button>
              </Link>
              <Link href="/assessment/depression">
                <Button variant="outline" className="w-full">
                  Depression Assessment
                </Button>
              </Link>
              <Link href="/assessment/anxiety">
                <Button variant="outline" className="w-full">
                  Anxiety Assessment
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-6">
              Join hundreds of Toronto men who have found practical, effective mental health support with Resolve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  <Users className="mr-2 h-5 w-5" />
                  Have Questions? Contact Us
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