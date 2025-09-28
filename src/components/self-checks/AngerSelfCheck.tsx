"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ConsentOptIn from "@/components/ConsentOptIn";

type Form = Partial<Record<`q${1 | 2 | 3 | 4}`, string>>;

type Question = {
  key: keyof Form;
  text: string;
  options: { label: string; value: number }[];
};

const questions: readonly Question[] = [
  {
    key: "q1",
    text: "How often do you feel anger rising quickly?",
    options: [
      { label: "Rarely", value: 1 },
      { label: "Sometimes", value: 2 },
      { label: "Often", value: 3 },
      { label: "Very often", value: 4 }
    ],
  },
  {
    key: "q2",
    text: "How often do you say or do things you regret when angry?",
    options: [
      { label: "Rarely", value: 1 },
      { label: "Sometimes", value: 2 },
      { label: "Often", value: 3 },
      { label: "Very often", value: 4 }
    ],
  },
  {
    key: "q3",
    text: "How quickly can you recover and calm down?",
    options: [
      { label: "Quickly", value: 1 },
      { label: "Moderately", value: 2 },
      { label: "Slowly", value: 3 },
      { label: "Very slowly", value: 4 }
    ],
  },
  {
    key: "q4",
    text: "How much does anger impact your relationships/work?",
    options: [
      { label: "Not at all", value: 1 },
      { label: "A little", value: 2 },
      { label: "Quite a bit", value: 3 },
      { label: "A lot", value: 4 }
    ],
  },
] as const;

function calculateTotal(form: Form): number {
  return questions.reduce((sum, question) => {
    const rawValue = form[question.key];
    return sum + (rawValue ? parseInt(rawValue, 10) : 0);
  }, 0);
}

export default function AngerSelfCheck() {
  const [form, setForm] = useState<Form>({});
  const [submitted, setSubmitted] = useState(false);
  const total = calculateTotal(form);

  const level = total <= 6 ? "Low impact" : total <= 10 ? "Moderate impact" : "High impact";

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Anger Frequency & Recovery</CardTitle>
            <CardDescription>Your personal pattern snapshot</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-therapeutic-primary/5 p-4 rounded border">
              <p className="font-semibold">Score: {total} - {level}</p>
              <p className="text-sm text-gray-700 mt-2">Consider a 60-second step-away + paced breathing (4-6) cooldown routine. Practice repair scripts after conflict.</p>
            </div>
            <ConsentOptIn toolkitName="Cooldown & Repair Scripts" />
            <Button variant="outline" onClick={() => { setSubmitted(false); setForm({}); }}>Retake</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Anger Frequency & Recovery</CardTitle>
          <CardDescription>Quick check-informs practical steps. No data is stored.</CardDescription>
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
      <p className="text-xs text-gray-500 mt-3">Educational only. If you're in crisis, call 9-8-8 or 911.</p>
    </div>
  );
}
