"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Code, Laptop, Lightbulb, Rocket } from "lucide-react"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Passionate about creating elegant solutions to complex problems
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/placeholder.svg?height=800&width=600" alt="About Me" fill className="object-cover" />
          </motion.div>

          <div ref={ref}>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold">My Journey</h3>
                <p className="mt-2 text-muted-foreground">
                  I'm a software developer with a passion for creating intuitive and efficient digital solutions. My
                  journey in tech began with a curiosity about how things work, which evolved into a career building
                  applications that solve real-world problems.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">Writing maintainable, efficient code</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <Laptop className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Modern Tech</h4>
                    <p className="text-sm text-muted-foreground">Embracing the latest technologies</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Problem Solving</h4>
                    <p className="text-sm text-muted-foreground">Finding elegant solutions to complex problems</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">Always expanding my knowledge</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-muted-foreground">
                  Through my blog, I share insights, tutorials, and experiences from my development journey, hoping to
                  contribute to the tech community and help others grow in their careers.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

