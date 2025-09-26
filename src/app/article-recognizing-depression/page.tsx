"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, User, ArrowLeft, AlertTriangle } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export default function RecognizingDepressionArticle() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "It's Not Just Anger: Recognizing the Hidden Signs of Depression in Men",
          author: { "@type": "Person", name: "Umair Gill" },
          publisher: { "@type": "Organization", name: "Resolve Men's Therapy" },
          mainEntityOfPage: `${SITE_URL}/article-recognizing-depression`,
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString(),
          image: `${SITE_URL}/api/og?title=${encodeURIComponent("Recognizing Depression in Men")}`,
          url: `${SITE_URL}/article-recognizing-depression`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE_URL}/articles` },
            { "@type": "ListItem", position: 3, name: "Recognizing Depression", item: `${SITE_URL}/article-recognizing-depression` },
          ],
        }}
      />
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
              Mental Health
            </span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              6 min read
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Resolve Men's Therapy Team
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            It's Not Just Anger: Recognizing the Hidden Signs of Depression in Men
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            For many men, depression shows up differently than sadness. This article uncovers the less-obvious signs and clarifies the path to getting support.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {/* The Camouflage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">The Camouflage: How Men's Depression Can Appear</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Depression in men often doesn't look like the stereotypical image of sadness and tears. Instead, it can be disguised as other symptoms that are more socially acceptable for men to express.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Increased Irritability and Anger</h4>
                    <p className="text-gray-700">A short fuse or frequent frustration that seems disproportionate to the situation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Physical Ailments</h4>
                    <p className="text-gray-700">Chronic headaches, back pain, digestive issues without clear medical causes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Escapist or Risky Behavior</h4>
                    <p className="text-gray-700">Increased drinking, working excessively, gambling, or other behaviors to avoid feelings.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emotional Numbness</h4>
                    <p className="text-gray-700">Feeling "flat" or disconnected, losing interest in hobbies or sex.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">A Sense of Emptiness</h4>
                    <p className="text-gray-700">A persistent feeling that something is missing, even when life seems "fine" on paper.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Does It Look So Different? */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Why Does It Look So Different?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Societal expectations often discourage men from expressing vulnerability, leading them to channel emotional pain into more "acceptable" outlets like anger or physical symptoms. From a young age, many men learn that showing sadness or fear is weak, while anger is more tolerable.
              </p>
              <p className="text-gray-700 mb-6">
                This means that when men experience depression, they may not recognize it themselves—or others around them may miss the signs because they don't match the typical depression narrative.
              </p>
              <div className="bg-therapeutic-primary/5 border-l-4 border-therapeutic-primary p-6">
                <blockquote className="text-lg italic text-gray-700">
                  "Recognizing that your anger or physical pain might be a sign of depression is not a weakness. It's an act of profound self-awareness and strength."
                </blockquote>
              </div>
            </CardContent>
          </Card>

          {/* Common Misconceptions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Breaking Down Common Misconceptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Myth: "Real men don't get depressed"</h4>
                  <p className="text-gray-700">Truth: Depression affects men of all backgrounds, including successful professionals, athletes, and leaders. It's a medical condition, not a character flaw.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Myth: "If I can still work, I can't be depressed"</h4>
                  <p className="text-gray-700">Truth: Many men with depression continue to function at work while struggling internally. High-functioning depression is real and valid.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Myth: "I should be able to handle this on my own"</h4>
                  <p className="text-gray-700">Truth: Seeking help demonstrates wisdom and strength. Even the most capable people benefit from professional support during difficult times.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Path Forward */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">The Path Forward: Taking Action</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                If you recognize some of these signs in yourself, taking action is a sign of strength, not weakness. Here's how to move forward:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Acknowledge It</h4>
                    <p className="text-gray-700">Admit to yourself that it's more than just stress. Recognition is the first step toward healing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Talk to Someone</h4>
                    <p className="text-gray-700">Start with a trusted partner, friend, or family member. Sometimes just saying it out loud can provide relief.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Consider a Check-In</h4>
                    <p className="text-gray-700">Use a confidential tool like our Mood Check-In to better understand your symptoms and their severity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Seek Professional Support</h4>
                    <p className="text-gray-700">Therapy offers a safe space to build practical skills and develop strategies for managing depression effectively.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warning Signs */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-red-900 mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              When to Seek Immediate Help
            </h3>
            <p className="text-red-800 mb-4">
              If you're experiencing thoughts of self-harm or suicide, please reach out immediately:
            </p>
            <div className="space-y-2 text-red-800">
              <div>• <strong>Emergency:</strong> Call 911</div>
              <div>• <strong>Crisis Line:</strong> Call or text 9-8-8 (24/7)</div>
              <div>• <strong>Talk Suicide Canada:</strong> 1-833-456-4566 (24/7)</div>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Take the Next Step</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              If you recognize signs of depression in yourself, remember that help is available and recovery is possible. Our specialized approach for men provides practical tools and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment/depression">
                <Button variant="outline" className="w-full sm:w-auto">
                  Take Depression Assessment
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
                  <Link href="/article-managing-work-stress" className="hover:text-therapeutic-primary transition-colors">
                    Navigating High-Pressure Careers: 5 Actionable Strategies for Managing Stress
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Learn five practical, evidence-based strategies to regain control and improve your work-life balance.
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
    </div>
  );
}
