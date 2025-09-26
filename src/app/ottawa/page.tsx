"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building2, Clock, Calendar, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import { HeroWithImage } from "@/components/sections/hero-with-image";
import { THERAPY_IMAGES } from "@/lib/therapy-images";
import Layout from "@/components/Layout";

export default function OttawaPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <div className="rounded-md bg-therapeutic-primary/5 border border-therapeutic-primary/20 p-3 text-sm text-slate-700">
          Virtual-only care across Ontario, including Ottawa and the National Capital Region.
        </div>
      </div>
      {/* Hero Section with Ottawa Image */}
      <HeroWithImage
        title="Men's Therapy in Ottawa (Virtual)"
        subtitle="National Capital Region"
        description="Professional, confidential support for men in Ottawa. Manage stress, improve relationships, and address mental health with specialized care."
        imageUrl={THERAPY_IMAGES.locations.ottawa}
        imageAlt="Ottawa Parliament and men's mental health services"
        primaryButtonText="Book Free Consultation"
        primaryButtonHref="/book-consultation"
        secondaryButtonText="Try Quick Check-In"
        secondaryButtonHref="/assessment/stress"
        height="medium"
      />

      <div className="max-w-4xl mx-auto px-4 py-12">

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
              We provide virtual-only therapy across Ontario, offering professional support for men navigating the unique pressures of careers in government, tech, and other demanding sectors in Ottawa. Our online sessions provide convenient access to mental health care from your home or office.
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
              <p className="text-gray-700">A: We use PHIPA-compliant, secure platforms and maintain strict confidentiality. Your sessions are private and cannot impact your security clearance.</p>
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
              Schedule a free, confidential 30-minute consultation to see how our specialized support for men in Ottawa can help you.
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
    </Layout>
  );
}
