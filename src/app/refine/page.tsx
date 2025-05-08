import TextRefinerForm from '@/components/text-refiner-form';

export default function RefinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="container mx-auto flex flex-col items-center gap-8 py-10">
        <h1 className="text-4xl font-bold tracking-tight text-center text-foreground sm:text-5xl md:text-6xl">
          AI-Powered Text Refiner
        </h1>
        <p className="mt-2 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
          Enhance your writing with the power of AI. Improve clarity, conciseness, and tone effortlessly.
        </p>
        <TextRefinerForm />
      </div>
    </main>
  );
}
