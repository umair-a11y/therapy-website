import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, CheckCircle, Clock, Calendar, AlertTriangle } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { customProfessionalServiceJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/seo";
import { HeroWithImage } from "@/components/sections/hero-with-image";
import { THERAPY_IMAGES } from "@/lib/therapy-images";

export default function AnxietySupportPage() {
  return (
    <Layout>
      <JsonLd data={customProfessionalServiceJsonLd({ serviceType: "Anxiety Therapy for Men", url: `${SITE_URL}/anxiety-support` })} />
      {/* Hero Section with Image */}
      <HeroWithImage
        title="Anxiety Support for Men"
        subtitle="Evidence-Based Treatment"
        description="Learn practical strategies to manage worry, panic, and social anxiety in a way that fits your life"
        imageUrl={THERAPY_IMAGES.services.anxiety}
        imageAlt="Anxiety management and stress relief"
        primaryButtonText="Book Free Consultation"
        primaryButtonHref="/book-consultation"
        secondaryButtonText="Take Anxiety Assessment"
        secondaryButtonHref="/assessment/anxiety"
        height="medium"
      />

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* How Anxiety Shows Up in Men */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How Anxiety Shows Up in Men</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              Anxiety in men often gets overlooked or misinterpreted. Men may be less likely to recognize or report anxiety symptoms, instead expressing them through irritability, anger, or physical symptoms. Our approach recognizes these different presentations and works with your specific experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Physical Symptoms</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Muscle tension or headaches
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Sleep difficulties
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Digestive issues
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Racing heart or chest tightness
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Feeling restless or on edge
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Emotional Signs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Irritability or anger outbursts
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Constant worry about work or family
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Fear of losing control
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Dread about upcoming events
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Feeling overwhelmed by responsibilities
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Behavioral Changes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Avoiding social situations
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Procrastinating on important tasks
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Overworking or perfectionism
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Increased alcohol or substance use
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Withdrawing from relationships
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Evidence-Based Approach */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="h-6 w-6 text-therapeutic-primary mr-3" />
              Our Evidence-Based Approach to Anxiety
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Understanding Your Anxiety Pattern</h4>
                <p className="text-gray-700">We identify your specific triggers, physical sensations, and thought patterns that contribute to anxiety.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cognitive Behavioral Techniques (CBT)</h4>
                <p className="text-gray-700">Learn to identify and challenge anxious thoughts, replacing them with more balanced, realistic thinking.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Exposure & Response Prevention</h4>
                <p className="text-gray-700">Gradually face feared situations in a controlled way to build confidence and reduce avoidance.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Practical Anxiety Management Tools</h4>
                <p className="text-gray-700">Develop a toolkit of breathing techniques, grounding exercises, and coping strategies you can use anywhere.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Types of Anxiety We Address */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Types of Anxiety We Address</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Generalized Anxiety</h4>
                  <p className="text-gray-700 text-sm">Persistent worry about multiple areas of life, difficulty controlling worry, physical tension.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Social Anxiety</h4>
                  <p className="text-gray-700 text-sm">Fear of judgment in social situations, workplace presentations, networking events, or dating.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Panic Attacks</h4>
                  <p className="text-gray-700 text-sm">Sudden episodes of intense fear, racing heart, shortness of breath, feeling of losing control.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Performance Anxiety</h4>
                  <p className="text-gray-700 text-sm">Anxiety around work performance, public speaking, sports, or other performance situations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Health Anxiety</h4>
                  <p className="text-gray-700 text-sm">Excessive worry about health, frequent checking of symptoms, fear of serious illness.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Work-Related Anxiety</h4>
                  <p className="text-gray-700 text-sm">Stress about job performance, workplace conflicts, career decisions, or work-life balance.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Tools You'll Learn */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Practical Tools You'll Learn</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">In-the-Moment Techniques</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Box breathing for immediate calm</li>
                    <li>• 5-4-3-2-1 grounding technique</li>
                    <li>• Progressive muscle relaxation</li>
                    <li>• Quick reset techniques for work</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Thought Management</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Identifying anxious thought patterns</li>
                    <li>• Reality-testing worried thoughts</li>
                    <li>• Developing balanced perspectives</li>
                    <li>• Stopping rumination cycles</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lifestyle Strategies</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Sleep hygiene for anxiety management</li>
                    <li>• Exercise as anxiety medicine</li>
                    <li>• Caffeine and alcohol considerations</li>
                    <li>• Building stress resilience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Long-term Management</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Creating an anxiety action plan</li>
                    <li>• Building confidence through exposure</li>
                    <li>• Preventing anxiety relapse</li>
                    <li>• Communicating needs to others</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Anxiety Assessment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Anxiety Check-In</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Wondering if anxiety might be affecting your life? Our confidential anxiety assessment uses the GAD-7, a clinically validated tool for measuring anxiety severity.
            </p>
            <div className="bg-therapeutic-primary/5 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Generalized Anxiety Disorder Scale (GAD-7)</h4>
                  <p className="text-gray-600 text-sm">7 questions • Takes 2-3 minutes • Completely confidential</p>
                </div>
                <Link href="/assessment/anxiety">
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
            <CardTitle>Frequently Asked Questions about Anxiety Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: How long does it take to see improvement in anxiety?</h4>
              <p className="text-gray-700">A: Many men notice some improvement within 4-6 sessions, with significant changes typically occurring within 8-12 sessions of consistent work.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can therapy help if I'm already taking anxiety medication?</h4>
              <p className="text-gray-700">A: Absolutely. Therapy and medication can work well together. We'll coordinate with your doctor and focus on skills that complement your medication.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: What if I have panic attacks during sessions?</h4>
              <p className="text-gray-700">A: We're trained to help you through panic attacks safely. In fact, learning to manage panic in a controlled environment can be very helpful for managing them elsewhere.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Do you use exposure therapy for anxiety?</h4>
              <p className="text-gray-700">A: When appropriate, yes. We use gradual, controlled exposure to help you build confidence. This is always done at your pace and with your full consent.</p>
            </div>
          </CardContent>
        </Card>

        {/* When to Seek Help */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
              When to Seek Professional Help
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Consider professional anxiety support if you're experiencing:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Anxiety interfering with work or relationships</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Avoiding important activities due to anxiety</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Physical symptoms without medical cause</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Constant worry that's hard to control</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Panic attacks or intense fear episodes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Sleep problems related to anxiety</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take Control of Your Anxiety?</h2>
            <p className="text-gray-700 mb-6">
              You don't have to let anxiety control your life. Our evidence-based approach helps men develop practical skills to manage anxiety and build lasting confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Free Consultation
                </Button>
              </Link>
              <Link href="/assessment/anxiety">
                <Button size="lg" variant="outline">
                  <Clock className="mr-2 h-5 w-5" />
                  Take Anxiety Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
