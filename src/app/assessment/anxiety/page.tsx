import Layout from "@/components/Layout";
import GAD7Assessment from "@/components/assessments/GAD7Assessment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anxiety Assessment | GAD-7 Screening | MentalWell Therapy",
  description: "Take our confidential GAD-7 anxiety screening. Professional mental health assessment for men with immediate results and evidence-based recommendations.",
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

          <GAD7Assessment />

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