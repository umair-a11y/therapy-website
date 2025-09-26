"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ConsentOptIn from "@/components/ConsentOptIn";

type Form = { q1?: string; q2?: string; q3?: string; q4?: string };

const questions = [
  { text: "Overall sleep quality in the past 2 weeks", options: [
    { label: "Very good", value: 1 }, { label: "Good", value: 2 }, { label: "Fair", value: 3 }, { label: "Poor", value: 4 }
  ]},
  { text: "Time to fall asleep most nights", options: [
    { label: "< 20 minutes", value: 1 }, { label: "20–40 minutes", value: 2 }, { label: "40–60 minutes", value: 3 }, { label: "> 60 minutes", value: 4 }
  ]},
  { text: "Night awakenings that disrupt sleep", options: [
    { label: "Rarely", value: 1 }, { label: "Sometimes", value: 2 }, { label: "Often", value: 3 }, { label: "Most nights", value: 4 }
  ]},
  { text: "Daytime sleepiness/energy", options: [
    { label: "Energized", value: 1 }, { label: "Mostly okay", value: 2 }, { label: "Often tired", value: 3 }, { label: "Exhausted", value: 4 }
  ]},
];

export default function SleepSelfCheck() {
  const [form, setForm] = useState<Form>({});
  const [submitted, setSubmitted] = useState(false);
  const total = [form.q1, form.q2, form.q3, form.q4].map((v) => (v ? parseInt(v) : 0)).reduce((a,b)=>a+b,0);

  const interp = (() => {
    if (total <= 5) return { level: "Healthy sleep", color: "text-therapeutic-primary", bg: "bg-therapeutic-primary/10" };
    if (total <= 9) return { level: "Mild sleep issues", color: "text-yellow-700", bg: "bg-yellow-50" };
    return { level: "Sleep concerns present", color: "text-orange-700", bg: "bg-orange-50" };
  })();

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Sleep Snapshot Results</CardTitle>
            <CardDescription>Your sleep hygiene snapshot</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className={`${interp.bg} p-4 rounded border`}>
              <h3 className={`font-semibold ${interp.color}`}>Score: {total} – {interp.level}</h3>
              <p className="text-gray-700 text-sm mt-2">Consider a consistent bedtime, limiting screens 1 hour before sleep, and reducing caffeine after noon.</p>
            </div>
            <ConsentOptIn toolkitName="Better Sleep Quickstart" />
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
          <CardTitle className="text-xl">Sleep Snapshot</CardTitle>
          <CardDescription>Quick look at sleep quality. Responses are not stored.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {questions.map((q, i) => (
            <div key={i}>
              <p className="font-medium mb-2">{i + 1}. {q.text}</p>
              <RadioGroup value={(form as any)[`q${i+1}`]} onValueChange={(v) => setForm((f) => ({ ...f, [`q${i+1}`]: v }))}>
                {q.options.map((opt, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <RadioGroupItem id={`q${i+1}-${idx}`} value={String(opt.value)} />
                    <Label htmlFor={`q${i+1}-${idx}`}>{opt.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
          <Button onClick={() => setSubmitted(true)} disabled={!form.q1 || !form.q2 || !form.q3 || !form.q4} className="therapeutic-gradient text-white">See Results</Button>
        </CardContent>
      </Card>
      <p className="text-xs text-gray-500 mt-3">Educational only. If you're in crisis, call 9‑8‑8 or 911.</p>
    </div>
  );
}

