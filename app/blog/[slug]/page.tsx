"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from a CMS or database
const blogPosts = {
  "building-modern-react-app-typescript": {
    title: "Building a Modern React Application with TypeScript",
    date: "March 15, 2023",
    category: "React",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>TypeScript has become an essential tool for building robust React applications. In this article, we'll explore how to set up a modern React application with TypeScript from scratch.</p>
      
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static type-checking to JavaScript, which helps catch errors early in the development process. This is particularly useful in large React applications where components can have complex prop structures.</p>
      
      <h2>Setting Up Your Project</h2>
      <p>Let's start by creating a new React application with TypeScript support:</p>
      
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      
      <p>This command creates a new React application with TypeScript configuration already set up. The template includes TypeScript definitions for React and other dependencies.</p>
      
      <h2>Creating Type-Safe Components</h2>
      <p>One of the main benefits of TypeScript is the ability to define the shape of your component props:</p>
      
      <pre><code>interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};</code></pre>
      
      <p>With this approach, TypeScript will ensure that all required props are provided when using the Button component, and will show errors if the wrong types are passed.</p>
      
      <h2>Managing State with TypeScript</h2>
      <p>TypeScript also helps with state management in React. Here's an example using useState with proper typing:</p>
      
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Fetch user data
    fetchUser()
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};</code></pre>
      
      <h2>Conclusion</h2>
      <p>TypeScript provides significant benefits when building React applications, especially as they grow in complexity. By catching type errors during development, you can avoid many common bugs and improve the overall quality of your code.</p>
      
      <p>In future articles, we'll explore more advanced TypeScript patterns for React, including generics, utility types, and integration with state management libraries.</p>
    `,
  },
  // Additional blog posts would be defined here
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-4">The blog post you're looking for doesn't exist.</p>
        <Button asChild className="mt-6">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-muted py-12">
        <div className="container">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/blog" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </Button>

          <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
            <Badge className="w-fit">{post.category}</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
            <p className="text-muted-foreground">{post.date}</p>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
            />
          </div>

          <article className="prose prose-gray dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <div className="mt-12 pt-6 border-t">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

