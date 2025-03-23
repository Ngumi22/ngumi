"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks with drag-and-drop functionality.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "TypeScript", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps and forecasts.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "APIs", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
  {
    id: 4,
    title: "Content Management System",
    description: "A custom CMS for managing digital content with user roles and permissions.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["PHP", "MySQL", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
    category: "backend",
  },
]

const categories = [
  { value: "all", label: "All Projects" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.value)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl bg-background shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.demoUrl} className="flex items-center gap-1">
                        Live Demo <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                      <Link href={project.githubUrl} className="flex items-center gap-1">
                        <Github className="h-4 w-4" /> Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

