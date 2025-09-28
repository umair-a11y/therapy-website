"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ConsentOptIn from "@/components/ConsentOptIn";
import { Calendar } from "lucide-react";
import { BOOKING_URL } from "@/lib/site-config";

type QuestionOption = {
  label: string;
  value: number;
};

type Question = {
  key: keyof Form;
  text: string;
  options: QuestionOption[];
};

type Form = Partial<Record<`q${1 | 2 | 3}`, string>>;

const questions: readonly Question[] = [
  {
    key: "q1",
    text: "How often did you have a drink containing alcohol?",
    options: [
      { label: "Never", value: 0 },
      { label: "Monthly or less", value: 1 },
      { label: "2-4 times a month", value: 2 },
      { label: "2-3 times a week", value: 3 },
      { label: "4+ times a week", value: 4 },
    ],
  },
  {
    key: "q2",
    text: "How many drinks did you have on a typical day when you were drinking?",
    options: [
      { label: "1-2", value: 0 },
      { label: "3-4", value: 1 },
      { label: "5-6", value: 2 },
      { label: "7-9", value: 3 },
      { label: "10+", value: 4 },
    ],
  },
  {
    key: "q3",
    text: "How often did you have six or more drinks on one occasion?",
    options: [
      { label: "Never", value: 0 },
      { label: "Less than monthly", value: 1 },
      { label: "Monthly", value: 2 },
      { label: "Weekly", value: 3 },
      { label: "Daily or almost daily", value: 4 },
    ],
  },
] as const;

function calculateTotalScore(form: Form): number {
  return questions.reduce((sum, question) => {
    const rawValue = form[question.key];
    return sum + (rawValue ? parseInt(rawValue, 10) : 0);
  }, 0);
}

export default function AuditCSelfCheck() {
  const [form, setForm] = useState<Form>({});
  const [submitted, setSubmitted] = useState(false);
  const total = calculateTotalScore(form);

  const interpretation = (() => {
    if (total <= 3) return { level: "Low risk", color: "text-therapeutic-primary", bg: "bg-therapeutic-primary/10" };
    if (total <= 5) return { level: "Increasing risk", color: "text-yellow-700", bg: "bg-yellow-50" };
    return { level: "Higher risk", color: "text-red-700", bg: "bg-red-50" };
  })();

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">AUDIT-C Results</CardTitle>
            <CardDescription>Your confidential alcohol use check-in</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className={`${interpretation.bg} p-4 rounded border`}>
              <h3 className={`font-semibold ${interpretation.color}`}>Score: {total} - {interpretation.level}</h3>
              <p className="text-gray-700 mt-2 text-sm">
                This is an educational snapshot, not a diagnosis. If your score concerns you, consider speaking with a professional.
              </p>
            </div>

            <ConsentOptIn toolkitName="Alcohol Use Reflection Guide" />

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="therapeutic-gradient text-white" onClick={() => window.open(BOOKING_URL, "_blank") }>
                <Calendar className="h-4 w-4 mr-2" /> Book Consultation
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setForm({});
                }}
              >
                Retake
              </Button>
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
          <CardTitle className="text-xl">AUDIT-C Alcohol Use Check-In</CardTitle>
          <CardDescription>Answer the questions below. Your responses are not stored.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {questions.map((question, index) => (
            <div key={question.key}>
              <p className="font-medium mb-2">{index + 1}. {question.text}</p>
              <RadioGroup
                value={form[question.key] ?? ""}
                onValueChange={(value) => setForm((previous) => ({ ...previous, [question.key]: value }))}
              >
                {question.options.map((option, optionIndex) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem id={`${question.key}-${optionIndex}`} value={String(option.value)} />
                    <Label htmlFor={`${question.key}-${optionIndex}`}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
          <Button
            onClick={() => setSubmitted(true)}
            disabled={questions.some((question) => !form[question.key])}
            className="therapeutic-gradient text-white"
          >
            See Results
          </Button>
        </CardContent>
      </Card>
      <p className="text-xs text-gray-500 mt-3">Educational purposes only. If you're in crisis, call 9-8-8 or 911.</p>
    </div>
  );
}
