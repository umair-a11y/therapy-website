import Layout from "@/components/Layout";
import GAD7SelfCheck from "@/components/self-checks/GAD7SelfCheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anxiety Self-Check | GAD-7 Screening | Resolve Men's Therapy",
  description:
    "Take a confidential GAD‑7 anxiety self‑check. Educational results shown on your device with evidence‑based next steps.",
};

export default function AnxietyAssessmentPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-muted/30 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Anxiety Assessment</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The GAD-7 is a validated clinical tool used to screen for generalized anxiety disorder.
              This confidential assessment takes about 3 minutes to complete.
            </p>
          </div>

          <GAD7SelfCheck />

          <div className="mt-8 text-center">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="font-semibold mb-3">About This Assessment</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• The GAD-7 is recommended by clinical practice guidelines</p>
                <p>• Your responses are completely confidential and not stored</p>
                <p>• Results provide guidance but do not constitute a medical diagnosis</p>
                <p>• Evidence-based treatments like CBT are highly effective for anxiety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
