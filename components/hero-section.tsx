import { ArrowRight, Youtube, Github, Linkedin, Mail } from "lucide-react"

const flow = [
  { figure: "600+", caption: "source objects ingested: APIs, databases, Delta Sharing and SFTP" },
  { figure: "1", caption: "metadata driven framework on Data Factory, Synapse and Databricks" },
  { figure: "119", caption: "tables across 8 schemas rebuilt onto a Fabric lakehouse" },
  { figure: "30%", caption: "runtime cut on a critical workload" },
]

const links = [
  { href: "mailto:simranpggw@gmail.com", label: "Email", icon: Mail },
  { href: "https://linkedin.com/in/simran-g-97002291", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/Mejorarsim", label: "GitHub", icon: Github },
  { href: "https://www.youtube.com/@EvolvingSimran", label: "YouTube", icon: Youtube },
]

export function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          <div>
            <p className="text-base font-medium text-primary mb-4">
              Data Engineer, Azure data platforms: Synapse, Microsoft Fabric, Databricks
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-6">Simran Garg</h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
              I'm a Data Engineer at Central Co-op, where I own an enterprise Azure data platform built on Synapse,
              Data Factory, Microsoft Fabric and Databricks. I rebuilt 119 tables across 8 schemas onto a Fabric
              lakehouse, run 600+ source objects through one metadata driven framework and cut a critical workload's
              runtime by 30%.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-[#0b5a70]"
              >
                See my experience
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
                      className="p-2.5 rounded-md text-muted-foreground transition-colors hover:text-primary hover:bg-accent"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <img
            src="/Porfolio/images/simran-techie-profile.png"
            alt="Portrait of Simran Garg"
            className="w-40 h-52 md:w-64 md:h-80 rounded-2xl object-cover border border-border"
          />
        </div>

        {/* The platform in one line, read left to right like a pipeline */}
        <ol
          aria-label="The Central Co-op platform at a glance"
          className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4"
        >
          {flow.map((step, index) => (
            <li key={step.caption} className="relative bg-muted px-6 py-6">
              <p className="text-4xl font-semibold tracking-tight text-foreground">{step.figure}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.caption}</p>
              {index < flow.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:flex absolute -right-3.5 top-8 z-10 h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-primary"
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
