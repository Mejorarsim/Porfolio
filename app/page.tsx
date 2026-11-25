import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { CursorGlow } from "@/components/cursor-glow"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CursorGlow />
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <footer className="bg-night border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-400">Simran Garg, Birmingham, UK</div>
      </footer>
    </main>
  )
}
