import Header from "./Header";
import Footer from "./Footer";
import AssessmentPrompt from "./AssessmentPrompt";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <AssessmentPrompt />
      <Footer />
    </div>
  );
}
