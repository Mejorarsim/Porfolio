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

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Skills</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">The tools I use, grouped by the job they do</p>

        <dl className="mt-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="grid gap-x-12 gap-y-3 border-t border-border py-6 md:grid-cols-[240px_1fr]">
              <dt className="text-base font-semibold text-foreground">{category.title}</dt>
              <dd className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted-foreground"
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
