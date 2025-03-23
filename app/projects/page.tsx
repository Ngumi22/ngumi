import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from a CMS or database
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    longDescription:
      "Built with React, Node.js, and MongoDB, this e-commerce platform features user authentication, product management, shopping cart functionality, payment processing with Stripe, and order tracking. The admin dashboard provides inventory management and sales analytics.",
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
    longDescription:
      "This task management application allows users to create, organize, and track tasks using a kanban-style board. Features include drag-and-drop task organization, due dates, priority levels, task filtering, and user collaboration. Built with React and TypeScript, with Firebase for backend services.",
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
    longDescription:
      "A weather dashboard that provides current conditions, hourly forecasts, and 7-day predictions. Features include interactive maps, location search, temperature graphs, and severe weather alerts. Built with JavaScript and various weather APIs.",
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
    longDescription:
      "A flexible content management system that allows users to create, edit, and publish various types of content. Features include user role management, content scheduling, media library, and customizable templates. Built with PHP, MySQL, and JavaScript.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["PHP", "MySQL", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
    category: "backend",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts and nutrition with progress visualization.",
    longDescription:
      "A comprehensive fitness tracking application that allows users to log workouts, track nutrition, set goals, and visualize progress over time. Features include exercise library, custom workout creation, calorie tracking, and progress charts.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
    category: "mobile",
  },
  {
    id: 6,
    title: "Portfolio Website Template",
    description: "A customizable portfolio template for developers and designers.",
    longDescription:
      "A modern, responsive portfolio website template designed for developers and designers to showcase their work. Features include project gallery, skills section, contact form, and blog integration. Built with HTML, CSS, and JavaScript.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
]

export default function ProjectsPage() {
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A showcase of my recent work and personal projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-xl bg-background border border-border shadow-sm"
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
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{project.longDescription}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <div className="flex items-center gap-3">
                    <Button asChild size="sm" variant="default">
                      <Link href={project.demoUrl} className="flex items-center gap-1">
                        Live Demo <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.githubUrl} className="flex items-center gap-1">
                        <Github className="h-4 w-4" /> Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

