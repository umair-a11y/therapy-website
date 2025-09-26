 

import Layout from "@/components/Layout";
import AuditCSelfCheck from "@/components/self-checks/AuditCSelfCheck";
import type { Metadata } from "next";

export default function AlcoholSelfCheck() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-muted/30 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Alcohol Use Check‑in (AUDIT‑C)</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A quick, confidential reflection on drinking habits. Results are shown on your device only.</p>
          </div>
          <AuditCSelfCheck />
        </div>
      </div>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Alcohol Use Check-in (AUDIT-C) | Resolve Men's Therapy",
  description:
    "A 3-question, confidential AUDIT‑C check-in to reflect on drinking habits. Educational only; results are shown on your device.",
};
