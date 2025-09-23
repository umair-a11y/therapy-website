import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LifeBuoy, Shield, CheckCircle, Clock, Calendar, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function AddictionTherapyPage() {
  return (
    <Layout>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <LifeBuoy className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Addiction Support for Men</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confidential, judgment-free support for men struggling with substance use, behavioral addictions, and recovery challenges. Build lasting recovery with evidence-based strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Ask About Addiction Support
              </Button>
            </Link>
          </div>
        </div>

        {/* Understanding Addiction in Men */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Addiction in Men</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              Men often face unique challenges with addiction due to social expectations, stigma around seeking help, and patterns of self-medication for stress, depression, or trauma. Our approach recognizes that addiction is a complex condition, not a moral failing, and provides practical support for sustainable recovery.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Substance-Related Challenges</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Alcohol dependency or problem drinking
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Cannabis or marijuana dependency
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Prescription medication misuse
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Stimulant or other drug use
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Nicotine and tobacco dependency
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Behavioral Addictions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Gambling addiction
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Internet and gaming addiction
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Pornography or sex addiction
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Work addiction or workaholism
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-therapeutic-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Shopping or spending compulsions
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Addiction Support Approach */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 text-therapeutic-primary mr-3" />
              Our Evidence-Based Addiction Support Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Assessment</h4>
                <p className="text-gray-700">Understand your relationship with substances or behaviors, triggers, and the role addiction plays in your life.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Motivational Enhancement</h4>
                <p className="text-gray-700">Explore your motivation for change and resolve ambivalence about recovery at your own pace.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Relapse Prevention Skills</h4>
                <p className="text-gray-700">Develop practical strategies to identify high-risk situations and maintain your recovery goals.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Addressing Underlying Issues</h4>
                <p className="text-gray-700">Work on co-occurring mental health challenges like depression, anxiety, or trauma that may fuel addictive behaviors.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recovery Focus Areas */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Areas We Address in Recovery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Trigger Management</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Identifying personal triggers and high-risk situations</li>
                    <li>• Developing coping strategies for stress and emotions</li>
                    <li>• Creating alternative responses to triggers</li>
                    <li>• Building tolerance for uncomfortable feelings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lifestyle Changes</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Restructuring daily routines and habits</li>
                    <li>• Finding healthy recreational activities</li>
                    <li>• Improving physical health and wellness</li>
                    <li>• Building meaningful social connections</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Relationship Repair</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Rebuilding trust with family and friends</li>
                    <li>• Communication skills for recovery</li>
                    <li>• Setting boundaries in relationships</li>
                    <li>• Addressing relationship conflicts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Work & Career</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Managing work stress without substances</li>
                    <li>• Workplace recovery support strategies</li>
                    <li>• Career planning in recovery</li>
                    <li>• Dealing with professional consequences</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Treatment Approaches */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Evidence-Based Treatment Approaches We Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                <p className="text-gray-700 text-sm">Identify and change thought patterns and behaviors that contribute to addictive behaviors.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dialectical Behavior Therapy (DBT) Skills</h4>
                <p className="text-gray-700 text-sm">Learn distress tolerance, emotion regulation, and mindfulness skills for managing cravings and triggers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Acceptance and Commitment Therapy (ACT)</h4>
                <p className="text-gray-700 text-sm">Develop psychological flexibility and commit to values-based actions in recovery.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Motivational Interviewing</h4>
                <p className="text-gray-700 text-sm">Explore and strengthen your motivation for change while respecting your autonomy in recovery decisions.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stages of Recovery */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding the Recovery Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Early Recovery (0-90 days)</h4>
              <p className="text-gray-700 text-sm">Focus on stabilization, developing coping skills, and building initial support systems.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Sustained Recovery (3-12 months)</h4>
              <p className="text-gray-700 text-sm">Strengthen recovery skills, address underlying issues, and rebuild important relationships.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Long-term Recovery (1+ years)</h4>
              <p className="text-gray-700 text-sm">Maintain recovery gains, pursue personal growth, and support others in their recovery journey.</p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions about Addiction Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Do I need to be "ready to quit" to start therapy?</h4>
              <p className="text-gray-700">A: No. We meet you wherever you are in your relationship with substances or behaviors. Even if you're unsure about quitting, therapy can help you explore your options.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can therapy help if I've tried to quit before and failed?</h4>
              <p className="text-gray-700">A: Absolutely. Multiple attempts are normal in recovery. Each attempt teaches valuable lessons that can inform a more effective approach.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Do you work with people who aren't ready for complete abstinence?</h4>
              <p className="text-gray-700">A: Yes. We support harm reduction approaches and work toward goals that feel realistic and meaningful to you.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Will you coordinate with other addiction treatment providers?</h4>
              <p className="text-gray-700">A: Yes, we often work as part of a treatment team that may include doctors, psychiatrists, or addiction counselors to provide comprehensive care.</p>
            </div>
          </CardContent>
        </Card>

        {/* Crisis Resources */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-3 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Crisis Resources
          </h3>
          <p className="text-blue-800 mb-4">
            If you're experiencing a mental health or addiction crisis:
          </p>
          <div className="space-y-2 text-blue-800">
            <div>• <strong>Emergency:</strong> Call 911</div>
            <div>• <strong>Crisis Line:</strong> Call or text 9-8-8 (24/7)</div>
            <div>• <strong>ConnexOntario:</strong> 1-866-531-2600 (addiction services)</div>
            <div>• <strong>Drug and Alcohol Helpline:</strong> 1-800-565-8603 (24/7)</div>
          </div>
        </div>

        {/* When to Seek Help */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>When to Seek Professional Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Consider addiction support if you're experiencing:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Using substances to cope with stress or emotions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Difficulty controlling use despite consequences</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Relationship problems related to use</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Work or legal problems due to use</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Physical or mental health impacts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Previous unsuccessful quit attempts</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore Your Recovery Options?</h2>
            <p className="text-gray-700 mb-6">
              Recovery is possible, and you don't have to figure it out alone. Our non-judgmental approach provides the support and skills you need to build lasting change.
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
                  Ask About Addiction Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}