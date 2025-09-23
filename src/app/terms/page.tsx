import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <Layout>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-therapeutic-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-8 w-8 text-therapeutic-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
            <p className="text-gray-700 mb-4">
              Resolve Men's Therapy provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Individual psychotherapy sessions</li>
              <li>ADHD specialized therapy</li>
              <li>Crisis support and resources</li>
              <li>Online therapy sessions across Ontario</li>
              <li>Between-session support and resources</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Therapist Credentials</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>CRPO Registered Psychotherapist (Qualifying)</li>
              <li>Professional liability insurance</li>
              <li>Ongoing supervision and quality assurance</li>
              <li>Evidence-based training and continuing education</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a client, you are responsible for:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Providing accurate information during intake and sessions</li>
              <li>Attending scheduled sessions on time</li>
              <li>Providing 24-hour notice for cancellations</li>
              <li>Paying fees as agreed upon</li>
              <li>Participating actively in the therapy process</li>
              <li>Following through with agreed-upon treatment plans</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Therapist Responsibilities</h2>
            <p className="text-gray-700 mb-4">As your therapist, I am responsible for:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Providing professional, evidence-based therapy</li>
              <li>Maintaining confidentiality within legal limits</li>
              <li>Providing a safe, supportive environment</li>
              <li>Maintaining professional boundaries</li>
              <li>Keeping accurate and secure records</li>
              <li>Referring to appropriate resources when needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
            <p className="text-gray-700 mb-4">Please understand that:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We are not a crisis service and cannot provide 24/7 emergency support</li>
              <li>Emergency situations require immediate professional help (911 or crisis services)</li>
              <li>Therapy outcomes cannot be guaranteed</li>
              <li>Services are provided within our scope of practice</li>
              <li>We cannot provide services outside of Ontario</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation and No-Show Policy</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-bold text-orange-900 mb-3">Cancellation Policy:</h3>
              <ul className="list-disc list-inside text-orange-800 space-y-2 mb-4">
                <li>Cancellations with less than 24-hour notice may be charged full session fee</li>
                <li>Emergency situations will be considered on case-by-case basis</li>
                <li>Please contact us as soon as possible if you need to cancel</li>
              </ul>

              <h3 className="font-bold text-orange-900 mb-3">No-Show Policy:</h3>
              <ul className="list-disc list-inside text-orange-800 space-y-2">
                <li>No-shows will be charged full session fee</li>
                <li>Repeated no-shows may result in termination of services</li>
                <li>We will attempt to contact you if you miss an appointment</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Payment due at time of service</li>
              <li>We accept cash, credit cards, and e-transfers</li>
              <li>Insurance receipts provided for reimbursement</li>
              <li>Sliding scale options available based on financial need</li>
              <li>Late payments may result in service suspension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-4">Either party may terminate services at any time:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We will provide appropriate referrals if needed</li>
              <li>Records will be maintained according to legal requirements</li>
              <li>Final session will be scheduled for proper closure</li>
              <li>Outstanding fees must be paid within 30 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Our liability is limited to the cost of services provided</li>
              <li>We are not responsible for decisions made based on therapy</li>
              <li>Emergency situations require immediate professional help</li>
              <li>We cannot guarantee specific outcomes</li>
              <li>Clients are responsible for their own actions and decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>These terms are governed by Ontario law</li>
              <li>Disputes will be resolved through appropriate channels</li>
              <li>CRPO guidelines and regulations apply</li>
              <li>Professional standards must be maintained</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold mb-2">For questions about these terms, contact:</p>
              <p><strong>Resolve Men's Therapy</strong></p>
              <p>Email: info@resolvemenstherapy.com</p>
              <p>Phone: Available upon request</p>
              <p>Address: Ontario, Canada (Online services)</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-therapeutic-primary hover:bg-therapeutic-primary/90">
              Contact Us with Questions
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}