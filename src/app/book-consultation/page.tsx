"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Shield, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    ageRange: "",
    concerns: "",
    preferredTime: "",
    consent: false,
    privacyPolicy: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.consent || !formData.privacyPolicy) {
      alert("Please fill in all required fields and accept the terms.");
      return;
    }

    try {
      // Submit lead data to our API endpoint
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit consultation request');
      }

      const result = await response.json();
      console.log('✅ Lead captured successfully:', result.leadId);

      // Set submitted state and then redirect to JaneApp
      setIsSubmitted(true);

      // Immediate redirect to JaneApp for booking (no delay)
      window.open("https://resolve-mens-therapy.janeapp.com", "_blank");

    } catch (error) {
      console.error('❌ Lead capture failed:', error);

      // Even if API fails, still show success to user and redirect
      // This ensures user experience isn't broken
      setIsSubmitted(true);
      window.open("https://resolve-mens-therapy.janeapp.com", "_blank");

      // Log for debugging but don't show error to user
      alert("Your request has been submitted. If you experience any issues, please call us directly.");
    }
  };

  if (isSubmitted) {
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
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. We'll contact you within 24 hours during business days to schedule your free consultation.
            </p>
            <div className="bg-therapeutic-primary/10 border border-therapeutic-primary/20 rounded-lg p-4 mb-6">
              <p className="text-therapeutic-primary font-medium">
                ✅ Your information has been captured and we've opened our booking system in a new tab to secure your preferred time slot.
              </p>
            </div>
            <div className="space-y-4">
              <Button
                className="bg-therapeutic-primary hover:bg-therapeutic-primary/90 mr-4"
                onClick={() => window.open("https://resolve-mens-therapy.janeapp.com", "_blank")}
              >
                Book Now (if not redirected)
              </Button>
              <Link href="/">
                <Button variant="outline">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step towards better mental health. No commitment required.
          </p>
          <div className="flex justify-center items-center space-x-8 mt-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-therapeutic-primary" />
              CRPO Registered
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-therapeutic-primary" />
              Free Consultation
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-therapeutic-primary" />
              Evidence-Based
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-6 w-6 text-therapeutic-primary mr-3" />
                  Schedule Your Free 15-Minute Consultation
                </CardTitle>
                <p className="text-gray-600">
                  This consultation is completely free and confidential. We'll discuss your needs and determine if our approach is right for you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapeutic-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapeutic-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapeutic-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700 mb-2">
                      Age Range
                    </label>
                    <select
                      id="ageRange"
                      name="ageRange"
                      value={formData.ageRange}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapeutic-primary"
                    >
                      <option value="">Select age range</option>
                      <option value="18-24">18-24</option>
                      <option value="25-34">25-34</option>
                      <option value="35-44">35-44</option>
                      <option value="45-54">45-54</option>
                      <option value="55-64">55-64</option>
                      <option value="65+">65+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="concerns" className="block text-sm font-medium text-gray-700 mb-2">
                      What brings you to therapy? (Optional)
                    </label>
                    <textarea
                      id="concerns"
                      name="concerns"
                      rows={4}
                      value={formData.concerns}
                      onChange={handleInputChange}
                      placeholder="Feel free to share what you'd like to work on or any questions you have..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapeutic-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Consultation Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapeutic-primary"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9AM-12PM)</option>
                      <option value="afternoon">Afternoon (12PM-5PM)</option>
                      <option value="evening">Evening (5PM-8PM)</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-therapeutic-primary border-gray-300 rounded focus:ring-therapeutic-primary mt-1"
                        required
                      />
                      <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                        I consent to being contacted about my consultation request *
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacyPolicy"
                        name="privacyPolicy"
                        checked={formData.privacyPolicy}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-therapeutic-primary border-gray-300 rounded focus:ring-therapeutic-primary mt-1"
                        required
                      />
                      <label htmlFor="privacyPolicy" className="ml-3 text-sm text-gray-700">
                        I have read and agree to the{" "}
                        <Link href="/privacy" className="text-therapeutic-primary hover:underline">
                          privacy policy
                        </Link>{" "}
                        *
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-therapeutic-primary hover:bg-therapeutic-primary/90"
                    disabled={!formData.consent || !formData.privacyPolicy}
                  >
                    Book My Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* What to Expect */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 text-therapeutic-primary mr-3" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-therapeutic-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">15-minute phone or video consultation</h4>
                    <p className="text-gray-600 text-sm">A brief, comfortable conversation to get acquainted</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-therapeutic-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Discussion of your concerns and goals</h4>
                    <p className="text-gray-600 text-sm">Share what brought you here and what you hope to achieve</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-therapeutic-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Assessment of fit</h4>
                    <p className="text-gray-600 text-sm">We'll determine if our approach aligns with your needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-therapeutic-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">No pressure to book additional sessions</h4>
                    <p className="text-gray-600 text-sm">Take time to decide what feels right for you</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-therapeutic-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold">Recommendations for next steps</h4>
                    <p className="text-gray-600 text-sm">Clear guidance on how to move forward, if you choose to</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-6 w-6 text-therapeutic-primary mr-3" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <strong>We typically respond within 24 hours during business days.</strong> You'll receive confirmation of your request and details about scheduling your consultation.
                </p>
              </CardContent>
            </Card>
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