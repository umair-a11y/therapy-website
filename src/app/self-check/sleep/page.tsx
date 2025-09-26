 

import Layout from "@/components/Layout";
import SleepSelfCheck from "@/components/self-checks/SleepSelfCheck";
import type { Metadata } from "next";

export default function SleepSelfCheckPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-muted/30 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Sleep Snapshot</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A quick check‑in on sleep quality and habits. Results are shown on your device only.</p>
          </div>
          <SleepSelfCheck />
        </div>
      </div>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Sleep Snapshot | Resolve Men's Therapy",
  description:
    "Quick check‑in on sleep quality, latency, awakenings, and daytime energy. Confidential, on-device results with simple next steps.",
};
