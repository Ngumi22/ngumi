"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-4">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  Feel free to reach out through any of these channels or use the contact form.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="rounded-full p-2 bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full p-2 bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="rounded-full p-2 bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-medium mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground mb-4">Feel free to stop by during these hours:</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-xl bg-background p-6 shadow-sm border border-border"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can I help you?" required />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-medium mb-2">What services do you offer?</h3>
                <p className="text-sm text-muted-foreground">
                  I specialize in web development, focusing on modern JavaScript frameworks like React and Next.js, as
                  well as full-stack development.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-medium mb-2">What is your typical project timeline?</h3>
                <p className="text-sm text-muted-foreground">
                  Project timelines vary based on complexity, but I typically deliver small projects within 2-4 weeks
                  and larger projects within 1-3 months.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-medium mb-2">Do you offer maintenance services?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, I offer ongoing maintenance and support packages to ensure your website or application continues
                  to run smoothly after launch.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-medium mb-2">How do you handle project communication?</h3>
                <p className="text-sm text-muted-foreground">
                  I maintain regular communication through your preferred channels (email, Slack, etc.) with weekly
                  updates and milestone reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

