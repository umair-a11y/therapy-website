"use client";

import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield, Award, Heart, Brain, Users, CheckCircle,
  Calendar, ArrowRight, Target, BookOpen, Lightbulb
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Your privacy is our priority. All sessions are completely confidential and judgment-free."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every client with empathy, understanding, and genuine care for their wellbeing."
    },
    {
      icon: Brain,
      title: "Evidence-Based",
      description: "Our methods are grounded in scientific research and proven therapeutic techniques."
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Your unique needs and goals guide our therapeutic approach and treatment planning."
    }
  ];

  const approaches = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description: "Identify and change negative thought patterns and behaviors"
    },
    {
      name: "Dialectical Behavior Therapy (DBT)",
      description: "Develop emotional regulation and interpersonal effectiveness skills"
    },
    {
      name: "Eye Movement Desensitization and Reprocessing (EMDR)",
      description: "Process and heal from traumatic experiences"
    },
    {
      name: "Acceptance and Commitment Therapy (ACT)",
      description: "Build psychological flexibility and value-driven action"
    },
    {
      name: "Mindfulness-Based Therapy",
      description: "Cultivate present-moment awareness and reduce stress"
    },
    {
      name: "Solution-Focused Therapy",
      description: "Focus on solutions and goals rather than problems"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-therapeutic-primary/5 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Resolve Men's Therapy
            </h1>
            <p className="text-xl text-gray-600">
              Professional mental health support designed specifically for men's unique needs and experiences
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At Resolve Men's Therapy, we believe that every man deserves access to
                  professional, understanding mental health support. Our mission is to break
                  down the barriers that prevent men from seeking help and provide a safe,
                  confidential space for healing and growth.
                </p>
                <p>
                  We understand that men face unique challenges when it comes to mental health.
                  Societal expectations, stigma, and traditional masculine norms often make it
                  difficult for men to express vulnerability or seek support. We're here to
                  change that narrative.
                </p>
                <p>
                  Our team of CRPO registered psychotherapists specializes in men's mental health,
                  offering evidence-based treatments tailored to address the specific psychological
                  needs and communication styles of men.
                </p>
              </div>
            </div>
            <div className="bg-therapeutic-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Men's Mental Health Matters
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Men are less likely to seek mental health support despite experiencing similar rates of mental health challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Traditional therapy approaches may not resonate with men's communication styles and needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Untreated mental health issues can impact relationships, work performance, and physical health</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Early intervention and support can significantly improve quality of life and wellbeing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and how we support our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-therapeutic-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Therapeutic Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use evidence-based methods proven to help men achieve meaningful change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{approach.name}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-therapeutic-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tailored to Your Needs
            </h3>
            <p className="text-gray-700 mb-4">
              We understand that every person is unique. During your initial consultation,
              we'll work together to understand your specific needs, goals, and preferences.
              Based on this assessment, we'll develop a personalized treatment plan that
              combines the most appropriate therapeutic approaches for your situation.
            </p>
            <p className="text-gray-700">
              Our flexible approach means we can adapt our methods as you progress,
              ensuring you always receive the most effective support for where you are
              in your journey.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What to Expect
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <Target className="h-10 w-10 text-therapeutic-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Initial Consultation</h3>
              <p className="text-gray-600 mb-4">
                Your first session is about understanding your needs and goals.
                We'll discuss what brings you to therapy and develop a plan together.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>15-minute free consultation available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>No commitment required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Discuss your concerns privately</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <BookOpen className="h-10 w-10 text-therapeutic-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Regular Sessions</h3>
              <p className="text-gray-600 mb-4">
                Sessions typically last 50 minutes and occur weekly or bi-weekly,
                depending on your needs and preferences.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Online or in-person sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Consistent therapeutic support</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <Lightbulb className="h-10 w-10 text-therapeutic-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Your Journey</h3>
              <p className="text-gray-600 mb-4">
                Therapy is a collaborative process. You'll develop insights,
                learn new skills, and work toward your personal goals.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Progress at your own pace</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Practical tools and strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-therapeutic-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Ongoing support and guidance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8 lg:p-12">
            <div className="text-center mb-8">
              <Award className="h-16 w-16 text-therapeutic-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Professional Standards & Ethics
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
              <p>
                All our therapists are registered with the College of Registered
                Psychotherapists of Ontario (CRPO) or are qualifying members working
                under supervision. This ensures you receive professional, ethical,
                and competent care.
              </p>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Our Commitment to You:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Adherence to CRPO professional standards and code of ethics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Ongoing professional development and training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Regular supervision and peer consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Evidence-based practices and interventions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Complete confidentiality within legal requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-therapeutic-primary to-therapeutic-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to support you on your journey toward better mental health and wellbeing.
            Book a free consultation to see how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-white text-therapeutic-primary hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/team">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}