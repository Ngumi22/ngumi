"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
      <motion.div
        className="container relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Software Developer & <span className="text-primary">Tech Blogger</span>
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Building digital experiences with code and sharing my journey through words.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button asChild size="lg">
                <Link href="/projects" className="flex items-center gap-2">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/blog">Read My Blog</Link>
              </Button>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-[300px] sm:h-[400px] md:h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Developer Portrait"
                fill
                className="object-cover mix-blend-overlay opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-secondary/30 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </motion.div>
    </section>
  )
}

