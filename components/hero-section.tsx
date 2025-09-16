"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Youtube, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/Porfolio/images/simran-techie-profile.png"
                alt="Simran Garg - Data Engineer & Content Creator"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content with sliding animations */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)] text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Simran Garg
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance animate-slide-up delay-200">
              Data Engineer | Cloud Enthusiast | Content Creator
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty animate-slide-up delay-300">
              Passionate Data Engineer at Central Co-op with 3+ years of experience building scalable data pipelines,
              automating ETL workflows, and deploying cloud solutions. Also sharing my UK student journey on YouTube!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up delay-400">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold px-8 py-3 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center space-x-6 animate-slide-up delay-500">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="mailto:simranpggw@gmail.com"
                className="text-muted-foreground hover:text-red-500 transform hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://linkedin.com/in/simran-g-97002291"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/Mejorarsim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gray-800 dark:hover:text-gray-200 transform hover:scale-110 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.youtube.com/@EvolvingSimran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-600 transform hover:scale-110 transition-all duration-300"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
