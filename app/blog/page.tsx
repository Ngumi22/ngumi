import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from a CMS or database
const blogPosts = [
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
  {
    id: 4,
    title: "Getting Started with Next.js 13",
    excerpt: "An introduction to Next.js 13 and its new features, including the App Router and Server Components.",
    image: "/placeholder.svg?height=600&width=800",
    date: "December 10, 2022",
    category: "Next.js",
    slug: "getting-started-nextjs-13",
  },
  {
    id: 5,
    title: "Introduction to TailwindCSS",
    excerpt: "Learn how to use TailwindCSS to rapidly build modern user interfaces without writing custom CSS.",
    image: "/placeholder.svg?height=600&width=800",
    date: "November 5, 2022",
    category: "CSS",
    slug: "introduction-to-tailwindcss",
  },
  {
    id: 6,
    title: "State Management in React with Context API",
    excerpt: "How to effectively manage state in React applications using the built-in Context API.",
    image: "/placeholder.svg?height=600&width=800",
    date: "October 18, 2022",
    category: "React",
    slug: "state-management-react-context-api",
  },
]

export default function BlogPage() {
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Blog</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Thoughts, tutorials, and insights from my journey as a developer
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-xl bg-background border border-border shadow-sm"
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
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read more <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

