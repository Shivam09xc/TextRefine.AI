
'use client';

import Link from 'next/link';
import { Text } from 'lucide-react'; // Changed from TextAa to Text

export default function LandingFooter() {
  return (
    <footer className="py-8 border-t border-border/40 bg-background">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <Text className="h-6 w-6 text-primary" /> {/* Changed from TextAa to Text */}
          <span className="text-md font-semibold text-foreground">TextRefine AI</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TextRefine AI. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

