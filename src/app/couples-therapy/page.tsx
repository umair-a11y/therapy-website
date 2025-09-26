"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { customProfessionalServiceJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/seo";

export default function CouplesTherapy() {
  const benefits = [
    "Improve communication patterns",
    "Resolve ongoing conflicts constructively",
    "Rebuild trust and intimacy",
    "Navigate major life transitions together",
    "Develop healthy relationship dynamics",
    "Learn effective problem-solving strategies"
  ];

  const approaches = [
    {
      name: "Emotionally Focused Therapy (EFT)",
      description: "Evidence-based approach focusing on emotional connection and attachment"
    },
    {
      name: "Gottman Method",
      description: "Research-based interventions to strengthen relationship foundations"
    },
    {
      name: "Cognitive Behavioral Therapy",
      description: "Address thought patterns and behaviors affecting the relationship"
    }
  ];

  return (
    <Layout>
      <JsonLd data={customProfessionalServiceJsonLd({ serviceType: "Couples Therapy", url: `${SITE_URL}/couples-therapy` })} />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heart className="mx-auto h-16 w-16 text-therapeutic-primary mb-6" />
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Couples Therapy for Men
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Strengthen your relationship through professional guidance designed specifically for men's needs and relationship challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-consultation">
                  <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Couples Session
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask Questions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Couples Therapy */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  What is Couples Therapy?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Couples therapy provides a safe, structured environment where both partners can address relationship challenges with professional guidance. Our approach focuses on helping men develop better communication skills and emotional awareness within their relationships.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Many men find couples therapy helpful for understanding their role in relationship dynamics and learning practical strategies for building stronger, more fulfilling partnerships.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <Users className="h-12 w-12 text-therapeutic-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Men-Focused Approach
                </h3>
                <p className="text-gray-600">
                  Our therapists understand the unique challenges men face in relationships and provide targeted support for developing emotional skills and communication patterns that strengthen partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How Couples Therapy Can Help
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Evidence-based approaches to strengthen your relationship
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

        {/* Treatment Approaches */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Treatment Approaches
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Evidence-based methods proven effective for relationship improvement
              </p>
            </div>

            <div className="space-y-8">
              {approaches.map((approach, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {approach.name}
                  </h3>
                  <p className="text-gray-600">
                    {approach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-therapeutic-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Strengthen Your Relationship?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Take the first step toward building a stronger, more connected partnership. Our CRPO registered therapists are here to support your journey.
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
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
