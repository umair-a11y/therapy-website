 

import Layout from "@/components/Layout";
import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TherapyButton } from "@/components/ui/therapy-button";
import {
  CheckCircle, AlertCircle, Brain, Heart, Target, Clock,
  Coffee, Moon, Compass, ArrowRight, AlertTriangle
} from "lucide-react";
import { BOOKING_URL } from "@/lib/site-config";

export default function SelfCheckHub() {
  const tools = [
    {
      title: "Mood Snapshot",
      description: "Check in on your overall mood and energy levels.",
      href: "/self-check/depression",
      icon: Heart,
      duration: "90 seconds",
    },
    {
      title: "Anxiety Check",
      description: "See how worry and stress are impacting you.",
      href: "/self-check/anxiety",
      icon: Brain,
      duration: "90 seconds",
    },
    {
      title: "Focus & Habits",
      description: "Explore patterns related to focus and procrastination.",
      href: "/self-check/adhd",
      icon: Target,
      duration: "90 seconds",
    },
    {
      title: "Stress Load & Recovery",
      description: "Measure the balance between life's demands and your ability to recharge.",
      href: "/self-check/stress",
      icon: Clock,
      duration: "90 seconds",
    },
    {
      title: "Anger Frequency & Recovery",
      description: "Understand your personal anger patterns.",
      href: "/self-check/anger",
      icon: AlertTriangle,
      duration: "90 seconds",
    },
    {
      title: "Alcohol Use Check-in (AUDIT-C)",
      description: "A quick, 3-question check on your drinking habits.",
      href: "/self-check/alcohol",
      icon: Coffee,
      duration: "90 seconds",
    },
    {
      title: "Sleep Snapshot",
      description: "Review your sleep hygiene and quality.",
      href: "/self-check/sleep",
      icon: Moon,
      duration: "90 seconds",
    },
    {
      title: "Values & Direction Mini",
      description: "Clarify what truly matters to you.",
      href: "/self-check/values",
      icon: Compass,
      duration: "90 seconds",
    },
  ];

  return (
    <Layout>
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Starting Point</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These free, confidential tools are designed to give you a quick snapshot of where you are right now. Each one takes about 90 seconds to complete.
            </p>
            <p className="text-base text-gray-700 mt-4 font-semibold max-w-2xl mx-auto">
              Important: Your results are for educational purposes only. They are not a diagnosis. Your answers are shown to you on your device and are not stored on our servers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <Card className="p-6 border-gray-100 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer group h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-therapeutic-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <tool.icon className="h-6 w-6 text-therapeutic-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-therapeutic-primary transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{tool.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{tool.duration}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-therapeutic-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-gray-700">
                <p className="font-semibold mb-1">Disclaimer</p>
                <p>This is an educational tool, not a diagnosis. Your results are a snapshot based on your answers and can be a helpful starting point for a conversation with a professional.</p>
                <p className="mt-2">If you are in crisis, call or text <strong>9-8-8</strong>. This is not an emergency service.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Ready to take the next step?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <TherapyButton size="lg" variant="primary">
                  Book a 30-minute consult
                </TherapyButton>
              </a>
              <Link href="/services">
                <TherapyButton size="lg" variant="outline">
                  Learn About Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </TherapyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Free Self-Assessments for Men | Resolve Men's Therapy",
  description:
    "Quick, confidential self-check tools for mood, anxiety, stress, focus, sleep, anger, and more. Results are shown on your device only.",
};
