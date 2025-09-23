"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Users, Shield, Heart, Calendar, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";

export default function GroupTherapy() {
  const benefits = [
    "Connect with other men facing similar challenges",
    "Learn from shared experiences and perspectives",
    "Practice communication skills in a safe environment",
    "Reduce feelings of isolation and shame",
    "Receive support and accountability",
    "Develop emotional awareness in group settings"
  ];

  const groups = [
    {
      name: "Men's Depression Support Group",
      schedule: "Wednesdays 7:00-8:30 PM",
      focus: "Managing depression symptoms and building coping strategies"
    },
    {
      name: "Anxiety Management Group",
      schedule: "Mondays 6:30-8:00 PM",
      focus: "Learning tools to manage anxiety and stress in daily life"
    },
    {
      name: "Father's Support Group",
      schedule: "Saturdays 10:00-11:30 AM",
      focus: "Navigating fatherhood challenges and building parenting skills"
    },
    {
      name: "Men's Relationship Skills Group",
      schedule: "Thursdays 7:00-8:30 PM",
      focus: "Developing healthy relationship patterns and communication"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Users className="mx-auto h-16 w-16 text-therapeutic-primary mb-6" />
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Group Therapy for Men
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with other men in a supportive environment designed to build skills, share experiences, and foster personal growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-consultation">
                  <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    Join a Group
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

        {/* What is Group Therapy */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  What is Group Therapy?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Group therapy brings together men who share similar challenges in a confidential, supportive environment led by a qualified therapist. It provides a unique opportunity to learn from others' experiences while developing your own coping strategies.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Many men find group therapy especially helpful because it reduces the stigma around seeking help and provides practical examples of how other men have overcome similar obstacles.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <Shield className="h-12 w-12 text-therapeutic-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Safe & Confidential
                </h3>
                <p className="text-gray-600">
                  All group sessions maintain strict confidentiality. Members agree to keep what's shared in the group private, creating a secure space for honest, meaningful conversations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Benefits of Group Therapy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why many men find group therapy uniquely valuable
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

        {/* Current Groups */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Current Group Offerings
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find a group that matches your needs and schedule
              </p>
            </div>

            <div className="space-y-6">
              {groups.map((group, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {group.name}
                      </h3>
                      <p className="text-gray-600 mb-4 lg:mb-0">
                        {group.focus}
                      </p>
                    </div>
                    <div className="flex items-center text-therapeutic-primary">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="font-medium">{group.schedule}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Groups are limited to 6-8 participants to ensure everyone has opportunity to participate and receive attention.
              </p>
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Group Assessment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How to Join a Group
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-therapeutic-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  Meet with our therapist to discuss your goals and determine which group would be the best fit for your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-therapeutic-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Group Placement
                </h3>
                <p className="text-gray-600">
                  We'll match you with an appropriate group based on your specific challenges and therapeutic goals.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-therapeutic-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Begin Sessions
                </h3>
                <p className="text-gray-600">
                  Start attending weekly group sessions and begin building connections with other group members.
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
              Ready to Connect and Grow?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join other men who are committed to personal growth and building healthier relationships. Our groups provide the support and tools you need to create positive change.
            </p>
            <Link href="/book-consultation">
              <Button size="lg" variant="secondary">
                <Calendar className="mr-2 h-5 w-5" />
                Start Your Group Journey
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}