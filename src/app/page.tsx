import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, Clock, CheckCircle, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-dm-sans text-2xl font-bold therapeutic-text-gradient">
              MentalWell Therapy
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
              <a href="#assessments" className="text-foreground/80 hover:text-primary transition-colors">Assessments</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
            </div>
            <Button className="therapeutic-gradient text-white hover:opacity-90 transition-opacity">
              <Calendar className="mr-2 h-4 w-4" />
              Book with JaneApp
            </Button>
          </div>
        </div>
      </nav>
      
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Professional{" "}
                  <span className="therapeutic-text-gradient">Men's Therapy</span>{" "}
                  That Works
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Evidence-based mental health support designed specifically for men.
                  Confidential, professional, and effective therapy sessions with licensed practitioners.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="therapeutic-gradient text-white hover:opacity-90 transition-opacity">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Take Assessment
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mr-2" />
                  CRPO Licensed
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-therapeutic-secondary mr-2" />
                  100% Confidential
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-therapeutic-secondary mr-2" />
                  Same-Day Booking
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-therapeutic-gradient rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Start Your Journey</h3>
                    <p className="text-white/90 text-lg">Professional support when you need it most.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-white/80">Men Helped</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-white/80">Crisis Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
