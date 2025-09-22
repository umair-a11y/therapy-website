import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, FileText, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | CRPO Compliant | MentalWell Therapy",
  description: "Our privacy policy outlines how we protect your confidential information in accordance with CRPO guidelines and Ontario privacy laws.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy and confidentiality are fundamental to our therapeutic practice.
            We strictly adhere to CRPO guidelines and Ontario privacy legislation.
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Shield className="h-6 w-6 text-therapeutic-primary mr-3" />
                <CardTitle>CRPO Compliance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                As registered psychotherapists with the College of Registered Psychotherapists of Ontario (CRPO),
                we are bound by professional standards that prioritize client confidentiality and privacy.
              </p>
              <div className="bg-therapeutic-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Professional Standards Include:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Maintaining strict confidentiality of all client information</li>
                  <li>Obtaining informed consent before treatment begins</li>
                  <li>Secure storage and transmission of client records</li>
                  <li>Professional boundaries and ethical practice</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Lock className="h-6 w-6 text-therapeutic-primary mr-3" />
                <CardTitle>Information Collection and Use</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">What Information We Collect:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Contact information (name, phone, email) for scheduling and communication</li>
                <li>Health information relevant to your mental health treatment</li>
                <li>Session notes and treatment planning documentation</li>
                <li>Emergency contact information for safety purposes</li>
              </ul>

              <h4 className="font-semibold mt-6">How We Use Your Information:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Providing mental health treatment and therapy services</li>
                <li>Treatment planning and progress monitoring</li>
                <li>Emergency contact when necessary for your safety</li>
                <li>Required reporting as mandated by law (see limitations below)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center mb-2">
                <FileText className="h-6 w-6 text-therapeutic-primary mr-3" />
                <CardTitle>Limitations of Confidentiality</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                While we maintain strict confidentiality, there are specific legal and ethical situations
                where we may be required to share information:
              </p>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Duty to Report:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                  <li>If there is an imminent risk of harm to yourself or others</li>
                  <li>Suspected child abuse or neglect (under 16 years of age)</li>
                  <li>Court-ordered disclosure of records</li>
                  <li>With your written consent for specific purposes</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Phone className="h-6 w-6 text-therapeutic-primary mr-3" />
                <CardTitle>Your Rights</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">You have the right to:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal health information</li>
                <li>Request corrections to your records</li>
                <li>Withdraw consent for treatment (with certain limitations)</li>
                <li>File a complaint with CRPO if you have concerns</li>
                <li>Request information about how your data is being used</li>
              </ul>

              <div className="bg-therapeutic-secondary/10 p-4 rounded-lg mt-6">
                <h4 className="font-semibold mb-2">Contact Information:</h4>
                <p className="text-sm">
                  For privacy concerns or to exercise your rights: <br />
                  Email: privacy@mentalwell.ca <br />
                  Phone: (555) 123-4567 <br />
                  CRPO: <a href="https://www.crpo.ca" className="text-therapeutic-primary underline">www.crpo.ca</a>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Last updated: September 2024 | This policy complies with CRPO standards and Ontario privacy legislation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}