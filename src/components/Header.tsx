"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import CompassLogo from "@/components/CompassLogo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <CompassLogo className="mr-3 transition-transform group-hover:rotate-12" size={48} />
            <div>
              <div className="text-2xl lg:text-3xl font-bold">
                <span className="text-resolve-forest">Resolve</span>
                <span className="text-resolve-forest-dark ml-2">Men's Therapy</span>
              </div>
              <div className="text-xs text-resolve-sage italic">Navigate your path forward</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-resolve-forest font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-resolve-forest font-medium transition-colors">
              About
            </Link>
            <div className="relative group">
              <Link href="/services" className="text-foreground/80 hover:text-resolve-forest font-medium transition-colors">
                Services
              </Link>
              {/* Services Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/individual-therapy" className="block px-4 py-2 text-foreground/80 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Individual Therapy
                  </Link>
                  <Link href="/adhd-support" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    ADHD Support
                  </Link>
                  <Link href="/anxiety-support" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Anxiety Support
                  </Link>
                  <Link href="/depression-support" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Depression Support
                  </Link>
                  <Link href="/anger-management" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Anger Management
                  </Link>
                  <Link href="/stress-burnout" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Stress & Burnout
                  </Link>
                  <Link href="/trauma-therapy" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Trauma Therapy
                  </Link>
                  <Link href="/addiction-therapy" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Addiction Support
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-foreground/80 hover:text-resolve-forest font-medium transition-colors">
                Self-Checks
              </button>
              {/* Self-Checks Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/self-check/depression" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Depression Self-Check (PHQ-9)
                  </Link>
                  <Link href="/self-check/anxiety" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Anxiety Self-Check (GAD-7)
                  </Link>
                  <Link href="/self-check/adhd" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    ADHD Self-Check (ASRS)
                  </Link>
                  <Link href="/self-check/stress" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Stress Level Check
                  </Link>
                  <Link href="/self-check/habits" className="block px-4 py-2 text-gray-700 hover:bg-resolve-sage/20 hover:text-resolve-forest">
                    Self-Control & Habits Check
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/pricing" className="text-foreground/80 hover:text-resolve-forest font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/articles" className="text-foreground/80 hover:text-resolve-forest font-medium transition-colors">
              Resources
            </Link>
            <Link href="/faq" className="text-foreground/80 hover:text-resolve-forest font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-resolve-forest font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/book-consultation">
              <Button className="bg-resolve-compass hover:bg-resolve-compass/90 text-white shadow-lg">
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
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-foreground/80 hover:text-resolve-forest font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-foreground/80 hover:text-resolve-forest font-medium">
              About
            </Link>
            <Link href="/services" className="block text-foreground/80 hover:text-resolve-forest font-medium">
              Services
            </Link>
            <Link href="/pricing" className="block text-foreground/80 hover:text-resolve-forest font-medium">
              Pricing
            </Link>
            <Link href="/articles" className="block text-foreground/80 hover:text-resolve-forest font-medium">
              Resources
            </Link>
            <Link href="/faq" className="block text-foreground/80 hover:text-resolve-forest font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="block text-foreground/80 hover:text-resolve-forest font-medium">
              Contact
            </Link>
            <div className="pt-4">
              <Link href="/book-consultation">
                <Button className="w-full bg-resolve-compass hover:bg-resolve-compass/90 text-white shadow-lg">
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