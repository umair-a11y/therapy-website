"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Users, Phone, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  return (
    <Layout>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team of experienced mental health professionals is dedicated to supporting men's mental health across Ontario.
          </p>
        </div>

        {/* Founder Profile */}
        <div className="mb-16">
          <Card className="border-2 border-therapeutic-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-therapeutic-primary">Umair, RP(Q)</CardTitle>
                  <p className="text-gray-600 font-medium">Founder & Registered Psychotherapist (Qualifying)</p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center px-4 py-2 bg-therapeutic-primary/10 rounded-full text-sm font-medium text-therapeutic-primary">
                    <Shield className="w-4 h-4 mr-2" />
                    CRPO Registered
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Umair founded Resolve Men's Therapy to provide therapeutic support tailored specifically for men. My approach is direct, curious, and practical. We'll set clear goals and adjust as you learn what works.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I specialize in helping men navigate challenges with anxiety, depression, anger, stress & burnout, ADHD, trauma, and addiction. My therapeutic approach combines CBT, ACT, IFS, and Solution-Focused Brief Therapy to provide evidence-based treatment.
              </p>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Areas I frequently help men with:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                    <span className="text-gray-700">Anxiety and panic management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                    <span className="text-gray-700">Depression and low mood</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                    <span className="text-gray-700">Anger and frustration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                    <span className="text-gray-700">Stress & burnout recovery</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                    <span className="text-gray-700">ADHD challenges</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                    <span className="text-gray-700">Trauma and addiction</span>
                  </div>
                </div>
              </div>

              <div className="bg-therapeutic-primary/5 rounded-lg p-6">
                <h4 className="font-semibold text-therapeutic-primary mb-3">My approach:</h4>
                <p className="text-gray-700">
                  My style is direct, curious, and practical. I believe in setting clear goals and adjusting our approach as you learn what works. I'm available for weekday daytime sessions and limited evening appointments, all conducted online for convenience.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Expansion */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 text-therapeutic-primary mr-3" />
                Our Team is Growing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We are expanding to serve more men across Ontario. Associate positions are currently available for CRPO-registered therapists.
              </p>
              <p className="text-gray-600 text-sm">
                Interested in joining our team? We're looking for qualified professionals who share our commitment to men's mental health.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Professional Standards */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-6 w-6 text-therapeutic-primary mr-3" />
                Our Professional Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">CRPO Registration</h4>
                  <p className="text-gray-700 text-sm">All team members are registered with the College of Registered Psychotherapists of Ontario.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Specialized Training</h4>
                  <p className="text-gray-700 text-sm">Team members receive ongoing training in men's mental health and evidence-based approaches.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Clinical Supervision</h4>
                  <p className="text-gray-700 text-sm">All services are provided under appropriate clinical supervision.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Continuing Education</h4>
                  <p className="text-gray-700 text-sm">Regular participation in professional development and training programs.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credentials Section */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Professional Credentials & Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-therapeutic-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">CRPO Registered</h4>
                  <p className="text-gray-600 text-sm">Licensed by the College of Registered Psychotherapists of Ontario</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-therapeutic-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Professional Insurance</h4>
                  <p className="text-gray-600 text-sm">Comprehensive professional liability coverage</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-therapeutic-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Evidence-Based Practice</h4>
                  <p className="text-gray-600 text-sm">Utilizing research-supported therapeutic approaches</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work with Our Team?</h2>
            <p className="text-gray-700 mb-6">
              Start with a free consultation to discuss your goals and determine the best fit for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Ask About Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}