import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6 text-2xl font-bold lg:text-3xl">
              <span className="text-emerald-400">Resolve</span>
              <span className="ml-2 text-slate-200">Men's Therapy</span>
            </div>
            <p className="mb-6 text-slate-400 leading-relaxed">
              Professional mental health support for men across Ontario
            </p>
            <div className="flex items-start space-x-3">
              <Shield className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
              <div className="text-sm text-slate-400">
                <p className="font-medium text-slate-300">CRPO Registered</p>
                <p>Psychotherapist (Qualifying)</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-200">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-200">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/individual-therapy" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link href="/adhd-support" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  ADHD Support
                </Link>
              </li>
              <li>
                <Link href="/anxiety-support" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  Anxiety Support
                </Link>
              </li>
              <li>
                <Link href="/depression-support" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  Depression Support
                </Link>
              </li>
              <li>
                <Link href="/anger-management" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  Anger Management
                </Link>
              </li>
              <li>
                <Link href="/trauma-therapy" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                  Trauma Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-200">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">info@resolvemenstherapy.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">(416) XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">Online Sessions</p>
                  <p className="text-slate-400">Across Ontario</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">Mon-Fri: 9AM-7PM</p>
                  <p className="text-slate-400">Sat: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crisis Support Banner */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-6 mb-12">
            <p className="text-red-300 font-semibold mb-3 text-lg">Crisis Support Available 24/7</p>
            <div className="flex flex-wrap gap-8 text-sm">
              <span className="text-slate-300">Emergency: <strong className="text-red-300">911</strong></span>
              <span className="text-slate-300">Crisis Line: <strong className="text-red-300">9-8-8</strong></span>
              <span className="text-slate-300">Talk Suicide Canada: <strong className="text-red-300">1-833-456-4566</strong></span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-slate-400 md:mb-0">
              © {new Date().getFullYear()} Resolve Men's Therapy. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Disclaimer
              </Link>
              <Link href="/accessibility" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}