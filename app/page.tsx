import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />

      <div className="container py-8 md:py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to work together?</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Let's create something amazing. Reach out and let's discuss your project.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

