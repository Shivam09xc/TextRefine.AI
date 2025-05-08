
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Edit3, MessageSquareQuote } from 'lucide-react'; // Removed PlayCircle

export default function LandingPageContent() {
  const features = [
    {
      icon: <Sparkles className="w-10 h-10 text-primary mb-4" />,
      title: 'Enhance Clarity',
      description: 'Our AI intelligently rephrases your text to make it clearer and more understandable.',
    },
    {
      icon: <MessageSquareQuote className="w-10 h-10 text-primary mb-4" />,
      title: 'Adjust Your Tone',
      description: 'Easily switch between formal, casual, persuasive, or any custom tone you need.',
    },
    {
      icon: <Edit3 className="w-10 h-10 text-primary mb-4" />,
      title: 'Boost Conciseness',
      description: 'Trim unnecessary words and get straight to the point without losing meaning.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 animate-in fade-in slide-in-from-top-8 duration-700">
            Unlock the <span className="text-primary">Power</span> of Your Words
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-top-10 duration-700 delay-200">
            Refine, polish, and perfect your text with our cutting-edge AI writing assistant. Transform your ideas into impactful communication.
          </p>
          <Button size="lg" asChild className="shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 animate-in fade-in zoom-in-90 duration-700 delay-400">
            <Link href="/refine">Get Started for Free</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Why Choose TextRefine AI?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Experience the next level of writing assistance with features designed for impact and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover:scale-[1.02] animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-center items-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            See TextRefine AI in Action
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Watch a quick demo to see how easily you can elevate your writing.
          </p>
          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl relative bg-slate-800">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4" // Standard placeholder MP4 video
              poster="https://picsum.photos/1280/720?grayscale" // Using the previous placeholder image as a poster
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              aria-label="Product demo video of TextRefine AI"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Elevate Your Writing?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Join thousands of users who are already creating clearer, more impactful content with TextRefine AI.
          </p>
          <Button size="lg" asChild className="shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
            <Link href="/refine">Try TextRefine AI Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
