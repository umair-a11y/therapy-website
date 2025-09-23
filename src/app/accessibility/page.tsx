"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Mail, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function AccessibilityPage() {
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
            <Shield className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Accessibility Statement</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolve Men's Therapy is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.
          </p>
        </div>

        {/* Commitment Statement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Commitment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              We are actively working to increase the accessibility and usability of our website and, in doing so, adhere to many of the available standards and guidelines. We believe that everyone should be able to access mental health resources and information without barriers.
            </p>
          </CardContent>
        </Card>

        {/* Standards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and the Accessibility for Ontarians with Disabilities Act (AODA) requirements where applicable.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                <span className="text-gray-700">WCAG 2.1 Level AA compliance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                <span className="text-gray-700">AODA (Accessibility for Ontarians with Disabilities Act) requirements</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-therapeutic-secondary mr-2" />
                <span className="text-gray-700">Ongoing accessibility audits and improvements</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Accessibility Features</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              Our website includes the following accessibility features:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Semantic HTML and ARIA Landmarks</h4>
                    <p className="text-gray-700 text-sm">Improved navigation for screen readers and assistive technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Keyboard-Accessible Navigation</h4>
                    <p className="text-gray-700 text-sm">All interactive elements can be accessed using keyboard navigation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">High-Contrast Typography</h4>
                    <p className="text-gray-700 text-sm">Legible fonts and sufficient color contrast for readability.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alt Text for Images</h4>
                    <p className="text-gray-700 text-sm">Descriptive alternative text for all meaningful images.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduced Motion Support</h4>
                    <p className="text-gray-700 text-sm">Respects user preferences for reduced motion and animations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-therapeutic-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Responsive Design</h4>
                    <p className="text-gray-700 text-sm">Works across different devices and screen sizes.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ongoing Improvements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Ongoing Improvements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We regularly review our website to identify and fix accessibility issues. Our commitment to accessibility is ongoing, and we continuously work to improve the user experience for all visitors. If you encounter an accessibility barrier, please let us know so we can address it promptly.
            </p>
          </CardContent>
        </Card>

        {/* Feedback Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
              We welcome your feedback on the accessibility of this website. Please contact us using one of the following methods:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-therapeutic-primary" />
                <div>
                  <span className="font-semibold text-gray-900">Email:</span>
                  <span className="text-gray-700 ml-2">info@resolvemenstherapy.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-therapeutic-primary" />
                <div>
                  <span className="font-semibold text-gray-900">Contact Form:</span>
                  <Link href="/contact" className="text-therapeutic-primary hover:underline ml-2">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-therapeutic-primary" />
                <div>
                  <span className="font-semibold text-gray-900">Phone:</span>
                  <span className="text-gray-700 ml-2">Available upon request</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Plan and Alternatives */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Accessibility Plan and Alternatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Alternative Formats</h4>
                <p className="text-gray-700">If you require content in an alternative format, please contact us and we will work to provide the information in a format that meets your needs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Assistance</h4>
                <p className="text-gray-700">If you need assistance navigating our website or accessing our services, our team is available to help. We can provide guidance over the phone or via email.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Third-Party Content</h4>
                <p className="text-gray-700">While we strive to ensure the accessibility of our entire website, some content may be provided by third parties. We work with our partners to ensure their content meets accessibility standards as well.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Us */}
        <div className="text-center">
          <div className="bg-therapeutic-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Accessibility?</h2>
            <p className="text-gray-700 mb-6">
              We're here to help ensure you can access all of our mental health resources and services. Please don't hesitate to reach out with any accessibility concerns or requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/book-consultation">
                <Button size="lg" variant="outline">
                  Book Consultation
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