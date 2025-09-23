"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, CheckCircle, Clock, Calendar, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function TraumaTherapyPage() {
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
            <Heart className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trauma Therapy for Men</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized, evidence-based support for men who have experienced trauma. Heal from past experiences and build resilience in a safe, understanding environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Ask About Trauma Support
              </Button>
            </Link>
          </div>
        </div>

        {/* Understanding Trauma in Men */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Trauma in Men</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              Trauma affects men differently than it's often portrayed. Men may not recognize trauma responses or may express them in ways that are misunderstood. Our approach recognizes the unique ways men experience and cope with trauma, providing specialized support for healing and recovery.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Types of Trauma</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Childhood abuse or neglect
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Military or combat trauma
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Accidents or injuries
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Workplace trauma
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Witnessing violence
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Common Responses</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Emotional numbness or detachment
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Hypervigilance or being on edge
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Anger or irritability
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Sleep problems or nightmares
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Avoidance of triggers
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Impact Areas</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Relationships and intimacy
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Work performance and focus
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Self-esteem and identity
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Physical health
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Substance use patterns
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Trauma-Informed Approach */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 text-therapeutic-primary mr-3" />
              Our Trauma-Informed Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Safety and Stabilization</h4>
                <p className="text-gray-700">Establish safety, develop coping skills, and stabilize symptoms before processing traumatic memories.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Trauma Processing</h4>
                <p className="text-gray-700">When ready, safely process traumatic memories using evidence-based techniques at your pace.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Integration and Growth</h4>
                <p className="text-gray-700">Integrate healing experiences, build resilience, and reconnect with your values and relationships.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Post-Traumatic Growth</h4>
                <p className="text-gray-700">Move beyond survival to discover new strengths, perspectives, and possibilities for your life.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Evidence-Based Approaches */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Evidence-Based Trauma Therapies We Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cognitive Processing Therapy (CPT)</h4>
                <p className="text-gray-700 text-sm">Helps you examine and challenge unhelpful thoughts about the trauma and develop balanced thinking patterns.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Eye Movement Desensitization and Reprocessing (EMDR)</h4>
                <p className="text-gray-700 text-sm">Processes traumatic memories through bilateral stimulation to reduce their emotional impact.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Prolonged Exposure Therapy</h4>
                <p className="text-gray-700 text-sm">Gradually and safely confronts trauma-related memories and situations to reduce avoidance and anxiety.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Somatic Approaches</h4>
                <p className="text-gray-700 text-sm">Addresses trauma stored in the body through awareness and regulation of physical sensations.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Men-Specific Considerations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Trauma in Men's Context</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Common Challenges for Men</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Difficulty identifying and expressing emotions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Pressure to "be strong" and handle things alone
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Shame about being a "victim"
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Using anger to mask other emotions
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Our Approach Addresses</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Redefining strength to include seeking help
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Practical coping strategies that feel manageable
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Moving from survival to growth and purpose
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Restoring sense of control and agency
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Expect in Trauma Therapy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What to Expect in Trauma Therapy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">You Control the Pace</h4>
              <p className="text-gray-700 text-sm">Healing happens at your speed. We won't push you to discuss details before you're ready.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Focus on Strengths</h4>
              <p className="text-gray-700 text-sm">We emphasize your resilience and survival skills while building new coping strategies.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Practical Tools</h4>
              <p className="text-gray-700 text-sm">Learn concrete techniques for managing triggers, emotions, and daily challenges.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Collaborative Approach</h4>
              <p className="text-gray-700 text-sm">You're the expert on your experience. We work together to find what helps you heal.</p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions about Trauma Therapy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Do I have to relive traumatic experiences in therapy?</h4>
              <p className="text-gray-700">A: No. We focus first on building coping skills and stability. Any trauma processing is done gradually, safely, and only when you're ready.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can childhood trauma still affect me as an adult?</h4>
              <p className="text-gray-700">A: Absolutely. Childhood trauma can have lasting effects on relationships, self-esteem, and emotional regulation. It's never too late to address these impacts.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: What if I'm not sure if what I experienced counts as trauma?</h4>
              <p className="text-gray-700">A: If an experience continues to impact your life, it's worth exploring in therapy. We can help you understand and process your experiences without labels.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: How long does trauma therapy take?</h4>
              <p className="text-gray-700">A: This varies greatly. Some people notice improvements within a few months, while others benefit from longer-term support. We'll work at your pace.</p>
            </div>
          </CardContent>
        </Card>

        {/* PTSD and Complex Trauma */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>PTSD and Complex Trauma Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">PTSD Symptoms We Address</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Intrusive memories or flashbacks</li>
                  <li>• Nightmares and sleep disturbances</li>
                  <li>• Avoidance of trauma reminders</li>
                  <li>• Negative changes in mood and thinking</li>
                  <li>• Hypervigilance and startle responses</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Complex Trauma Effects</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Difficulty trusting others</li>
                  <li>• Emotional regulation challenges</li>
                  <li>• Negative self-concept</li>
                  <li>• Relationship difficulties</li>
                  <li>• Dissociation or disconnection</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crisis Information */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-red-900 mb-3 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Crisis Support
          </h3>
          <p className="text-red-800 mb-4">
            If you're experiencing a mental health crisis or having thoughts of self-harm:
          </p>
          <div className="space-y-2 text-red-800">
            <div>• <strong>Emergency:</strong> Call 911</div>
            <div>• <strong>Crisis Line:</strong> Call or text 9-8-8 (24/7)</div>
            <div>• <strong>Talk Suicide Canada:</strong> 1-833-456-4566 (24/7)</div>
            <div>• <strong>Crisis Text Line:</strong> Text HOME to 686868</div>
          </div>
        </div>

        {/* When to Seek Help */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>When to Seek Trauma Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Consider trauma therapy if you're experiencing:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Persistent memories or flashbacks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Avoiding people, places, or activities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Sleep problems or nightmares</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Relationship difficulties due to past experiences</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Feeling disconnected or numb</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Hypervigilance or feeling constantly on edge</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Healing Journey?</h2>
            <p className="text-gray-700 mb-6">
              Healing from trauma is possible. Our specialized, trauma-informed approach provides the safety and support you need to process your experiences and reclaim your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  <Clock className="mr-2 h-5 w-5" />
                  Ask About Trauma Support
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