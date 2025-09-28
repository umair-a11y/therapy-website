"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle2, Calendar } from "lucide-react";

interface PHQ9FormData {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
}

const questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed. Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
  "Thoughts that you would be better off dead, or of hurting yourself in some way"
];

const options = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Several days" },
  { value: "2", label: "More than half the days" },
  { value: "3", label: "Nearly every day" }
];

export default function PHQ9Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const { register, handleSubmit, watch} = useForm<PHQ9FormData>();

  const watchedValues = watch();
  const progress = (Object.keys(watchedValues).length / questions.length) * 100;

  const onSubmit = (data: PHQ9FormData) => {
    const totalScore = Object.values(data).reduce((sum, value) => sum + parseInt(value), 0);
    setScore(totalScore);
    setShowResults(true);
  };

  const getScoreInterpretation = (score: number) => {
    if (score <= 4) return {
      level: "Minimal Depression",
      description: "Your responses suggest minimal depression symptoms.",
      recommendation: "Continue healthy lifestyle practices and consider occasional check-ins.",
      color: "text-therapeutic-primary",
      bgColor: "bg-therapeutic-primary/10"
    };
    if (score <= 9) return {
      level: "Mild Depression",
      description: "Your responses suggest mild depression symptoms.",
      recommendation: "Consider speaking with a mental health professional for support and strategies.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    };
    if (score <= 14) return {
      level: "Moderate Depression",
      description: "Your responses suggest moderate depression symptoms.",
      recommendation: "We recommend scheduling a consultation with a licensed therapist.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    };
    if (score <= 19) return {
      level: "Moderately Severe Depression",
      description: "Your responses suggest moderately severe depression symptoms.",
      recommendation: "Professional therapy is strongly recommended. Consider scheduling an appointment soon.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    };
    return {
      level: "Severe Depression",
      description: "Your responses suggest severe depression symptoms.",
      recommendation: "Immediate professional support is recommended. Please contact a mental health professional or crisis line.",
      color: "text-red-700",
      bgColor: "bg-red-100"
    };
  };

  if (showResults) {
    const interpretation = getScoreInterpretation(score);

    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">PHQ-9 Assessment Results</CardTitle>
            <CardDescription>
              Your confidential mental health screening results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className={`${interpretation.bgColor} p-6 rounded-lg border`}>
              <div className="flex items-center mb-3">
                <div className={`w-3 h-3 rounded-full ${interpretation.color.replace('text-', 'bg-')} mr-3`}></div>
                <h3 className={`text-lg font-semibold ${interpretation.color}`}>
                  Score: {score}/27 - {interpretation.level}
                </h3>
              </div>
              <p className="text-gray-700 mb-3">{interpretation.description}</p>
              <p className="font-medium text-gray-800">{interpretation.recommendation}</p>
            </div>

            {score >= 10 && (
              <div className="bg-therapeutic-primary/5 p-4 rounded-lg border border-therapeutic-primary/20">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-therapeutic-primary mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-semibold text-therapeutic-primary mb-1">Professional Support Available</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Our CRPO-licensed therapists specialize in men's mental health and can provide personalized support.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="therapeutic-gradient text-white hover:opacity-90 transition-opacity flex-1"
                onClick={() => window.open('https://janeapp.com/', '_blank')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Consultation with JaneApp
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                }}
              >
                Retake Assessment
              </Button>
            </div>

            <div className="text-xs text-gray-500 text-center">
              <p>This assessment is for informational purposes only and does not constitute medical advice.</p>
              <p>If you're experiencing thoughts of self-harm, please contact 988 (Suicide & Crisis Lifeline) immediately.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-xl">PHQ-9 Depression Screening</CardTitle>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="w-full h-2" />
          <CardDescription className="mt-4">
            Over the last 2 weeks, how often have you been bothered by:
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium leading-relaxed">
                {questions[currentQuestion]}
              </h3>

              <RadioGroup
                {...register(`q${currentQuestion + 1}` as keyof PHQ9FormData, { required: true })}
                className="space-y-3"
              >
                {options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="text-sm font-normal cursor-pointer flex-1 p-2 rounded hover:bg-muted/50 transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>

              {currentQuestion < questions.length - 1 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  disabled={!watchedValues[`q${currentQuestion + 1}` as keyof PHQ9FormData]}
                  className="therapeutic-gradient text-white hover:opacity-90"
                >
                  Next Question
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={Object.keys(watchedValues).length < questions.length}
                  className="therapeutic-gradient text-white hover:opacity-90"
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Complete Assessment
                </Button>
              )}
            </div>
          </CardContent>
        </form>
      </Card>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center text-sm text-muted-foreground">
          <AlertCircle className="h-4 w-4 mr-2" />
          Your responses are confidential and will not be stored
        </div>
      </div>
    </div>
  );
}

