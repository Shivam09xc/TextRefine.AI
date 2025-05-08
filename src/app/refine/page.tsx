import LandingNavbar from '@/components/landing-navbar';
import LandingFooter from '@/components/landing-footer';
import TextRefinerForm from '@/components/text-refiner-form';

export default function RefinePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LandingNavbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold tracking-tight text-center text-foreground sm:text-5xl md:text-6xl">
            AI-Powered Text Refiner
          </h1>
          <p className="mt-2 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
            Enhance your writing with the power of AI. Improve clarity, conciseness, and tone effortlessly.
          </p>
          <TextRefinerForm />
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
