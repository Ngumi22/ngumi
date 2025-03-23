"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Modern React Application with TypeScript",
    excerpt: "Learn how to set up and structure a React application with TypeScript for better developer experience.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 15, 2023",
    category: "React",
    slug: "building-modern-react-app-typescript",
  },
  {
    id: 2,
    title: "Understanding Async/Await in JavaScript",
    excerpt: "A deep dive into asynchronous JavaScript and how to use async/await for cleaner code.",
    image: "/placeholder.svg?height=600&width=800",
    date: "February 28, 2023",
    category: "JavaScript",
    slug: "understanding-async-await-javascript",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt: "A comparison of CSS Grid and Flexbox with practical examples of when to use each layout method.",
    image: "/placeholder.svg?height=600&width=800",
    date: "January 20, 2023",
    category: "CSS",
    slug: "css-grid-vs-flexbox",
  },
]

export default function BlogSection() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  return (
    <section id="blog" className="py-20 md:py-32 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Articles</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Thoughts, tutorials, and insights from my journey as a developer
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-background border border-border shadow-sm"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read more
                  <motion.span animate={{ x: hoveredPost === post.id ? 5 : 0 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

