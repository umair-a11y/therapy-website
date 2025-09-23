import Layout from "@/components/Layout";
import PHQ9Assessment from "@/components/assessments/PHQ9Assessment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depression Assessment | PHQ-9 Screening | MentalWell Therapy",
  description: "Take our confidential PHQ-9 depression screening. Professional mental health assessment for men with immediate results and recommendations.",
};

export default function DepressionAssessmentPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-muted/30 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Depression Assessment</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The PHQ-9 is a validated clinical tool used by healthcare professionals to screen for depression.
              This confidential assessment takes about 5 minutes to complete.
            </p>
          </div>

          <PHQ9Assessment />

          <div className="mt-8 text-center">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="font-semibold mb-3">About This Assessment</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• The PHQ-9 is widely used by healthcare professionals worldwide</p>
                <p>• Your responses are completely confidential and not stored</p>
                <p>• Results provide guidance but do not constitute a medical diagnosis</p>
                <p>• Licensed therapists can provide personalized support based on your needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}