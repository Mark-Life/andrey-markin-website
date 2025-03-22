import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">Mark Life Ltd</p>
          </div>

          <div className="flex space-x-6">
            <Link href="/" className="text-foreground/70 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#contact" className="text-foreground/70 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-foreground/70 hover:text-primary transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

