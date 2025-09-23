"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, MapPin, Clock, AlertCircle, CheckCircle, Shield } from "lucide-react";

export default function ContactPage() {
  const handleBooking = () => {
    // Replace with actual Jane App booking URL
    window.open("https://resolve-mens-therapy.janeapp.com", "_blank");
  };

  const handleEmailContact = (subject: string, body: string = "") => {
    const email = "info@resolvemenstherapy.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-therapeutic-primary/10 rounded-full text-sm font-medium text-therapeutic-primary mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Contact Resolve Men's Therapy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Take the first step toward better mental health. Book your free consultation or get in touch with any questions.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-therapeutic-primary hover:bg-therapeutic-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={handleBooking}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-therapeutic-primary text-therapeutic-primary hover:bg-therapeutic-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-200"
              onClick={() => handleEmailContact("General Inquiry", "Hi, I have a question about your services.")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Booking */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-therapeutic-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Online</h3>
              <p className="text-gray-600 mb-6">
                Schedule your free consultation or therapy session through our secure booking platform.
              </p>
              <Button
                className="w-full bg-therapeutic-primary hover:bg-therapeutic-primary/90 text-white"
                onClick={handleBooking}
              >
                Book Appointment
              </Button>
            </div>

            {/* Email Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-therapeutic-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-therapeutic-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Send us a message with your questions or to request more information about our services.
              </p>
              <Button
                variant="outline"
                className="w-full border-therapeutic-secondary text-therapeutic-secondary hover:bg-therapeutic-secondary hover:text-white"
                onClick={() => handleEmailContact("Service Inquiry", "Hello, I would like to learn more about your therapy services.")}
              >
                Send Message
              </Button>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-therapeutic-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-therapeutic-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                For urgent matters or immediate support needs.
              </p>
              <p className="text-lg font-semibold text-therapeutic-primary mb-6">
                (416) XXX-XXXX
              </p>
              <p className="text-sm text-gray-500">
                Response within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Practice Information</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-therapeutic-primary mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-sm text-therapeutic-primary mt-4">
                  Evening and weekend appointments available
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-therapeutic-primary mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Online sessions across Ontario</p>
                <p>CRPO Registered Psychotherapist (Qualifying)</p>
                <p>Secure, PIPEDA-compliant video platform</p>
                <p className="text-sm text-therapeutic-primary mt-4">
                  Professional liability insurance coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support */}
      <section className="py-16 bg-red-50 border-t-4 border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-red-900">Crisis Support</h2>
            </div>
            <p className="text-red-800">
              If you are experiencing a mental health crisis or thoughts of self-harm
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Emergency</h3>
              <p className="text-2xl font-bold text-red-600 mb-2">911</p>
              <p className="text-sm text-red-700">For immediate danger</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Crisis Line</h3>
              <p className="text-2xl font-bold text-red-600 mb-2">9-8-8</p>
              <p className="text-sm text-red-700">Call or text 24/7</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Talk Suicide Canada</h3>
              <p className="text-xl font-bold text-red-600 mb-2">1-833-456-4566</p>
              <p className="text-sm text-red-700">24/7 support</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}