type Experience = {
  title: string
  company: string
  location: string
  period: string
  type: string
  description: string[]
  skills: string[]
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Data Engineer",
      company: "Central England Co-operative",
      location: "Lichfield, UK",
      period: "March 2025 to Present",
      type: "Full-time",
      description: [
        "Sole data engineer on an enterprise Azure Synapse warehouse serving finance, retail and operational reporting",
        "Rebuilt 119 tables across 8 schemas onto a Microsoft Fabric lakehouse (OneLake, Delta Lake, medallion layers), with row level parity and control totals validated table by table before cutover",
        "Architect and run ingestion for 600+ registered source objects through one metadata driven framework in Python, PySpark and T-SQL, spanning REST APIs, Oracle, SQL Server, Delta Sharing and SFTP",
        "Built reconciliation queries and alerting that catch silent failures monitoring had missed, such as a load that reports success while writing nothing; each failure class now has a control that closes it the same day",
        "Cut a critical workload's runtime by 30% and replaced a row by row load with COPY INTO (7.6 million rows in 3.5 minutes)",
        "Lead production access governance through formal RBAC reviews, set the engineering standards an internal team and an external delivery partner work to, and run platform operations sessions on connectivity, monitoring and alerting",
      ],
      skills: ["Azure Synapse", "Azure Data Factory", "Microsoft Fabric", "Databricks", "PySpark", "T-SQL", "Python", "Delta Lake", "Key Vault", "Git"],
    },
    {
      title: "Research Assistant",
      company: "University of Glasgow",
      location: "Glasgow, UK",
      period: "November 2024 to March 2025",
      type: "Full-time",
      description: [
        "Curriculum Archetypes Intern from November to December 2024, conducting curriculum mapping and interdisciplinary gap analysis using Excel based models, then Research Assistant from January 2025",
        "Analysed determinants of life expectancy under the SIPHER programme using QCA, applying fuzzy set QCA to derive causal pathways informing public health insights",
        "Developed R scripts for calibration, truth tables and Boolean minimisation",
      ],
      skills: ["R Programming", "QCA Analysis", "Data Modeling", "Statistical Analysis", "Research"],
    },
    {
      title: "Data Consultant",
      company: "Prospecta Software",
      location: "Delhi, India",
      period: "March 2023 to July 2023",
      type: "Full-time",
      description: [
        "Built Python and SQL integrations with SAP HANA S/4, lifting reliability by 25% and cutting data inconsistencies by 20% through a CI/CD restructure",
        "Enforced engineering standards through peer reviewed pull requests",
        "Built Tableau dashboards that client teams used to validate data themselves",
      ],
      skills: ["Python", "SQL", "SAP HANA S/4", "Tableau", "CI/CD", "GitHub"],
    },
    {
      title: "Python Cloud Developer",
      company: "BCS Infallible Technology",
      location: "Delhi, India",
      period: "June 2022 to September 2022",
      type: "Contract",
      description: [
        "Built and trained emotion recognition models in Python with TensorFlow and OpenCV, improving classification accuracy by 40% against the previous baseline",
        "Containerised the inference service with Docker and deployed it on AWS EC2, replacing manual setup with a repeatable deployment",
      ],
      skills: ["Python", "TensorFlow", "OpenCV", "Docker", "AWS EC2", "Computer Vision"],
    },
    {
      title: "Technical Head",
      company: "JAX Foundation",
      location: "Delhi, India",
      period: "September 2019 to October 2021",
      type: "",
      description: [
        "Built Power BI reporting across 50+ national programmes, cutting manual reporting time by 60%; received a Letter of Recommendation",
        "Set the SQL standards and templates regional teams worked to, consolidating fragmented sources into one reporting model",
      ],
      skills: ["Power BI", "SQL", "Reporting", "Data Modeling"],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-border bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Experience</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          3+ years across data engineering, analytics and research
        </p>

        <div className="mt-12">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="grid gap-x-12 gap-y-4 border-t border-border py-10 md:grid-cols-[240px_1fr]"
            >
              <div>
                <p className="text-sm font-medium text-primary">{exp.period}</p>
                <p className="mt-1 text-base font-semibold text-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">
                  {exp.location}
                  {exp.type ? `, ${exp.type}` : ""}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{exp.title}</h3>
                <ul className="mt-4 space-y-2.5 list-disc pl-5 marker:text-primary max-w-3xl">
                  {exp.description.map((item) => (
                    <li key={item} className="text-base leading-relaxed text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-muted-foreground max-w-3xl">
                  <span className="font-medium text-foreground">Worked with:</span> {exp.skills.join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
