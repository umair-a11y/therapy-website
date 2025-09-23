"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-gray-900">
              <span className="text-therapeutic-primary">Resolve</span>
              <span className="text-gray-700 ml-2">Men's Therapy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">
              About
            </Link>
            <div className="relative group">
              <Link href="/services" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">
                Services
              </Link>
              {/* Services Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/individual-therapy" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Individual Therapy
                  </Link>
                  <Link href="/adhd-support" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    ADHD Support
                  </Link>
                  <Link href="/anxiety-support" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Anxiety Support
                  </Link>
                  <Link href="/depression-support" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Depression Support
                  </Link>
                  <Link href="/anger-management" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Anger Management
                  </Link>
                  <Link href="/stress-burnout" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Stress & Burnout
                  </Link>
                  <Link href="/trauma-therapy" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Trauma Therapy
                  </Link>
                  <Link href="/addiction-therapy" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Addiction Support
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">
                Assessments
              </button>
              {/* Assessments Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/assessment/depression" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Depression (PHQ-9)
                  </Link>
                  <Link href="/assessment/anxiety" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Anxiety (GAD-7)
                  </Link>
                  <Link href="/assessment/adhd" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    ADHD (ASRS)
                  </Link>
                  <Link href="/assessment/stress" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Stress Level
                  </Link>
                  <Link href="/assessment/habits" className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary">
                    Self-Control & Habits
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/pricing" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/articles" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">
              Resources
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/book-consultation">
              <Button className="bg-therapeutic-primary hover:bg-therapeutic-primary/90 text-white">
                <Calendar className="mr-2 h-4 w-4" />
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-therapeutic-primary font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-therapeutic-primary font-medium">
              About
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-therapeutic-primary font-medium">
              Services
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-therapeutic-primary font-medium">
              Pricing
            </Link>
            <Link href="/articles" className="block text-gray-700 hover:text-therapeutic-primary font-medium">
              Resources
            </Link>
            <Link href="/faq" className="block text-gray-700 hover:text-therapeutic-primary font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-therapeutic-primary font-medium">
              Contact
            </Link>
            <div className="pt-4">
              <Link href="/book-consultation">
                <Button className="w-full bg-therapeutic-primary hover:bg-therapeutic-primary/90 text-white">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Consultation
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}