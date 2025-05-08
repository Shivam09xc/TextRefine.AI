
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Text } from 'lucide-react'; // Changed from TextAa to Text

export default function LandingNavbar() {
  return (
    <header className="py-4 px-6 sm:px-8 md:px-12 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Text className="h-7 w-7 text-primary" /> {/* Changed from TextAa to Text */}
          <span className="text-xl font-bold text-foreground">TextRefine AI</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="/#video"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            prefetch={false}
          >
            Demo
          </Link>
          <Button asChild>
            <Link href="/refine">Try Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

