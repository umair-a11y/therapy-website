import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, CheckCircle, Clock, Calendar, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function ADHDSupportPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ADHD Support for Men</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized support for men navigating ADHD challenges. We focus on practical strategies that actually work for your brain and your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/assessment/adhd">
              <Button size="lg" variant="outline">
                Take ADHD Assessment
              </Button>
            </Link>
          </div>
        </div>

        {/* Understanding ADHD in Men */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding ADHD in Men</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              ADHD in men often goes undiagnosed or is misunderstood. Many men develop coping strategies that mask symptoms, leading to late diagnosis. Our approach recognizes that ADHD isn't a character flaw—it's a neurological difference that requires specific strategies and support.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Common Signs in Men:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Difficulty prioritizing tasks
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Procrastination on important projects
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Easily overwhelmed by choices
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Hyperfocus on interests while neglecting responsibilities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Restlessness or feeling "driven by a motor"
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Workplace Challenges:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Time management struggles
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Difficulty with organization systems
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Interrupting colleagues or meetings
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Forgetting deadlines or appointments
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Feeling restless during long meetings
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our ADHD-Focused Approach */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-6 w-6 text-therapeutic-primary mr-3" />
              Our ADHD-Focused Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">ADHD Assessment & Understanding</h4>
                <p className="text-gray-700">We start with a comprehensive understanding of your specific ADHD presentation and how it impacts your daily life.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Practical Systems & Tools</h4>
                <p className="text-gray-700">We focus on building simple, sustainable systems that work with your ADHD brain, not against it.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Strength-Based Perspective</h4>
                <p className="text-gray-700">We help you identify and leverage your ADHD strengths like creativity, hyperfocus, and innovative thinking.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Real-World Practice</h4>
                <p className="text-gray-700">Between sessions, you'll practice specific strategies in your actual work and life situations.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Strategies We Explore */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Practical Strategies We Explore</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Time & Task Management</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Time-blocking techniques that actually work</li>
                    <li>• Breaking large projects into manageable chunks</li>
                    <li>• Using timers and external cues effectively</li>
                    <li>• Building in buffer time for transitions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Focus & Attention</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Creating distraction-free work environments</li>
                    <li>• Using hyperfocus periods strategically</li>
                    <li>• Techniques for sustaining attention</li>
                    <li>• Managing overwhelm and decision fatigue</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Organization Systems</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Simple, visual organization methods</li>
                    <li>• Digital tools that complement your brain</li>
                    <li>• Reducing clutter and mental load</li>
                    <li>• Creating sustainable routines</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emotional Regulation</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Managing frustration and overwhelm</li>
                    <li>• Dealing with rejection sensitivity</li>
                    <li>• Building self-compassion</li>
                    <li>• Communicating needs effectively</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ADHD Assessment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick ADHD Check-In</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Not sure if ADHD might be affecting your life? Our confidential ADHD assessment can help provide clarity. This tool uses the ASRS-6, a validated screening tool for adult ADHD.
            </p>
            <div className="bg-therapeutic-primary/5 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adult ADHD Self-Report Scale (ASRS-6)</h4>
                  <p className="text-gray-600 text-sm">6 questions • Takes 2-3 minutes • Completely confidential</p>
                </div>
                <Link href="/assessment/adhd">
                  <Button className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                    Take Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions about ADHD Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can you help if I'm not officially diagnosed with ADHD?</h4>
              <p className="text-gray-700">A: Absolutely. Many men suspect they have ADHD but haven't been formally diagnosed. We can work with you regardless of diagnosis status and help you understand your patterns.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Do you prescribe ADHD medication?</h4>
              <p className="text-gray-700">A: As psychotherapists, we don't prescribe medication, but we can coordinate with your doctor or psychiatrist and help you develop strategies that complement any medication you're taking.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: How is ADHD therapy different from regular therapy?</h4>
              <p className="text-gray-700">A: ADHD-focused therapy is more structured, practical, and includes specific strategies for executive functioning challenges. We also move at a pace that works for ADHD brains.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can ADHD support help with work performance?</h4>
              <p className="text-gray-700">A: Yes. Many clients see improvements in productivity, time management, and workplace relationships. We focus heavily on practical workplace strategies.</p>
            </div>
          </CardContent>
        </Card>

        {/* Warning Signs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
              When to Seek Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Consider ADHD support if you're experiencing:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Chronic procrastination affecting work or relationships</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Feeling overwhelmed by daily tasks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Difficulty completing projects you start</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Time management struggles despite trying many systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Feeling like you're not reaching your potential</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Relationship issues related to attention or organization</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work with Your ADHD Brain?</h2>
            <p className="text-gray-700 mb-6">
              Stop fighting against your brain and start working with it. Our ADHD-focused approach helps you build on your strengths while developing practical strategies for daily challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Free Consultation
                </Button>
              </Link>
              <Link href="/assessment/adhd">
                <Button size="lg" variant="outline">
                  <Clock className="mr-2 h-5 w-5" />
                  Take ADHD Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}