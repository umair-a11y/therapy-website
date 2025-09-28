"use client";

import Layout from "@/components/Layout";
import ConsentOptIn from "@/components/ConsentOptIn";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, AlertCircle } from "lucide-react";
import Link from "next/link";

const habitQuestions = [
  "I have trouble breaking bad habits.",
  "I am able to work effectively toward long-term goals.",
  "I have difficulty maintaining focus on projects that take more than a few months to complete.",
  "I am able to resist temptation.",
  "I do certain things that are bad for me, if they are fun.",
  "Sometimes I can't stop myself from doing something, even if I know it is wrong.",
  "I often act without thinking through all the alternatives.",
  "People would say that I have iron self-discipline.",
  "Pleasure and fun sometimes keep me from getting work done.",
  "I have a hard time breaking bad habits.",
  "I say inappropriate things.",
  "I refuse things that are bad for me.",
  "I spend too much money.",
  "I keep everything neat.",
  "I am self-indulgent at times.",
  "I wish I had more self-discipline.",
  "I am reliable.",
  "I get carried away by my feelings.",
  "I do many things on the spur of the moment.",
  "I don't keep secrets very well.",
  "People can count on me to keep on schedule.",
  "Getting up in the morning is hard for me.",
  "I have trouble saying no.",
  "I change my mind fairly often.",
  "I blurt out whatever is on my mind.",
  "People would describe me as impulsive.",
  "I take care of my health.",
  "I am always on time.",
  "I have trouble following through with things once the initial excitement wears off.",
  "I stick to my exercise routine.",
  "I eat healthy foods.",
  "Controlling my emotions is not a problem for me.",
  "I have never known anyone to pester me to get something done.",
  "I'm not easily discouraged.",
  "I'd be better off if I stopped to think before acting.",
  "I engage in healthy activities."
];

const responseOptions = [
  { value: 1, label: "Not at all", color: "text-red-500" },
  { value: 2, label: "A little", color: "text-orange-500" },
  { value: 3, label: "Somewhat", color: "text-yellow-500" },
  { value: 4, label: "Mostly", color: "text-green-500" },
  { value: 5, label: "Very much", color: "text-green-600" }
];

// Items that need reverse scoring (higher scores indicate better self-control)
const reverseScoreItems = [0, 2, 4, 5, 6, 8, 9, 10, 12, 14, 15, 17, 18, 19, 21, 22, 23, 24, 25, 28, 34];

export default function HabitsAssessmentPage() {
  const [answers, setAnswers] = useState<number[]>(new Array(habitQuestions.length).fill(-1));
  const [isComplete, setIsComplete] = useState(false);

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
      if (reverseScoreItems.includes(index)) {
        return sum + (6 - answer); // Reverse scoring
      }
      return sum + answer;
    }, 0);
  };

  const getScoreInterpretation = (score: number) => {
    const maxScore = 180;
    const percentage = (score / maxScore) * 100;

    if (percentage >= 75) {
      return {
        level: "High self-control",
        description: "You demonstrate strong self-discipline and healthy habit formation. Keep up the good work!",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      };
    } else if (percentage >= 50) {
      return {
        level: "Moderate self-control",
        description: "You have decent self-control but could benefit from strategies to strengthen habit formation and impulse control.",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
      };
    } else {
      return {
        level: "Lower self-control",
        description: "You may struggle with impulse control and habit formation. Professional support can help you develop effective strategies.",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
      };
    }
  };



  const score = isComplete ? calculateScore() : 0;
  const interpretation = isComplete ? getScoreInterpretation(score) : null;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Self-Control & Habits Assessment</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This assessment evaluates your self-discipline, impulse control, and ability to form and maintain healthy habits using the Self-Control Scale.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-purple-900 mb-2">Important Notice</h3>
              <p className="text-purple-800 text-sm">
                This assessment measures your capacity for self-control and self-discipline across various life domains. Higher scores indicate better self-control. This is for educational purposes and should not replace professional consultation.
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Self-Control Scale (SCS)</CardTitle>
            <p className="text-sm text-gray-600">Rate how well each statement describes you:</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {habitQuestions.map((question, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-medium text-gray-900 text-sm">
                  {index + 1}. {question}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                  {responseOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(index, option.value)}
                      className={`p-2 text-xs font-medium rounded-lg border-2 transition-all ${
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
                  <span className="text-xl font-bold">{score}/180</span>
                </div>
                <p className={interpretation.color}>
                  {interpretation.description}
                </p>

                <ConsentOptIn toolkitName="Self‑Control & Habits Toolkit" />
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to build better habits and strengthen your self-control? Our behavioral therapy can help you develop lasting positive changes.
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


