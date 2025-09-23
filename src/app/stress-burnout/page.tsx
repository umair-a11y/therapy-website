"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, RefreshCw, CheckCircle, Clock, Calendar, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function StressBurnoutPage() {
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <RefreshCw className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Stress & Burnout Recovery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Break free from chronic stress and burnout. Learn practical strategies to manage work pressure, recover your energy, and build sustainable success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/assessment/stress">
              <Button size="lg" variant="outline">
                Take Stress Assessment
              </Button>
            </Link>
          </div>
        </div>

        {/* Understanding Stress and Burnout */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Stress and Burnout in Men</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many men push through stress until it becomes burnout—a state of physical, emotional, and mental exhaustion. Unlike occasional stress, burnout develops gradually and can significantly impact your health, relationships, and performance. Recognizing the signs early is crucial for recovery.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Physical Signs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Chronic fatigue and exhaustion
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Frequent headaches or muscle tension
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Sleep problems or insomnia
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Frequent illness or infections
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Digestive issues or appetite changes
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Emotional Signs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Feeling overwhelmed or trapped
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Cynicism or detachment
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Irritability or short temper
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Loss of motivation or enjoyment
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Anxiety or depression symptoms
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Performance Signs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Decreased productivity or focus
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Increased mistakes or forgetfulness
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Procrastination or avoidance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Isolation from colleagues
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Missing deadlines or meetings
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Recovery Approach */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Battery className="h-6 w-6 text-therapeutic-primary mr-3" />
              Our Stress & Burnout Recovery Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Assess Your Stress Load</h4>
                <p className="text-gray-700">Identify your specific stress sources, patterns, and how they impact your physical and mental health.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Immediate Stress Relief</h4>
                <p className="text-gray-700">Learn quick, effective techniques to manage acute stress and prevent it from building to overwhelming levels.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Build Sustainable Habits</h4>
                <p className="text-gray-700">Develop long-term strategies for managing workload, setting boundaries, and maintaining work-life balance.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Prevent Future Burnout</h4>
                <p className="text-gray-700">Create personalized systems to recognize warning signs early and maintain your well-being long-term.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Stress Sources for Men */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Stress Sources for Men</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Workplace Pressures</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Heavy workloads and tight deadlines</li>
                    <li>• Pressure to advance or provide financially</li>
                    <li>• Difficult bosses or workplace conflicts</li>
                    <li>• Job insecurity or career uncertainty</li>
                    <li>• Long hours and work-life imbalance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Financial Stress</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Supporting family or dependents</li>
                    <li>• Debt or financial obligations</li>
                    <li>• Economic uncertainty</li>
                    <li>• Retirement or future planning concerns</li>
                    <li>• Pressure to be the primary earner</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Relationship & Family</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Balancing work and family demands</li>
                    <li>• Relationship conflicts or divorce</li>
                    <li>• Parenting responsibilities and pressure</li>
                    <li>• Caring for aging parents</li>
                    <li>• Social expectations and roles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Expectations</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Perfectionism and high standards</li>
                    <li>• Fear of failure or disappointing others</li>
                    <li>• Pressure to "handle everything"</li>
                    <li>• Difficulty asking for help</li>
                    <li>• Imposter syndrome</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Stress Management Tools */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Practical Tools You'll Learn</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Immediate Stress Relief</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Box breathing and calming techniques</li>
                    <li>• Quick body scan and tension release</li>
                    <li>• Mindful breaks during the workday</li>
                    <li>• Emergency stress reset protocols</li>
                    <li>• Physical movement for stress release</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Time & Priority Management</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Effective prioritization systems</li>
                    <li>• Time-blocking for important tasks</li>
                    <li>• Delegation and saying no strategies</li>
                    <li>• Energy management vs. time management</li>
                    <li>• Building in recovery time</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Boundary Setting</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Work-life boundary strategies</li>
                    <li>• Communicating limits effectively</li>
                    <li>• Managing after-hours expectations</li>
                    <li>• Protected time for rest and recovery</li>
                    <li>• Technology boundaries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Long-term Resilience</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Building stress immunity habits</li>
                    <li>• Regular exercise and movement</li>
                    <li>• Sleep optimization strategies</li>
                    <li>• Nutrition for stress management</li>
                    <li>• Building support networks</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stress Assessment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Stress Check-In</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Wondering about your current stress levels? Our confidential assessment uses the Perceived Stress Scale (PSS-10), a validated tool for measuring stress impact.
            </p>
            <div className="bg-therapeutic-primary/5 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Perceived Stress Scale (PSS-10)</h4>
                  <p className="text-gray-600 text-sm">10 questions • Takes 3-4 minutes • Completely confidential</p>
                </div>
                <Link href="/assessment/stress">
                  <Button className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Recovery Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Recovery Process: What to Expect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Stage 1: Recognition & Relief (Weeks 1-4)</h4>
              <p className="text-gray-700 text-sm">Acknowledge the burnout, learn immediate stress relief techniques, and begin creating boundaries.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Stage 2: Rebuilding & Restructuring (Weeks 5-12)</h4>
              <p className="text-gray-700 text-sm">Develop sustainable systems, improve time management, and address underlying stress sources.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Stage 3: Prevention & Maintenance (Ongoing)</h4>
              <p className="text-gray-700 text-sm">Build long-term resilience, maintain healthy habits, and prevent future burnout episodes.</p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions about Stress & Burnout</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: How long does it take to recover from burnout?</h4>
              <p className="text-gray-700">A: Recovery varies, but most men see significant improvement within 3-6 months with consistent effort. Mild burnout may resolve faster, while severe cases may take longer.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can I recover without changing jobs?</h4>
              <p className="text-gray-700">A: Often, yes. We focus on strategies to manage your current situation more effectively. Sometimes workplace changes are necessary, but many men recover within their current roles.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Will stress management make me less productive?</h4>
              <p className="text-gray-700">A: Actually, the opposite. Effective stress management improves focus, decision-making, and sustained performance while preventing crashes and illness.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: What if my workplace culture doesn't support work-life balance?</h4>
              <p className="text-gray-700">A: We help you navigate challenging work environments and find ways to protect your well-being even in demanding cultures.</p>
            </div>
          </CardContent>
        </Card>

        {/* Warning Signs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
              When to Seek Professional Help
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Consider stress and burnout support if you're experiencing:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Chronic exhaustion that doesn't improve with rest</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Physical symptoms without medical cause</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Declining work performance despite effort</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Cynicism or detachment from work</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Relationship problems due to stress</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Loss of motivation or enjoyment in life</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Recover Your Energy and Balance?</h2>
            <p className="text-gray-700 mb-6">
              You don't have to accept chronic stress and burnout as normal. Our practical approach helps men recover their energy, improve performance, and build sustainable success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Free Consultation
                </Button>
              </Link>
              <Link href="/assessment/stress">
                <Button size="lg" variant="outline">
                  <Clock className="mr-2 h-5 w-5" />
                  Take Stress Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

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