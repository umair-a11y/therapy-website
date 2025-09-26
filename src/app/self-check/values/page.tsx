 

import Layout from "@/components/Layout";
import ValuesSelfCheck from "@/components/self-checks/ValuesSelfCheck";
import type { Metadata } from "next";

export default function ValuesSelfCheckPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-muted/30 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Values & Direction Mini</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Clarify what matters and take a small next step. Results are shown on your device only.</p>
          </div>
          <ValuesSelfCheck />
        </div>
      </div>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Values & Direction Mini | Resolve Men's Therapy",
  description:
    "Clarify what matters and choose a small next step. Confidential, on-device results with a simple values-to-action idea.",
};
