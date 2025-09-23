"use client";

import Layout from "@/components/Layout";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

const stressQuestions = [
  "In the last month, how often have you been upset because of something that happened unexpectedly?",
  "In the last month, how often have you felt that you were unable to control the important things in your life?",
  "In the last month, how often have you felt nervous and stressed?",
  "In the last month, how often have you felt confident about your ability to handle your personal problems?",
  "In the last month, how often have you felt that things were going your way?",
  "In the last month, how often have you found that you could not cope with all the things that you had to do?",
  "In the last month, how often have you been able to control irritations in your life?",
  "In the last month, how often have you felt that you were on top of things?",
  "In the last month, how often have you been angered because of things that happened that were outside of your control?",
  "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?"
];

const responseOptions = [
  { value: 0, label: "Never", color: "text-green-600" },
  { value: 1, label: "Almost Never", color: "text-green-500" },
  { value: 2, label: "Sometimes", color: "text-yellow-500" },
  { value: 3, label: "Fairly Often", color: "text-orange-500" },
  { value: 4, label: "Very Often", color: "text-red-500" }
];

// Questions 4, 5, 7, and 8 are reverse scored
const reverseScoreQuestions = [3, 4, 6, 7];

export default function StressAssessmentPage() {
  const [answers, setAnswers] = useState<number[]>(new Array(stressQuestions.length).fill(-1));
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
    return answers.reduce((sum, answer, index) => {
      if (reverseScoreQuestions.includes(index)) {
        return sum + (4 - answer); // Reverse scoring
      }
      return sum + answer;
    }, 0);
  };

  const getScoreInterpretation = (score: number) => {
    if (score >= 0 && score <= 13) {
      return {
        level: "Low stress",
        description: "Your stress levels appear to be well-managed. Continue with your current coping strategies.",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      };
    } else if (score >= 14 && score <= 26) {
      return {
        level: "Moderate stress",
        description: "You're experiencing moderate stress levels. Consider implementing stress management techniques or seeking support.",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
      };
    } else {
      return {
        level: "High stress",
        description: "You're experiencing high stress levels. We strongly recommend seeking professional support to develop effective coping strategies.",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
      };
    }
  };

  const handleSubmit = async () => {
    if (!email) return;

    // Here you would typically send to your backend
    console.log('Stress Assessment submitted:', {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Assessment Submitted</h1>
            <p className="text-gray-600 mb-8">
              Thank you for completing the stress assessment. Your results have been recorded and we'll be in touch soon to discuss stress management strategies.
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
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Stress Assessment</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This assessment measures your perceived stress levels over the past month using the Perceived Stress Scale (PSS-10).
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2">Important Notice</h3>
              <p className="text-yellow-800 text-sm">
                This assessment measures how unpredictable, uncontrollable, and overloaded you find your life. Higher scores indicate higher perceived stress. This is for educational purposes and should not replace professional medical advice.
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Perceived Stress Scale (PSS-10)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {stressQuestions.map((question, index) => (
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
                  <span className="text-xl font-bold">{score}/40</span>
                </div>
                <p className={interpretation.color}>
                  {interpretation.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Enter your email to receive your results and stress management resources:
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
                    Get My Results & Stress Management Tips
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Feeling overwhelmed? Our stress management therapy can help you develop effective coping strategies and regain control.
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