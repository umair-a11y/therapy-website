"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HeaderLogo } from "@/components/HeaderLogo";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMenuKeyNav, useMobileMenuKeyNav } from "@/components/a11y/useMenuKeyNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [assessmentsOpen, setAssessmentsOpen] = useState(false);
  const pathname = usePathname();

  // Refs for dropdown triggers
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const assessmentsTriggerRef = useRef<HTMLButtonElement>(null);

  // Services dropdown keyboard navigation
  const {
    menuRef: servicesMenuRef,
    handleKeyDown: handleServicesKeyDown,
  } = useMenuKeyNav({
    isOpen: servicesOpen,
    onClose: () => setServicesOpen(false),
    autoFocus: true,
    returnFocusOnClose: true,
  });

  // Assessments dropdown keyboard navigation
  const {
    menuRef: assessmentsMenuRef,
    handleKeyDown: handleAssessmentsKeyDown,
  } = useMenuKeyNav({
    isOpen: assessmentsOpen,
    onClose: () => setAssessmentsOpen(false),
    autoFocus: true,
    returnFocusOnClose: true,
  });

  // Mobile menu keyboard navigation
  const {
    menuRef: mobileMenuRef,
    toggleButtonRef,
    handleEscape: handleMobileEscape,
  } = useMobileMenuKeyNav({
    isOpen: isMenuOpen,
    onClose: () => setIsMenuOpen(false),
  });

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Check services dropdown
      if (servicesOpen &&
          servicesMenuRef.current &&
          !servicesMenuRef.current.contains(target) &&
          servicesTriggerRef.current &&
          !servicesTriggerRef.current.contains(target)) {
        setServicesOpen(false);
      }

      // Check assessments dropdown
      if (assessmentsOpen &&
          assessmentsMenuRef.current &&
          !assessmentsMenuRef.current.contains(target) &&
          assessmentsTriggerRef.current &&
          !assessmentsTriggerRef.current.contains(target)) {
        setAssessmentsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesOpen, assessmentsOpen, servicesMenuRef, assessmentsMenuRef]);

  // Helper to check if link is active
  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <HeaderLogo className="h-16" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary">
            <Link
              href="/"
              className={`font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-therapeutic-primary focus:ring-offset-2 px-2 py-1 rounded ${
                isActiveLink("/")
                  ? "text-therapeutic-primary font-semibold border-b-2 border-therapeutic-primary"
                  : "text-gray-700 hover:text-therapeutic-primary"
              }`}
              aria-current={isActiveLink("/") ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-therapeutic-primary focus:ring-offset-2 px-2 py-1 rounded ${
                isActiveLink("/about")
                  ? "text-therapeutic-primary font-semibold border-b-2 border-therapeutic-primary"
                  : "text-gray-700 hover:text-therapeutic-primary"
              }`}
              aria-current={isActiveLink("/about") ? "page" : undefined}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                ref={servicesTriggerRef}
                className={`flex items-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-therapeutic-primary focus:ring-offset-2 px-2 py-1 rounded ${
                  isActiveLink("/services") || servicesOpen
                    ? "text-therapeutic-primary font-semibold"
                    : "text-gray-700 hover:text-therapeutic-primary"
                }`}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen(!servicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setServicesOpen(!servicesOpen);
                  } else if (e.key === "ArrowDown" && !servicesOpen) {
                    e.preventDefault();
                    setServicesOpen(true);
                  } else if (e.key === "ArrowUp" && servicesOpen) {
                    e.preventDefault();
                    // Focus last menu item
                    const menuItems = servicesMenuRef.current?.querySelectorAll('[role="menuitem"]');
                    if (menuItems?.length) {
                      (menuItems[menuItems.length - 1] as HTMLElement).focus();
                    }
                  }
                }}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>

              {/* Services Menu */}
              {servicesOpen && (
                <div
                  ref={servicesMenuRef as any}
                  id="services-menu"
                  role="menu"
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg"
                  onKeyDown={handleServicesKeyDown as any}
                >
                  <Link
                    href="/individual-therapy"
                    role="menuitem"
                    tabIndex={0}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setServicesOpen(false)}
                  >
                    Individual Therapy
                  </Link>
                  <Link
                    href="/adhd-support"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setServicesOpen(false)}
                  >
                    ADHD Support
                  </Link>
                  <Link
                    href="/anxiety-support"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setServicesOpen(false)}
                  >
                    Anxiety Support
                  </Link>
                  <Link
                    href="/depression-support"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setServicesOpen(false)}
                  >
                    Depression Support
                  </Link>
                  <Link
                    href="/anger-management"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setServicesOpen(false)}
                  >
                    Anger Management
                  </Link>
                  <Link
                    href="/stress-burnout"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setServicesOpen(false)}
                  >
                    Stress & Burnout
                  </Link>
                  <Link
                    href="/trauma-therapy"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setServicesOpen(false)}
                  >
                    Trauma Therapy
                  </Link>
                  <Link
                    href="/addiction-therapy"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setServicesOpen(false)}
                  >
                    Addiction Support
                  </Link>
                </div>
              )}
            </div>

            {/* Assessments Dropdown */}
            <div className="relative">
              <button
                ref={assessmentsTriggerRef}
                className="flex items-center text-gray-700 hover:text-therapeutic-primary font-medium transition-colors"
                aria-haspopup="menu"
                aria-expanded={assessmentsOpen}
                aria-controls="assessments-menu"
                onClick={() => setAssessmentsOpen(!assessmentsOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setAssessmentsOpen(!assessmentsOpen);
                  } else if (e.key === "ArrowDown" && !assessmentsOpen) {
                    e.preventDefault();
                    setAssessmentsOpen(true);
                  }
                }}
              >
                Assessments
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>

              {/* Assessments Menu */}
              {assessmentsOpen && (
                <div
                  ref={assessmentsMenuRef as any}
                  id="assessments-menu"
                  role="menu"
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg"
                  onKeyDown={handleAssessmentsKeyDown as any}
                >
                  <Link
                    href="/self-check"
                    role="menuitem"
                    tabIndex={0}
                    className="block px-4 py-2 font-medium text-gray-900 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none border-b"
                    onClick={() => setAssessmentsOpen(false)}
                  >
                    All Self-Assessments
                  </Link>
                  <Link
                    href="/assessment/depression"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setAssessmentsOpen(false)}
                  >
                    Depression (PHQ-9)
                  </Link>
                  <Link
                    href="/assessment/anxiety"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setAssessmentsOpen(false)}
                  >
                    Anxiety (GAD-7)
                  </Link>
                  <Link
                    href="/assessment/adhd"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setAssessmentsOpen(false)}
                  >
                    ADHD (ASRS)
                  </Link>
                  <Link
                    href="/assessment/stress"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setAssessmentsOpen(false)}
                  >
                    Stress Level
                  </Link>
                  <Link
                    href="/assessment/habits"
                    role="menuitem"
                    tabIndex={-1}
                    className="block px-4 py-2 text-gray-700 hover:bg-therapeutic-primary/10 hover:text-therapeutic-primary focus:bg-therapeutic-primary/10 focus:text-therapeutic-primary focus:outline-none"
                    onClick={() => setAssessmentsOpen(false)}
                  >
                    Self-Control & Habits
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors"
              aria-current={isActiveLink("/pricing") ? "page" : undefined}
            >
              Pricing
            </Link>
            <Link
              href="/articles"
              className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors"
              aria-current={isActiveLink("/articles") ? "page" : undefined}
            >
              Resources
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors"
              aria-current={isActiveLink("/faq") ? "page" : undefined}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-therapeutic-primary font-medium transition-colors"
              aria-current={isActiveLink("/contact") ? "page" : undefined}
            >
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
            ref={toggleButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-therapeutic-primary focus:ring-offset-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t"
          id="mobile-menu"
          onKeyDown={handleMobileEscape as any}
        >
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile Primary">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md font-medium"
              aria-current={isActiveLink("/") ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md font-medium"
              aria-current={isActiveLink("/about") ? "page" : undefined}
            >
              About
            </Link>

            {/* Services Section */}
            <div className="space-y-1">
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-900 font-semibold"
                aria-current={isActiveLink("/services") ? "page" : undefined}
              >
                Services
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  href="/individual-therapy"
                  className="block px-3 py-2 text-gray-600 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md text-sm"
                >
                  Individual Therapy
                </Link>
                <Link
                  href="/adhd-support"
                  className="block px-3 py-2 text-gray-600 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md text-sm"
                >
                  ADHD Support
                </Link>
                <Link
                  href="/anxiety-support"
                  className="block px-3 py-2 text-gray-600 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md text-sm"
                >
                  Anxiety Support
                </Link>
                <Link
                  href="/depression-support"
                  className="block px-3 py-2 text-gray-600 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md text-sm"
                >
                  Depression Support
                </Link>
              </div>
            </div>

            {/* Assessments Section */}
            <div className="space-y-1">
              <Link
                href="/self-check"
                className="block px-3 py-2 text-gray-900 font-semibold"
              >
                Assessments
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  href="/self-check"
                  className="block px-3 py-2 text-gray-700 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md text-sm font-medium"
                >
                  Self-Assessments Hub
                </Link>
                <Link
                  href="/assessment/depression"
                  className="block px-3 py-2 text-gray-600 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md text-sm"
                >
                  Depression (PHQ-9)
                </Link>
                <Link
                  href="/assessment/anxiety"
                  className="block px-3 py-2 text-gray-600 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md text-sm"
                >
                  Anxiety (GAD-7)
                </Link>
                <Link
                  href="/assessment/adhd"
                  className="block px-3 py-2 text-gray-600 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md text-sm"
                >
                  ADHD (ASRS)
                </Link>
                <Link
                  href="/assessment/stress"
                  className="block px-3 py-2 text-gray-600 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md text-sm"
                >
                  Stress Level
                </Link>
              </div>
            </div>

            <Link
              href="/pricing"
              className="block px-3 py-2 text-gray-700 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md font-medium"
              aria-current={isActiveLink("/pricing") ? "page" : undefined}
            >
              Pricing
            </Link>
            <Link
              href="/articles"
              className="block px-3 py-2 text-gray-700 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md font-medium"
              aria-current={isActiveLink("/articles") ? "page" : undefined}
            >
              Resources
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-gray-700 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md font-medium"
              aria-current={isActiveLink("/faq") ? "page" : undefined}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-therapeutic-primary hover:bg-gray-50 rounded-md font-medium"
              aria-current={isActiveLink("/contact") ? "page" : undefined}
            >
              Contact
            </Link>

            <div className="pt-4 pb-2">
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
