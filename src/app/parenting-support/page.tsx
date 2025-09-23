"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Calendar } from "lucide-react";
import Link from "next/link";

export default function ParentingSupport() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heart className="mx-auto h-16 w-16 text-therapeutic-primary mb-6" />
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Parenting Support
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Support for fathers and new parents navigating parenting challenges
              </p>
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Session
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Professional Parenting Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our CRPO registered therapists provide specialized support to help men with parenting support challenges.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-therapeutic-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Support?
            </h2>
            <Link href="/book-consultation">
              <Button size="lg" variant="secondary">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}