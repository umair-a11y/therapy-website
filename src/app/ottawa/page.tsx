"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building2, Clock, Calendar, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function OttawaPage() {
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
            <MapPin className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Online Therapy for Men in Ottawa</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional, confidential support for men in the National Capital Region. Manage stress, improve relationships, and address mental health with a therapist who specializes in men's issues.
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

        {/* Support for Professionals in Ottawa */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building2 className="h-6 w-6 text-therapeutic-primary mr-3" />
              Support for Professionals in Ottawa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide support for men navigating the unique pressures of careers in government, tech, and other demanding sectors in Ottawa.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Public Service & Career Stress</h4>
                <p className="text-gray-700">Specialized support for managing the unique stressors of a career in the public sector.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tech Industry Burnout</h4>
                <p className="text-gray-700">Strategies to manage the fast-paced, high-pressure environment of Ottawa's tech hub.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Anxiety & Depression Support</h4>
                <p className="text-gray-700">Evidence-based tools to manage symptoms, tailored to the male experience.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Relationship Challenges</h4>
                <p className="text-gray-700">Improve communication and balance demanding career and personal life responsibilities.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ottawa-Specific Challenges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Ottawa's Professional Landscape</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Government & Public Service</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Bureaucratic stress and red tape frustration
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Political pressures and public scrutiny
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Career advancement challenges
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Work-life balance expectations
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technology Sector</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Startup culture and uncertainty
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Rapid innovation pressures
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Competitive job market
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Remote work isolation
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Convenient & Confidential Online Therapy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Convenient & Confidential Online Therapy for Ottawa Residents</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              Access professional support from the comfort of your home in Kanata, Orleans, Barrhaven, or downtown Ottawa.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Scheduling That Works for You</h4>
                  <p className="text-gray-700">Book sessions that fit your busy schedule, including evenings and weekends.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Secure & Private</h4>
                  <p className="text-gray-700">We use a PIPEDA-compliant, secure video platform.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Practical & Goal-Oriented</h4>
                  <p className="text-gray-700">Receive tangible skills and evidence-based strategies.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NCR Coverage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Serving Men Across the National Capital Region</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Our online therapy services are available to men throughout the NCR, including:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Ottawa</h4>
                <p className="text-gray-600 text-sm">Downtown, Centretown, ByWard Market, Westboro, Glebe</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Suburbs</h4>
                <p className="text-gray-600 text-sm">Kanata, Orleans, Barrhaven, Nepean, Stittsville</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Surrounding Areas</h4>
                <p className="text-gray-600 text-sm">Gatineau, Chelsea, Rockland, Manotick</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Specific to Ottawa Men */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Specialized Support for Common Ottawa Challenges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Career & Work Stress</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Public service career navigation</li>
                  <li>• Managing government bureaucracy stress</li>
                  <li>• Tech industry burnout and pressure</li>
                  <li>• Work-life balance in demanding roles</li>
                  <li>• Career transition support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Relationship & Social Life</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Dating in Ottawa's professional scene</li>
                  <li>• Balancing career and family life</li>
                  <li>• Social anxiety in networking events</li>
                  <li>• Long-distance relationship challenges</li>
                  <li>• Building meaningful connections</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Seasonal & Environmental</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Seasonal Affective Disorder (SAD)</li>
                  <li>• Winter depression and mood changes</li>
                  <li>• Managing long winter months</li>
                  <li>• Outdoor activity and mood connection</li>
                  <li>• Light therapy and lifestyle adjustments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Life Transitions</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Moving to Ottawa for work</li>
                  <li>• Mid-career transitions</li>
                  <li>• Retirement planning anxiety</li>
                  <li>• Empty nest syndrome</li>
                  <li>• Major life decisions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Questions from Ottawa Men</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Do you understand the government work environment?</h4>
              <p className="text-gray-700">A: Yes, we work with many public servants and understand the unique stressors of government work, including bureaucracy, political pressures, and career advancement challenges.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can you help with seasonal depression common in Ottawa?</h4>
              <p className="text-gray-700">A: Absolutely. We provide specialized support for Seasonal Affective Disorder (SAD) and help develop strategies for managing mood during Ottawa's long winters.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: How do you ensure privacy for government employees?</h4>
              <p className="text-gray-700">A: We use PIPEDA-compliant, secure platforms and maintain strict confidentiality. Your sessions are private and cannot impact your security clearance.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can you accommodate shift workers or unusual schedules?</h4>
              <p className="text-gray-700">A: Yes, we offer flexible scheduling including evenings and weekends to accommodate various work schedules common in Ottawa.</p>
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

        {/* Take the First Step */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Take the First Step</h2>
            <p className="text-gray-700 mb-6">
              Schedule a free, confidential 15-minute consultation to see how our specialized support for men in Ottawa can help you.
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