 

import Layout from "@/components/Layout";
import AngerSelfCheck from "@/components/self-checks/AngerSelfCheck";
import type { Metadata } from "next";

export default function AngerSelfCheckPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-muted/30 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Anger Frequency & Recovery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Identify patterns and build cooldown and repair routines. Results are shown on your device only.</p>
          </div>
          <AngerSelfCheck />
        </div>
      </div>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Anger Frequency & Recovery | Resolve Men's Therapy",
  description:
    "Identify anger patterns and recovery speed. Confidential, on-device results with practical cooldown and repair guidance.",
};
