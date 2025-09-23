import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Shield, CheckCircle, Clock, Calendar, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function AngerManagementPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Anger Management for Men</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn practical tools to understand and manage your anger effectively. Develop healthier ways to express emotions and improve your relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/book-consultation">
              <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Ask About Anger Support
              </Button>
            </Link>
          </div>
        </div>

        {/* Understanding Anger */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Anger: It's Not the Enemy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              Anger is a normal, healthy emotion that signals when something feels wrong or threatening. The problem isn't feeling angry—it's what we do with that anger. Many men struggle with anger because they've never learned healthy ways to express and manage this powerful emotion.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Healthy Anger Serves To:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Signal when boundaries are crossed
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Motivate us to solve problems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Protect us from perceived threats
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Communicate important needs
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Problematic Anger Often Shows As:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Explosive outbursts or rage
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Passive-aggressive behavior
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Chronic irritability
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Verbal or physical aggression
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Anger Triggers for Men */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Anger Triggers for Men</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Work & Career Stress</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Workplace conflicts</li>
                  <li>• Feeling undervalued</li>
                  <li>• Job insecurity</li>
                  <li>• Overwhelming workload</li>
                  <li>• Lack of control or autonomy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Relationship Issues</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Communication breakdowns</li>
                  <li>• Feeling misunderstood</li>
                  <li>• Boundary violations</li>
                  <li>• Relationship conflicts</li>
                  <li>• Feeling controlled</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Personal Triggers</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Feeling disrespected</li>
                  <li>• Financial stress</li>
                  <li>• Traffic and delays</li>
                  <li>• Technology problems</li>
                  <li>• Perceived injustice</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Anger Management Approach */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Flame className="h-6 w-6 text-therapeutic-primary mr-3" />
              Our Practical Anger Management Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Identify Your Anger Patterns</h4>
                <p className="text-gray-700">Understand your personal triggers, early warning signs, and the situations that typically lead to anger.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Develop In-the-Moment Tools</h4>
                <p className="text-gray-700">Learn immediate strategies to cool down and think clearly when anger arises, preventing destructive reactions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Improve Communication Skills</h4>
                <p className="text-gray-700">Express your needs and concerns assertively without aggression, improving your relationships and outcomes.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-therapeutic-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Address Underlying Issues</h4>
                <p className="text-gray-700">Explore and resolve the deeper issues that fuel chronic anger, such as stress, depression, or past trauma.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Techniques You'll Learn */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Practical Techniques You'll Learn</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Immediate Cooling Strategies</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Deep breathing techniques</li>
                    <li>• Progressive muscle relaxation</li>
                    <li>• Time-out strategies</li>
                    <li>• Physical release techniques</li>
                    <li>• Grounding exercises</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cognitive Techniques</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Challenging angry thoughts</li>
                    <li>• Perspective-taking exercises</li>
                    <li>• Reframing situations</li>
                    <li>• Problem-solving strategies</li>
                    <li>• Developing empathy</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Communication Skills</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• "I" statements and assertive communication</li>
                    <li>• Active listening techniques</li>
                    <li>• Conflict resolution skills</li>
                    <li>• Setting healthy boundaries</li>
                    <li>• Expressing needs clearly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Long-term Management</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Stress management strategies</li>
                    <li>• Regular exercise and healthy habits</li>
                    <li>• Identifying and changing triggers</li>
                    <li>• Building emotional resilience</li>
                    <li>• Creating support systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warning Signs of Anger Problems */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
              When Anger Becomes a Problem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Consider anger management support if you're experiencing:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Frequent outbursts that damage relationships</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Anger that interferes with work or daily life</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Physical aggression or threats</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Regret or guilt after angry episodes</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Others seem afraid of your anger</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Chronic irritability or short temper</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Legal or professional consequences</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                  <span className="text-gray-700">Feeling out of control when angry</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Note */}
        <div className="bg-therapeutic-primary/5 border-l-4 border-therapeutic-primary p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">A Note on Domestic Violence</h3>
          <p className="text-gray-700">
            If your anger has led to physical violence or threats toward a partner or family member, specialized domestic violence intervention may be necessary. We can help connect you with appropriate resources and support.
          </p>
        </div>

        {/* FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions about Anger Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: How long does anger management therapy take?</h4>
              <p className="text-gray-700">A: Most men see significant improvement within 8-12 sessions, though this varies based on individual circumstances and the severity of anger issues.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Will therapy make me less assertive or competitive?</h4>
              <p className="text-gray-700">A: No. We help you channel assertiveness and competitiveness in healthy, productive ways while eliminating destructive anger patterns.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: Can anger management help with workplace issues?</h4>
              <p className="text-gray-700">A: Absolutely. We address workplace triggers and teach professional communication skills that can improve your work relationships and career prospects.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Q: What if my anger is justified?</h4>
              <p className="text-gray-700">A: Anger can be completely justified and still be expressed in healthier ways. We focus on effective expression rather than suppressing legitimate feelings.</p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits of Anger Management */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Benefits of Effective Anger Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Personal Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Reduced stress and better physical health
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Improved emotional regulation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Better sleep and mood stability
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Increased self-confidence and self-respect
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Relationship Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Stronger, more trusting relationships
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Better communication with family
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Improved workplace relationships
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-therapeutic-secondary mt-1 mr-3 flex-shrink-0" />
                    Being a positive role model for children
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take Control of Your Anger?</h2>
            <p className="text-gray-700 mb-6">
              You can learn to manage your anger effectively while still standing up for yourself and what matters to you. Our practical approach helps you express emotions in healthy, productive ways.
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
                  Ask About Anger Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}