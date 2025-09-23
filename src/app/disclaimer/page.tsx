"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function DisclaimerPage() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
          <p className="text-gray-600">Important information about our services</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Services Disclaimer</h2>
            <p className="text-gray-700">
              Resolve Men's Therapy provides psychotherapy services through licensed and registered mental health professionals.
              Our services are intended to support mental health and wellness but do not replace emergency medical care or crisis intervention services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Assessment Tools Disclaimer</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-bold text-orange-900 mb-3">Important: Educational Tools Only</h3>
              <p className="text-orange-800 mb-4">
                The mental health assessments available on this website (PHQ-9, GAD-7, ASRS, etc.) are educational screening tools only and do not provide medical or psychological diagnoses.
              </p>
              <ul className="list-disc list-inside text-orange-800 space-y-2">
                <li>These tools are for informational and educational purposes only</li>
                <li>Results do not constitute professional medical advice</li>
                <li>They are not substitutes for professional mental health evaluation</li>
                <li>Always consult with qualified healthcare professionals for diagnosis and treatment</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Crisis and Emergency Situations</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-3">Immediate Danger or Crisis</h3>
              <p className="text-red-800 mb-4">
                If you are experiencing thoughts of self-harm, suicide, or are in immediate danger, please contact emergency services immediately:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="font-bold text-red-900">Emergency</p>
                  <p className="text-2xl font-bold text-red-600">911</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-red-900">Crisis Line</p>
                  <p className="text-2xl font-bold text-red-600">9-8-8</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-red-900">Talk Suicide Canada</p>
                  <p className="text-lg font-bold text-red-600">1-833-456-4566</p>
                </div>
              </div>
              <p className="text-red-800 text-sm">
                Our therapy services are not crisis intervention services and should not be relied upon for emergency situations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope of Practice</h2>
            <p className="text-gray-700 mb-4">
              Our therapists are registered with the College of Registered Psychotherapists of Ontario (CRPO) and practice within their scope of competence. Our services include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Individual psychotherapy for adults (18+)</li>
              <li>ADHD support and management strategies</li>
              <li>Anxiety and depression treatment</li>
              <li>Stress management and coping skills</li>
              <li>Men's mental health specialization</li>
            </ul>
            <p className="text-gray-700">
              We do not provide psychiatric services, medication management, or formal psychological/psychiatric assessments for diagnostic purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology and Online Services</h2>
            <p className="text-gray-700 mb-4">
              Our online therapy services use secure, encrypted platforms designed for healthcare. However:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Technology limitations may occasionally affect service delivery</li>
              <li>Internet connectivity issues may disrupt sessions</li>
              <li>We recommend using a private, secure internet connection</li>
              <li>Emergency services may be delayed in online contexts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Outcomes</h2>
            <p className="text-gray-700">
              While we use evidence-based approaches and strive for positive outcomes, we cannot guarantee specific results from therapy.
              Success in therapy depends on many factors including client engagement, life circumstances, and the nature of presenting concerns.
              Individual results may vary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Information</h2>
            <p className="text-gray-700">
              Information on this website is for educational purposes and should not be used as a substitute for professional mental health advice,
              diagnosis, or treatment. Always seek the advice of qualified mental health professionals with questions about mental health conditions or treatment options.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold mb-2">For questions about our services or this disclaimer:</p>
              <p><strong>Resolve Men's Therapy</strong></p>
              <p>Email: info@resolvemenstherapy.com</p>
              <p>Phone: (416) XXX-XXXX</p>
              <p className="mt-4 text-sm text-gray-600">
                CRPO Registration: [Registration Number]<br/>
                Professional Liability Insurance: [Insurance Details]
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <button className="bg-therapeutic-primary text-white px-6 py-3 rounded-lg hover:bg-therapeutic-primary/90 transition-colors">
              Contact Us with Questions
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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