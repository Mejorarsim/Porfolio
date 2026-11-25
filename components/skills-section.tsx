const skillCategories = [
  {
    title: "Programming & Scripting",
    skills: ["Python", "PySpark", "Spark SQL", "T-SQL", "Advanced SQL", "R"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure Synapse Analytics", "Azure Data Factory", "Microsoft Fabric", "Databricks", "Azure Functions", "ADLS Gen2", "Key Vault", "AWS S3/Glue/Redshift", "GCP BigQuery", "Terraform", "Docker", "Azure DevOps", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Data Engineering",
    skills: ["Kimball Star Schemas", "Medallion and Lakehouse", "Delta Lake", "Delta Sharing", "Incremental and Watermark Loads", "CDC", "ELT and ETL", "Kafka", "Spark Structured Streaming", "Airflow", "dbt", "Snowflake"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "Scikit-Learn", "Deep Learning", "Differential Privacy", "Retrieval Augmented Generation", "Vector Search", "Model Context Protocol"],
  },
  {
    title: "Analytics & Governance",
    skills: ["Power BI", "DAX", "Row Level Security", "Tableau", "Streamlit", "RBAC", "PII Handling", "UK GDPR", "Lineage"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "SQL Server", "PostgreSQL", "Oracle", "SAP HANA", "Logic Apps", "Power Automate", "Purview", "REST APIs"],
  },
]

const tones = [
  "border-cyan-200 bg-cyan-50 text-cyan-900 hover:bg-cyan-100",
  "border-violet-200 bg-violet-50 text-violet-900 hover:bg-violet-100",
  "border-pink-200 bg-pink-50 text-pink-900 hover:bg-pink-100",
  "border-amber-200 bg-amber-50 text-amber-900 hover:bg-amber-100",
  "border-emerald-200 bg-emerald-50 text-emerald-900 hover:bg-emerald-100",
  "border-blue-200 bg-blue-50 text-blue-900 hover:bg-blue-100",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-16 border-t border-border bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground heading-bar">Skills</h2>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl">The tools I use, grouped by the job they do</p>

        <dl className="mt-6">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="grid gap-x-12 gap-y-2 border-t border-border py-3.5 md:grid-cols-[240px_1fr]">
              <dt className="text-base font-semibold text-foreground">{category.title}</dt>
              <dd className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-0.5 text-sm font-medium transition-colors ${tones[index % tones.length]}`}
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
