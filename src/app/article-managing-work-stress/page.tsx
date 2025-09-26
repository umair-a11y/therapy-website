"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";
import { THERAPY_IMAGES, getUnsplashImage } from "@/lib/therapy-images";
import Image from "next/image";

export default function ManagingWorkStressArticle() {
  return (
    <Layout>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Navigating High-Pressure Careers: 5 Actionable Strategies for Managing Stress in Ontario",
          author: { "@type": "Person", name: "Umair Gill" },
          publisher: { "@type": "Organization", name: "Resolve Men's Therapy" },
          mainEntityOfPage: `${SITE_URL}/article-managing-work-stress`,
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString(),
          image: `${SITE_URL}/api/og?title=${encodeURIComponent("Managing Work Stress")}`,
          url: `${SITE_URL}/article-managing-work-stress`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE_URL}/articles` },
            { "@type": "ListItem", position: 3, name: "Managing Work Stress", item: `${SITE_URL}/article-managing-work-stress` },
          ],
        }}
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back to Articles */}
        <div className="mb-8">
          <Link href="/articles" className="inline-flex items-center text-therapeutic-primary hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-therapeutic-primary/10 text-therapeutic-primary">
              Stress Management
            </span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              8 min read
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Resolve Men's Therapy Team
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Navigating High-Pressure Careers: 5 Actionable Strategies for Managing Stress in Ontario
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            This guide offers five practical, evidence-based strategies to help you manage workplace stress, prevent burnout, and reclaim your work-life balance.
          </p>

          {/* Featured Image */}
          <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
            <Image
              src={getUnsplashImage(THERAPY_IMAGES.articles.workStress, { w: 800, h: 400 })}
              alt="Managing work stress and achieving work-life balance"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {/* Strategy 1 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">1. Master the "Mindful Transition"</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Create a ritual to signal the end of your workday.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Define a "Closing" Ritual</h4>
                  <p className="text-gray-700">Plan the next day, tidy your desk, close your laptop.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Change Your Environment</h4>
                  <p className="text-gray-700">If working from home, move to a different room. Use your commute to decompress.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Practice a 2-Minute Reset</h4>
                  <p className="text-gray-700">Take two minutes to breathe and be present before evening activities.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategy 2 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">2. Reclaim Your Time with Strategic Boundaries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">The "Hard Stop" and "Buffer Zones"</h4>
                  <p className="text-gray-700">Implement a "hard stop" time for your day. Schedule 15-30 minute buffers between meetings.</p>
                </div>
              </div>
              <div className="bg-therapeutic-primary/5 border-l-4 border-therapeutic-primary p-4 mt-6">
                <blockquote className="text-lg italic text-gray-700">
                  "Your calendar should reflect your priorities, not just other people's demands."
                </blockquote>
              </div>
            </CardContent>
          </Card>

          {/* Strategy 3 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">3. Shift from Reactive to Proactive Task Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">The Eisenhower Matrix</h4>
                  <p className="text-gray-700">Categorize tasks by urgency and importance. Focus on what's important.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Eat the Frog</h4>
                  <p className="text-gray-700">Tackle your most challenging task first thing in the morning.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategy 4 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">4. Fuel Your Resilience Outside of Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Physical Activity</h4>
                  <p className="text-gray-700">Even a 20-minute walk can reduce stress hormones.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Social Connection</h4>
                  <p className="text-gray-700">Make non-work social connection a priority.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sleep</h4>
                  <p className="text-gray-700">Prioritize 7-8 hours of quality sleep.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategy 5 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">5. Know When to Seek Professional Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                If stress is consistently impacting your health, relationships, or job performance, therapy can provide a confidential space to develop personalized strategies.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Related Resources */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Take the Next Step</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              If workplace stress is affecting your life, you don't have to handle it alone. Our specialized support for men can help you develop personalized strategies for managing stress and preventing burnout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment/stress">
                <Button variant="outline" className="w-full sm:w-auto">
                  Take Stress Assessment
                </Button>
              </Link>
              <Link href="/book-consultation">
                <Button className="w-full sm:w-auto bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* More Articles */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/article-recognizing-depression" className="hover:text-therapeutic-primary transition-colors">
                    It's Not Just Anger: Recognizing the Hidden Signs of Depression in Men
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Depression in men often looks different. Learn to recognize the subtle signs and understand the steps to getting support.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/article-choosing-therapist-ontario" className="hover:text-therapeutic-primary transition-colors">
                    How to Choose a Therapist in Ontario: A Guide for Men
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Finding the right therapist can feel overwhelming. This guide helps you understand your options and find the right fit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

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
    </Layout>
  );
}
