"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ConsentOptIn from "@/components/ConsentOptIn";

type Form = { q1?: string; q2?: string; q3?: string };

const questions = [
  { text: "Clarity: I can name my top 3 values", options: [{label:"Strongly agree",value:1},{label:"Agree",value:2},{label:"Unsure",value:3},{label:"Disagree",value:4}]},
  { text: "Alignment: My week reflects those values", options: [{label:"Often",value:1},{label:"Sometimes",value:2},{label:"Rarely",value:3},{label:"Almost never",value:4}]},
  { text: "Direction: I know the next step that matters", options: [{label:"Yes",value:1},{label:"Mostly",value:2},{label:"Not really",value:3},{label:"No",value:4}]},
];

export default function ValuesSelfCheck() {
  const [form, setForm] = useState<Form>({});
  const [submitted, setSubmitted] = useState(false);
  const total = [form.q1, form.q2, form.q3].map((v)=>v?parseInt(v):0).reduce((a,b)=>a+b,0);

  const summary = total <= 4 ? "Clear & aligned" : total <= 7 ? "Some clarity" : "Needs clarity & alignment";

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Values & Direction Mini</CardTitle>
            <CardDescription>Your values clarity snapshot</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-therapeutic-primary/5 p-4 rounded border">
              <p className="font-semibold">Score: {total} – {summary}</p>
              <p className="text-sm text-gray-700 mt-2">Try a 10‑minute values brainstorm and pick one small action this week that matches a top value.</p>
            </div>
            <ConsentOptIn toolkitName="Values to Action Worksheet" />
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
          <CardTitle className="text-xl">Values & Direction Mini</CardTitle>
          <CardDescription>Clarify what matters. Responses are not stored.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {questions.map((q,i)=> (
            <div key={i}>
              <p className="font-medium mb-2">{i+1}. {q.text}</p>
              <RadioGroup value={(form as any)[`q${i+1}`]} onValueChange={(v)=> setForm((f)=>({...f,[`q${i+1}`]: v}))}>
                {q.options.map((opt, idx)=> (
                  <div key={idx} className="flex items-center space-x-2">
                    <RadioGroupItem id={`q${i+1}-${idx}`} value={String(opt.value)} />
                    <Label htmlFor={`q${i+1}-${idx}`}>{opt.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
          <Button onClick={()=> setSubmitted(true)} disabled={!form.q1 || !form.q2 || !form.q3} className="therapeutic-gradient text-white">See Results</Button>
        </CardContent>
      </Card>
      <p className="text-xs text-gray-500 mt-3">Educational only. If you’re in crisis, call 9‑8‑8 or 911.</p>
    </div>
  );
}

