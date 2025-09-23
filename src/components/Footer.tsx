import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-therapeutic-accent">Resolve</span>
              <span className="text-gray-300 ml-2">Men's Therapy</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional mental health support for men across Ontario
            </p>
            <div className="flex items-start space-x-2">
              <Shield className="w-4 h-4 text-therapeutic-accent mt-1 flex-shrink-0" />
              <div className="text-sm text-gray-400">
                <p>CRPO Registered</p>
                <p>Psychotherapist (Qualifying)</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/individual-therapy" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link href="/adhd-support" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  ADHD Support
                </Link>
              </li>
              <li>
                <Link href="/anxiety-support" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  Anxiety Support
                </Link>
              </li>
              <li>
                <Link href="/depression-support" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  Depression Support
                </Link>
              </li>
              <li>
                <Link href="/anger-management" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  Anger Management
                </Link>
              </li>
              <li>
                <Link href="/trauma-therapy" className="text-gray-400 hover:text-therapeutic-accent transition-colors">
                  Trauma Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-therapeutic-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">info@resolvemenstherapy.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-therapeutic-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">(416) XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-therapeutic-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Online Sessions</p>
                  <p className="text-gray-400 text-sm">Across Ontario</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-therapeutic-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Mon-Fri: 9AM-7PM</p>
                  <p className="text-gray-400 text-sm">Sat: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crisis Support Banner */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-8">
            <p className="text-red-400 text-sm font-semibold mb-2">Crisis Support Available 24/7</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <span className="text-gray-300">Emergency: <strong className="text-red-400">911</strong></span>
              <span className="text-gray-300">Crisis Line: <strong className="text-red-400">9-8-8</strong></span>
              <span className="text-gray-300">Talk Suicide Canada: <strong className="text-red-400">1-833-456-4566</strong></span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Resolve Men's Therapy. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-therapeutic-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-therapeutic-accent text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-therapeutic-accent text-sm transition-colors">
                Disclaimer
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-therapeutic-accent text-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}