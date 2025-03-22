import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function NotFound(): React.ReactNode {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md text-center">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link href="/" className="text-base">
            Return Home
          </Link>
        </Button>
      </div>
      <Footer />
    </main>
  );
} 