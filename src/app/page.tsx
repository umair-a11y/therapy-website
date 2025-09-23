"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Calendar, Phone, MapPin, Clock, Shield, CheckCircle,
  Heart, Brain, Users, ArrowRight, ChevronLeft, ChevronRight,
  Mail, Laptop, Building, UserCheck, Award, BookOpen,
  AlertCircle, HelpCircle, Target, Zap
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [email, setEmail] = useState("");

  const emotionalStates = [
    "Lost", "Anxious", "Broken", "Inauthentic", "Disconnected",
    "Isolated", "Powerless", "Stuck", "Depressed"
  ];

  const teamMembers = [
    { name: "Dr. Michael Chen", role: "Registered Psychotherapist", image: "/team/member1.jpg" },
    { name: "James Wilson", role: "Registered Psychotherapist (Qualifying)", image: "/team/member2.jpg" },
    { name: "David Kumar", role: "Registered Social Worker", image: "/team/member3.jpg" },
    { name: "Robert Martinez", role: "Registered Psychotherapist", image: "/team/member4.jpg" },
    { name: "Thomas Anderson", role: "Clinical Psychologist", image: "/team/member5.jpg" },
    { name: "Christopher Lee", role: "Registered Psychotherapist", image: "/team/member6.jpg" },
  ];

  const specializations = [
    { name: "ADHD", link: "/adhd-support" },
    { name: "Anger Management", link: "/anger-management" },
    { name: "Anxiety", link: "/anxiety-support" },
    { name: "Dating & Relationships", link: "/relationship-therapy" },
    { name: "Depression", link: "/depression-support" },
    { name: "EMDR Therapy", link: "/emdr-therapy" },
    { name: "First Responders", link: "/first-responder-support" },
    { name: "Grief & Loss", link: "/grief-support" },
    { name: "Parenting & New Fathers", link: "/parenting-support" },
    { name: "Men's Issues", link: "/mens-issues" },
    { name: "Addiction Recovery", link: "/addiction-therapy" },
    { name: "Stress & Burnout", link: "/stress-burnout" },
    { name: "Performance Anxiety", link: "/performance-anxiety" },
    { name: "Trauma & PTSD", link: "/trauma-therapy" },
    { name: "Work-Life Balance", link: "/work-life-balance" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-therapeutic-primary/5 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-therapeutic-primary font-semibold text-lg mb-4">
              RESOLVE MEN'S THERAPY
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Men's Mental Health Support
              <span className="block text-therapeutic-primary mt-2">Across Ontario</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Supporting men through evidence-based therapy and professional guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90 text-white px-8">
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2">
                  Request Information
                </Button>
              </Link>
            </div>
          </div>

          {/* Service Badges */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <Laptop className="h-8 w-8 text-therapeutic-primary" />
              <div>
                <p className="font-semibold text-gray-900">Services Available</p>
                <p className="text-sm text-gray-600">Across Ontario</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <Building className="h-8 w-8 text-therapeutic-primary" />
              <div>
                <p className="font-semibold text-gray-900">Online & In-Person</p>
                <p className="text-sm text-gray-600">Flexible Options</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-therapeutic-primary" />
              <div>
                <p className="font-semibold text-gray-900">Insurance Coverage</p>
                <p className="text-sm text-gray-600">Direct Billing Available</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <Users className="h-8 w-8 text-therapeutic-primary" />
              <div>
                <p className="font-semibold text-gray-900">Expert Team</p>
                <p className="text-sm text-gray-600">CRPO Registered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional States Section - CRPO Compliant */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                If you find yourself feeling...
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {emotionalStates.map((state, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-therapeutic-accent" />
                    <span className="text-gray-700">{state}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-600 mb-4">
                Men often wait until crisis to seek support.
              </p>
              <p className="text-lg font-semibold text-therapeutic-primary">
                Professional support is available when you're ready.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                We provide evidence-based support to help men:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Understand themselves and develop healthier coping strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Build stronger relationships with partners, family, and friends</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Process and heal from past experiences and trauma</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Navigate life transitions and challenges with confidence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - CRPO Compliant */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Mental Health Support for Men
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are CRPO registered psychotherapists providing evidence-based therapy services
              designed specifically for men's mental health needs across Ontario.
            </p>
          </div>

          <div className="bg-therapeutic-primary/5 rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Welcome — taking the first step requires courage
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Resolve Men's Therapy was founded on the belief that men deserve specialized,
                  understanding mental health support. Many men struggle with seeking help due to
                  societal expectations and stigma.
                </p>
                <p>
                  Our team of registered psychotherapists understands the unique challenges men face.
                  We provide a confidential, judgment-free space where you can explore your thoughts,
                  feelings, and experiences.
                </p>
                <p>
                  Whether you're dealing with anxiety, depression, relationship issues, or life transitions,
                  our evidence-based approach is tailored to help you develop practical strategies and
                  achieve meaningful change.
                </p>
                <p className="font-semibold text-therapeutic-primary">
                  Reaching out is a sign of strength, not weakness.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-therapeutic-primary hover:bg-therapeutic-primary/90 text-white">
                    Learn More About Our Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - CRPO Compliant */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Resolve Men's Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our practice focuses on providing professional, evidence-based mental health support
              specifically designed for men's unique needs and experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Brain className="h-12 w-12 text-therapeutic-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Specialized Focus</h3>
              <p className="text-gray-600">
                We exclusively focus on men's mental health, with training and expertise
                in addressing men's specific psychological needs.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <UserCheck className="h-12 w-12 text-therapeutic-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Registered Professionals</h3>
              <p className="text-gray-600">
                Our team consists of CRPO registered psychotherapists committed to
                professional standards and ethical practice.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-therapeutic-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Evidence-Based Methods</h3>
              <p className="text-gray-600">
                We utilize proven therapeutic approaches including CBT, DBT, EMDR,
                and trauma-informed care tailored to your needs.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Heart className="h-12 w-12 text-therapeutic-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Flexible Options</h3>
              <p className="text-gray-600">
                Choose between in-person sessions in our offices or convenient
                virtual therapy sessions from anywhere in Ontario.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Therapy Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Therapy Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-therapeutic-primary/10 flex items-center justify-center">
                <Users className="h-24 w-24 text-therapeutic-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Individual Therapy</h3>
                <p className="text-gray-600 mb-4">
                  One-on-one sessions focused on your personal growth and healing
                </p>
                <Link href="/individual-therapy">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-therapeutic-primary/10 flex items-center justify-center">
                <Heart className="h-24 w-24 text-therapeutic-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Couples Therapy</h3>
                <p className="text-gray-600 mb-4">
                  Strengthen your relationship with professional guidance
                </p>
                <Link href="/couples-therapy">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-therapeutic-primary/10 flex items-center justify-center">
                <Users className="h-24 w-24 text-therapeutic-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Group Therapy</h3>
                <p className="text-gray-600 mb-4">
                  Connect with other men facing similar challenges
                </p>
                <Link href="/group-therapy">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas of Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Areas of Support We Specialize In
            </h2>
            <p className="text-gray-600">Click to learn more about each area</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {specializations.map((spec, index) => (
              <Link key={index} href={spec.link}>
                <div className="bg-white p-4 rounded-lg text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <p className="font-medium text-gray-900">{spec.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find a therapist that's right for you
            </h2>
            <p className="text-xl text-gray-600">
              Our team of registered professionals is here to support you
            </p>
          </div>

          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <Card className="overflow-hidden">
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <UserCheck className="h-32 w-32 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/team">
                <Button className="bg-therapeutic-primary hover:bg-therapeutic-primary/90 text-white">
                  Meet Our Full Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 bg-therapeutic-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-12 w-12 text-therapeutic-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-8">
            Receive educational content about men's mental health and wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button className="bg-therapeutic-primary hover:bg-therapeutic-primary/90 text-white">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-therapeutic-primary to-therapeutic-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Take Your First Step Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether it's your first time seeking therapy or you're looking for a new approach,
            we're here to support your journey. Taking the first step requires courage,
            and we're ready to walk alongside you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-white text-therapeutic-primary hover:bg-gray-100">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ask Us a Question
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="h-12 w-12 text-therapeutic-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer in-person sessions in Toronto, Ottawa, and surrounding areas,
              plus virtual services across Ontario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Toronto Office</h3>
              <p className="text-gray-600 mb-2">Downtown Toronto Location</p>
              <p className="text-sm text-gray-500 mb-4">Available by appointment</p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </Link>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Ottawa Office</h3>
              <p className="text-gray-600 mb-2">Central Ottawa Location</p>
              <p className="text-sm text-gray-500 mb-4">Available by appointment</p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </Link>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-start space-x-3">
              <Laptop className="h-6 w-6 text-therapeutic-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Virtual Therapy Available</h3>
                <p className="text-gray-600">
                  Can't make it to our offices? We offer secure video therapy sessions
                  for clients anywhere in Ontario. Same professional support, from the
                  comfort of your own space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}