import LandingNavbar from '@/components/landing-navbar';
import LandingPageContent from '@/components/landing-page-content';
import LandingFooter from '@/components/landing-footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LandingNavbar />
      <main className="flex-grow">
        <LandingPageContent />
      </main>
      <LandingFooter />
    </div>
  );
}
