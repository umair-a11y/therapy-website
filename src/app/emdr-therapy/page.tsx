"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Heart, Calendar, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function EMDRTherapy() {
  const benefits = [
    "Process traumatic memories safely",
    "Reduce emotional intensity of painful memories",
    "Decrease PTSD symptoms and triggers",
    "Improve emotional regulation",
    "Build resilience and coping skills",
    "Restore sense of safety and control"
  ];

  const conditions = [
    "Post-Traumatic Stress Disorder (PTSD)",
    "Childhood trauma and abuse",
    "Combat and military trauma",
    "Workplace trauma and accidents",
    "Motor vehicle accidents",
    "Grief and loss",
    "Anxiety and panic disorders",
    "Depression related to trauma"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Brain className="mx-auto h-16 w-16 text-therapeutic-primary mb-6" />
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                EMDR Therapy for Men
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Evidence-based trauma therapy to help men process difficult experiences and reclaim their lives
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-consultation">
                  <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book EMDR Session
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is EMDR */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  What is EMDR Therapy?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based psychotherapy that helps people heal from trauma and other distressing life experiences. It's particularly effective for men who have experienced trauma but struggle to talk about their experiences.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  EMDR doesn't require detailed descriptions of traumatic events, making it a valuable option for men who find traditional talk therapy challenging or uncomfortable.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-blue-600 mb-2" />
                  <p className="text-blue-800 font-medium">
                    EMDR is recognized by the American Psychological Association and the World Health Organization as an effective treatment for trauma.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <Shield className="h-12 w-12 text-therapeutic-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Safe & Controlled Process
                </h3>
                <p className="text-gray-600">
                  EMDR therapy follows a structured eight-phase approach that ensures you feel safe and in control throughout the healing process. You work at your own pace with a trained EMDR therapist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How EMDR Helps */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How EMDR Can Help You
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                EMDR therapy can provide significant relief from trauma symptoms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="h-8 w-8 text-therapeutic-primary mb-4" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Conditions We Treat with EMDR
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                EMDR has been shown effective for various trauma-related conditions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-therapeutic-primary mr-4 flex-shrink-0" />
                  <span className="text-gray-700">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The EMDR Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The EMDR Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach to trauma healing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-therapeutic-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Preparation
                </h3>
                <p className="text-gray-600">
                  Building trust, learning coping skills, and preparing for processing
                </p>
              </div>
              <div className="text-center">
                <div className="bg-therapeutic-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Assessment
                </h3>
                <p className="text-gray-600">
                  Identifying target memories and establishing baseline measurements
                </p>
              </div>
              <div className="text-center">
                <div className="bg-therapeutic-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Processing
                </h3>
                <p className="text-gray-600">
                  Using bilateral stimulation to process traumatic memories
                </p>
              </div>
              <div className="text-center">
                <div className="bg-therapeutic-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Integration
                </h3>
                <p className="text-gray-600">
                  Reinforcing positive beliefs and integrating healing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-therapeutic-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="mx-auto h-12 w-12 mb-6 opacity-90" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              EMDR therapy can help you move past trauma and reclaim your life. Our certified EMDR therapists provide a safe, supportive environment for healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" variant="secondary">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-therapeutic-primary">
                  Ask About EMDR
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}