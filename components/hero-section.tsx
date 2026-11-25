import { Download, Youtube, Github, Linkedin, Mail } from "lucide-react"
import { PipelineVisual } from "@/components/pipeline-visual"

const links = [
  { href: "mailto:simranpggw@gmail.com", label: "Email", icon: Mail },
  { href: "https://linkedin.com/in/simran-g-97002291", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/Mejorarsim", label: "GitHub", icon: Github },
  { href: "https://www.youtube.com/@EvolvingSimran", label: "YouTube", icon: Youtube },
]

export function HeroSection() {
  return (
    <section id="hero" className="hero-backdrop pt-24 pb-12 md:pt-28 md:pb-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-sm font-medium text-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to roles across the UK and Europe
            </p>
            <p className="text-base font-medium text-cyan-300 mb-4">
              Data Engineer, Azure data platforms: Synapse, Microsoft Fabric, Databricks
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
              <span className="text-brand-bright">Simran Garg</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-300 max-w-xl">
              I'm a Data Engineer at Central Co-op, where I own an enterprise Azure data platform built on Synapse,
              Data Factory, Microsoft Fabric and Databricks. I rebuilt 119 tables across 8 schemas onto a Fabric
              lakehouse, run 600+ source objects through one metadata driven framework and cut a critical workload's
              runtime by 30%.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#experience"
                className="bg-brand inline-flex items-center gap-2 rounded-md px-5 py-3 text-base font-semibold text-white shadow-lg shadow-violet-900/40 transition-transform hover:-translate-y-0.5"
              >
                See my experience
              </a>
              <a
                href="/Porfolio/Simran_Garg_CV.pdf"
                download="Simran_Garg_CV.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-base font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-300"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <div className="flex items-center gap-1">
                {links.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="p-2.5 rounded-md text-slate-300 transition-colors hover:text-white hover:bg-white/10"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
            <PipelineVisual />
          </div>
        </div>

      </div>
    </section>
  )
}
