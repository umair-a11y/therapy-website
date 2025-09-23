import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CheckCircle, Clock, Calendar, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function DepressionSupportPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sun className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Depression Support for Men</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depression often looks different in men. We provide practical, evidence-based support to help you recognize, understand, and effectively manage depression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/assessment/depression">
              <Button size="lg" variant="outline">
                Take Depression Assessment
              </Button>
            </Link>
          </div>
        </div>

        {/* Understanding Depression in Men */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Depression in Men</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              Men often experience and express depression differently than women. Traditional symptoms like sadness and crying may be less common, while irritability, anger, and physical symptoms are more prominent. This can lead to depression being overlooked or misdiagnosed in men.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Emotional Signs</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Increased irritability or anger
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Feeling empty or numb
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Loss of interest in activities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Feeling hopeless or trapped
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Anxiety or restlessness
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Physical Symptoms</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Chronic fatigue or low energy
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Sleep problems (too much or too little)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Headaches or body aches
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Changes in appetite
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Digestive problems
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Behavioral Changes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Isolating from friends and family
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Increased alcohol or substance use
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Working excessively or not at all
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Reckless or aggressive behavior
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Avoiding responsibilities
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Depression-Focused Approach */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Cloud className="h-6 w-6 text-therapeutic-primary mr-3" />
              Our Evidence-Based Approach to Depression
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Assessment</h4>
                <p className="text-gray-700">We assess your specific depression symptoms, triggers, and how they impact your daily life and relationships.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                <p className="text-gray-700">Learn to identify and change negative thought patterns that contribute to depression and develop more balanced thinking.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Behavioral Activation</h4>
                <p className="text-gray-700">Gradually re-engage with meaningful activities and rebuild motivation through structured, achievable goals.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Practical Mood Management</h4>
                <p className="text-gray-700">Develop a personalized toolkit of strategies for managing depression symptoms in your daily life.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Types of Depression We Address */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Types of Depression We Address</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Major Depression</h4>
                  <p className="text-gray-700 text-sm">Persistent low mood, loss of interest, and significant impact on daily functioning.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Persistent Depressive Disorder</h4>
                  <p className="text-gray-700 text-sm">Chronic, long-term depression that may be less severe but lasts for years.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Seasonal Depression (SAD)</h4>
                  <p className="text-gray-700 text-sm">Depression that occurs at specific times of year, typically fall and winter months.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Work-Related Depression</h4>
                  <p className="text-gray-700 text-sm">Depression connected to job stress, burnout, workplace conflicts, or career dissatisfaction.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Situational Depression</h4>
                  <p className="text-gray-700 text-sm">Depression triggered by specific life events like loss, divorce, health issues, or major changes.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Depression with Anxiety</h4>
                  <p className="text-gray-700 text-sm">When depression co-occurs with anxiety symptoms, requiring integrated treatment approaches.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Strategies You'll Learn */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Practical Strategies You'll Learn</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mood Monitoring & Awareness</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Tracking mood patterns and triggers</li>
                    <li>• Recognizing early warning signs</li>
                    <li>• Understanding the depression cycle</li>
                    <li>• Identifying personal risk factors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Thought Restructuring</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Identifying negative thought patterns</li>
                    <li>• Challenging depressive thinking</li>
                    <li>• Developing balanced perspectives</li>
                    <li>• Stopping rumination cycles</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Behavioral Activation</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Scheduling meaningful activities</li>
                    <li>• Building momentum through small wins</li>
                    <li>• Re-engaging with hobbies and interests</li>
                    <li>• Maintaining social connections</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lifestyle Interventions</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Sleep hygiene for mood stability</li>
                    <li>• Exercise as natural antidepressant</li>
                    <li>• Nutrition and mood connection</li>
                    <li>• Stress management techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Depression Assessment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Depression Check-In</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Wondering if you might be experiencing depression? Our confidential assessment uses the PHQ-9, a clinically validated tool for measuring depression severity.
            </p>
            <div className="bg-therapeutic-primary/5 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Patient Health Questionnaire (PHQ-9)</h4>
                  <p className="text-gray-600 text-sm">9 questions • Takes 3-4 minutes • Completely confidential</p>
                </div>
                <Link href="/assessment/depression">
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
            <CardTitle>Frequently Asked Questions about Depression Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: How long does it take to recover from depression?</h4>
              <p className="text-gray-700">A: Recovery varies by individual, but many men see significant improvement within 8-12 weeks of consistent therapy. Some notice changes earlier, while others may need longer-term support.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can therapy help if I'm taking antidepressants?</h4>
              <p className="text-gray-700">A: Yes. Therapy and medication often work better together than either alone. We'll coordinate with your doctor and focus on psychological strategies that complement your medication.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: What if I don't feel comfortable talking about emotions?</h4>
              <p className="text-gray-700">A: That's normal for many men. We focus on practical strategies and behaviors first, and emotional processing happens naturally as you feel more comfortable.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can you help with work-related depression?</h4>
              <p className="text-gray-700">A: Absolutely. We address workplace stress, career dissatisfaction, and burnout as significant contributors to depression, with practical strategies for your work environment.</p>
            </div>
          </CardContent>
        </Card>

        {/* Crisis Support */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-red-900 mb-3 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            If You're Having Thoughts of Self-Harm
          </h3>
          <p className="text-red-800 mb-4">
            If you're having thoughts of suicide or self-harm, please reach out immediately:
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
            <CardTitle>When to Seek Professional Help</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Consider professional depression support if you're experiencing:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Persistent low mood for two weeks or more</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Loss of interest in activities you used to enjoy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Significant changes in sleep or appetite</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Difficulty concentrating or making decisions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Increased irritability or anger</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Feeling hopeless or worthless</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Overcome Depression?</h2>
            <p className="text-gray-700 mb-6">
              Depression is treatable, and you don't have to face it alone. Our evidence-based approach helps men understand and overcome depression with practical, effective strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Free Consultation
                </Button>
              </Link>
              <Link href="/assessment/depression">
                <Button size="lg" variant="outline">
                  <Clock className="mr-2 h-5 w-5" />
                  Take Depression Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}