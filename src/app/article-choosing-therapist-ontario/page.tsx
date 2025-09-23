"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, User, ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function ChoosingTherapistOntarioArticle() {
  return (
    <div className="min-h-screen bg-white">
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
              Getting Started
            </span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              10 min read
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Resolve Men's Therapy Team
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            How to Choose a Therapist in Ontario: A Guide for Men
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Finding the right therapist can feel overwhelming. This guide breaks down everything you need to know to find a therapist who understands your needs and can help you make real progress.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {/* Understanding Your Options */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Understanding Your Options in Ontario</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Ontario has several types of mental health professionals, each with different training and expertise. Understanding these differences can help you choose the right fit.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Registered Psychotherapists (RP)</h4>
                  <p className="text-gray-700">Licensed by the CRPO, provide talk therapy, often covered by insurance.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Psychologists</h4>
                  <p className="text-gray-700">Hold doctoral degrees, can provide therapy and assessments.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Social Workers</h4>
                  <p className="text-gray-700">Provide therapy, often with expertise in social systems.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Psychiatrists</h4>
                  <p className="text-gray-700">Medical doctors who can prescribe medication and provide therapy.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What to Look For */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">What to Look for in a Therapist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialization and Experience</h4>
                  <p className="text-gray-700">Look for therapists who have experience working with men or specialize in the issues you're facing (such as anxiety, depression, ADHD, or relationship issues).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Therapeutic Approach</h4>
                  <p className="text-gray-700">Common approaches include CBT (practical, goal-oriented), Solution-Focused Therapy, and Mindfulness-Based Approaches. Research suggests that the approach matters less than finding someone you connect with.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Communication Style</h4>
                  <p className="text-gray-700">Find someone who communicates in a way that feels comfortable to you. Some men prefer direct, practical approaches, while others benefit from more exploratory conversations.</p>
                </div>
              </div>
              <div className="bg-therapeutic-primary/5 border-l-4 border-therapeutic-primary p-6 mt-6">
                <blockquote className="text-lg italic text-gray-700">
                  "The most important factor in therapy success is the relationship between you and your therapist."
                </blockquote>
              </div>
            </CardContent>
          </Card>

          {/* Practical Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Practical Steps to Find a Therapist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Start with Your Insurance</h4>
                    <p className="text-gray-700">Check what your plan covers and if you need a referral. Many extended health plans cover Registered Psychotherapists.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Use Professional Directories</h4>
                    <p className="text-gray-700">The CRPO website has a directory of registered therapists. You can search by location and specialization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ask for Referrals</h4>
                    <p className="text-gray-700">Your family doctor, trusted friends, or colleagues may have recommendations. Employee Assistance Programs (EAPs) can also provide referrals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Research Online</h4>
                    <p className="text-gray-700">Read therapist websites to get a feel for their approach and whether they specialize in men's issues or your specific concerns.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Schedule Consultations</h4>
                    <p className="text-gray-700">Most therapists offer free initial calls. This helps you assess fit before committing to sessions.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Questions to Ask */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Questions to Ask During Your Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Don't be afraid to interview potential therapists. These questions can help you determine if they're a good fit:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <p className="text-gray-700">What is your experience working with men?</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <p className="text-gray-700">What approach do you typically use?</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <p className="text-gray-700">How do you measure progress in therapy?</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <p className="text-gray-700">What can I expect in the first few sessions?</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <p className="text-gray-700">What are your fees and confidentiality policy?</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <p className="text-gray-700">How do you handle missed appointments or cancellations?</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Are you available for crisis support between sessions?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Red Flags */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
                Red Flags to Watch For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                While most therapists are ethical and competent, here are some warning signs to be aware of:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Making promises about specific treatment outcomes or unrealistic success claims</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Not being registered with a professional college (CRPO, CPO, etc.)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Pushing you to make decisions you're not ready for</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Not respecting your boundaries or confidentiality</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Seeming judgmental or not understanding your perspective</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Not being clear about their qualifications or approach</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Making the Decision */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Making the Decision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Trust your instincts. The right therapist should feel like someone you can work with—someone who understands you and makes you feel heard without judgment.
              </p>
              <p className="text-gray-700 mb-4">
                It's okay to try a few sessions before deciding if it's a good fit. Most therapists understand that finding the right match is important for successful outcomes.
              </p>
              <p className="text-gray-700">
                Remember, seeking therapy is a sign of strength, not weakness. Taking the time to find the right therapist is an investment in your mental health and overall well-being.
              </p>
            </CardContent>
          </Card>

          {/* Cost Considerations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Understanding Costs and Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Insurance Coverage</h4>
                  <p className="text-gray-700">Many extended health plans cover therapy with Registered Psychotherapists. Check your coverage limits and whether you need a referral.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Employee Assistance Programs (EAP)</h4>
                  <p className="text-gray-700">Many employers offer EAP services that provide free short-term counseling.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sliding Scale Fees</h4>
                  <p className="text-gray-700">Some therapists offer reduced rates based on income. Don't hesitate to ask about this option.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tax Deductions</h4>
                  <p className="text-gray-700">Therapy costs may be tax-deductible as medical expenses. Keep your receipts and consult a tax professional.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Resources */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Ready to Start Your Search?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Finding the right therapist is an important step in your mental health journey. If you're looking for specialized support for men in Ontario, we're here to help you determine if our approach is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-consultation">
                <Button className="w-full sm:w-auto bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="w-full sm:w-auto">
                  Learn About Our Approach
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