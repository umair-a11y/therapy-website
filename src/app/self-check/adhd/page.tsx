"use client";

import Layout from "@/components/Layout";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

const adhdQuestions = [
  "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
  "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
  "How often do you have problems remembering appointments or obligations?",
  "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
  "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
  "How often do you feel overly active and compelled to do things, like you were driven by a motor?"
];

const responseOptions = [
  { value: 0, label: "Never", color: "text-green-600" },
  { value: 1, label: "Rarely", color: "text-green-500" },
  { value: 2, label: "Sometimes", color: "text-yellow-500" },
  { value: 3, label: "Often", color: "text-orange-500" },
  { value: 4, label: "Very Often", color: "text-red-500" }
];

export default function ADHDAssessmentPage() {
  const [answers, setAnswers] = useState<number[]>(new Array(adhdQuestions.length).fill(-1));
  const [isComplete, setIsComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);

    if (newAnswers.every(answer => answer !== -1)) {
      setIsComplete(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((sum, answer) => sum + answer, 0);
  };

  const getScoreInterpretation = (score: number) => {
    if (score >= 0 && score <= 13) {
      return {
        level: "Low likelihood",
        description: "Your responses suggest a low likelihood of ADHD symptoms.",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      };
    } else if (score >= 14 && score <= 17) {
      return {
        level: "Moderate likelihood",
        description: "Your responses suggest some ADHD symptoms that may benefit from professional evaluation.",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
      };
    } else {
      return {
        level: "High likelihood",
        description: "Your responses suggest significant ADHD symptoms. We recommend consulting with a healthcare professional.",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
      };
    }
  };

  const handleSubmit = async () => {
    if (!email) return;

    // Here you would typically send to your backend
    console.log('ADHD Assessment submitted:', {
      email,
      score: calculateScore(),
      answers,
      timestamp: new Date().toISOString()
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Results Generated</h1>
            <p className="text-gray-600 mb-8">
              Thanks for completing the ADHD screening. Your responses are not stored. If you’d like support applying these results, you can book a free consult.
            </p>
            <div className="space-y-4">
              <Link href="/contact">
                <Button className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/" className="block">
                <Button variant="outline">Return to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const score = isComplete ? calculateScore() : 0;
  const interpretation = isComplete ? getScoreInterpretation(score) : null;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ADHD Screening</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This brief assessment helps identify potential ADHD symptoms in adults. Please answer honestly based on your experiences over the past 6 months.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Important Notice</h3>
              <p className="text-blue-800 text-sm">
                This is a screening tool, not a diagnostic instrument. Only a qualified healthcare professional can provide an ADHD diagnosis. The results are for educational purposes and to help guide further evaluation.
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Adult ADHD Self-Report Scale (ASRS-6)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {adhdQuestions.map((question, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-medium text-gray-900">
                  {index + 1}. {question}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {responseOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(index, option.value)}
                      className={`p-3 text-sm font-medium rounded-lg border-2 transition-all ${
                        answers[index] === option.value
                          ? 'border-therapeutic-primary bg-therapeutic-primary text-white'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-therapeutic-primary'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {isComplete && interpretation && (
          <Card className={`mb-8 ${interpretation.bgColor} ${interpretation.borderColor} border-2`}>
            <CardHeader>
              <CardTitle className={interpretation.color}>
                Your Results: {interpretation.level}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Score:</span>
                  <span className="text-xl font-bold">{score}/24</span>
                </div>
                <p className={interpretation.color}>
                  {interpretation.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Enter your email to receive your results and learn about next steps:
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-therapeutic-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <Button
                    onClick={handleSubmit}
                    disabled={!email}
                    className="w-full bg-therapeutic-primary hover:bg-therapeutic-primary/90"
                  >
                    Get My Results & Next Steps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to take the next step? Our ADHD-specialized therapy can help you develop effective strategies and support.
          </p>
          <Link href="/contact">
            <Button className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

// Metadata is defined at the segment/layout level for client pages.

