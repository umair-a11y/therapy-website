import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Users, Target, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-therapeutic-primary/20 via-therapeutic-secondary/10 to-therapeutic-accent/20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto bg-white/10 text-white border-white/20">
              Professional Mental Health Support
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white text-balance leading-tight">
              Support for Men&apos;s Mental Health
              <span className="block text-white/90">Professional Therapy in Ontario</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
              Professional therapy services designed for men across Ontario. Our goal is to support you in building
              resilience and developing healthier ways to manage life&apos;s challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/book-consultation">
                <Button size="lg" className="text-lg px-8 bg-white text-black hover:bg-white/90">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Learn Our Approach
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <p className="font-medium text-lg">Safe Space</p>
              <p className="text-sm text-muted-foreground">Judgment-free environment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="font-medium text-lg">Qualified Therapists</p>
              <p className="text-sm text-muted-foreground">CRPO registered professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <p className="font-medium text-lg">Evidence-Based</p>
              <p className="text-sm text-muted-foreground">Research-backed methods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <p className="font-medium text-lg">Insurance</p>
              <p className="text-sm text-muted-foreground">Coverage available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feelings Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-therapeutic-primary/30 via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-6xl font-bold text-white text-balance">If you find yourself feeling...</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white/90 text-lg">Lost</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white/90 text-lg">Stuck</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white/90 text-lg">Anxious</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white/90 text-lg">Disconnected</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white/90 text-lg">Isolated</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white/90 text-lg">Overwhelmed</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white/90 text-lg">Frustrated</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white/90 text-lg">Depressed</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 pt-8">
              <p className="text-2xl lg:text-3xl font-medium text-white">
                Men often wait until it&apos;s too late to get help.
              </p>
              <p className="text-xl text-white/80">It doesn&apos;t have to be this way.</p>
              <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                We help men across Ontario to better understand themselves, develop healthier relationships, and heal
                wounds from the past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Who We Help</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our therapy services are designed for men who are ready to take control of their mental health and make
              positive changes in their lives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Working Professionals</h3>
                <p className="text-muted-foreground">
                  Managing work stress, career transitions, burnout, and work-life balance challenges.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>High-stress careers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Leadership challenges</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Career transitions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Relationship Issues</h3>
                <p className="text-muted-foreground">
                  Building communication skills, resolving conflicts, and strengthening intimate relationships.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Communication difficulties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Intimacy issues</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Separation/divorce</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Life Transitions</h3>
                <p className="text-muted-foreground">
                  Navigating major life changes, new responsibilities, and identity shifts.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Becoming a father</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Mid-life transitions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Life restructuring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Mental Health</h3>
                <p className="text-muted-foreground">
                  Managing anxiety, depression, ADHD, and developing healthy coping strategies.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Anxiety & depression</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>ADHD support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Anger management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Trauma & Recovery</h3>
                <p className="text-muted-foreground">
                  Processing past experiences, PTSD, and building resilience for the future.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Childhood trauma</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>PTSD support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Addiction recovery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Personal Growth</h3>
                <p className="text-muted-foreground">
                  Building self-awareness, confidence, and developing meaningful life goals.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Self-confidence</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Emotional regulation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Goal achievement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-therapeutic-secondary/20 via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-white text-balance">Our Approach</h2>
              <p className="text-xl lg:text-2xl text-white/90 text-pretty max-w-4xl mx-auto leading-relaxed">
                We believe that seeking help is a sign of strength, not weakness. Our evidence-based approach is
                tailored to help you develop practical strategies and achieve meaningful change.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white">Understanding Approach</h3>
                <p className="text-white/80 leading-relaxed">
                  We provide a supportive environment where your experiences as a man are acknowledged and
                  respected without judgment.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white">Evidence-Based Methods</h3>
                <p className="text-white/80 leading-relaxed">
                  We use established therapeutic approaches including CBT, ACT, and solution-focused therapy
                  that are supported by clinical research.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white">Practical Strategies</h3>
                <p className="text-white/80 leading-relaxed">
                  Our goal is to help you develop practical coping strategies and tools that can be applied
                  to your daily life and personal goals.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white">Flexible Options</h3>
                <p className="text-white/80 leading-relaxed">
                  We offer both in-person and secure online therapy sessions to accommodate your preferences
                  and schedule across Ontario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-therapeutic-accent/20 via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-white text-balance">
                Welcome — taking the first step requires courage
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 text-pretty max-w-4xl mx-auto leading-relaxed">
                Resolve Men&apos;s Therapy was founded on the belief that you deserve specialized, understanding mental
                health support. Many men tell us they wish they had reached out sooner.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="text-lg px-8 py-4 bg-white text-black hover:bg-white/90">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/self-check/depression">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Take Self-Assessment
                </Button>
              </Link>
            </div>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re dealing with specific challenges or simply want to improve your overall well-being, our
              experienced team is here to help you on your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Get Started Today</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Ready to take the first step? We&apos;re here to support you on your journey to better mental health.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-muted-foreground">Speak directly with our team</p>
                <p className="font-medium">(647) 370-7622</p>
                <a href="tel:+16473707622">
                  <Button variant="outline" className="w-full bg-transparent">
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground">Get a response within 24 hours</p>
                <p className="font-medium">info@resolvemenstherapy.ca</p>
                <a href="mailto:info@resolvemenstherapy.ca">
                  <Button variant="outline" className="w-full bg-transparent">
                    Send Email
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Visit Us</h3>
                <p className="text-muted-foreground">Comfortable, private offices</p>
                <p className="font-medium">Toronto & Online Sessions</p>
                <Link href="/book-consultation">
                  <Button variant="outline" className="w-full bg-transparent">
                    Book Appointment
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">R</span>
                </div>
                <span className="font-semibold text-lg">Resolve Men&apos;s Therapy</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Professional mental health support designed specifically for men across Ontario.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/individual-therapy" className="hover:text-foreground">Individual Therapy</Link></li>
                <li><Link href="/couples-therapy" className="hover:text-foreground">Couples Counseling</Link></li>
                <li><Link href="/group-therapy" className="hover:text-foreground">Group Sessions</Link></li>
                <li><Link href="/services" className="hover:text-foreground">Online Therapy</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/self-check/depression" className="hover:text-foreground">Self-Assessment</Link></li>
                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground">Insurance & Pricing</Link></li>
                <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>(647) 370-7622</li>
                <li>info@resolvemenstherapy.ca</li>
                <li>Toronto, Ontario</li>
                <li>Online Sessions Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Resolve Men&apos;s Therapy. All rights reserved. | <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link> | <Link href="/terms" className="hover:text-foreground">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
