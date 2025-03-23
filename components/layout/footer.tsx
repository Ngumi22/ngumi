import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Dev</span>Portfolio
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 md:items-end">
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/projects" className="hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="/blog" className="hover:underline underline-offset-4">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

