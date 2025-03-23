"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Moon, Sun, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Check if user prefers dark mode
    if (typeof window !== "undefined") {
      const isDark =
        localStorage.getItem("darkMode") === "true" ||
        (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches)

      setIsDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("darkMode", "false")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("darkMode", "true")
    }
  }

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">Dev</span>Portfolio
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-6">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors hover:text-foreground/80 ${
                      pathname === item.href ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full h-[2px] w-full bg-primary"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>

              <Button asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </nav>
        )}

        {/* Mobile Navigation Toggle */}
        {isMobile && (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-x-0 top-16 z-40 border-b bg-background/95 backdrop-blur-md ${isMobileMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="container py-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 text-base font-medium transition-colors hover:text-foreground/80 ${
                      pathname === item.href ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 text-base font-medium text-foreground/60 transition-colors hover:text-foreground/80"
                >
                  <Github className="h-5 w-5" /> GitHub
                </Link>
              </li>
              <li className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

