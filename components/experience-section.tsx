import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Central England Co-operative",
      location: "Lichfield, UK",
      period: "March 2025 to Present",
      type: "Full-time",
      description: [
        "Sole data engineer on an enterprise Azure Synapse warehouse serving finance, retail and operational reporting",
        "Rebuilt 119 tables across 8 schemas onto a Microsoft Fabric lakehouse (OneLake, Delta Lake, medallion layers), with row level parity and control totals validated table by table before cutover",
        "Set the engineering standards that an internal team and an external delivery partner both work to",
        "Architect and run ingestion for 600+ registered source objects through one metadata driven framework in Python, PySpark and T-SQL on Azure Data Factory, Synapse and Databricks",
        "Sources span REST APIs, Oracle, SQL Server, Delta Sharing (102 tables nightly) and SFTP (285 files, 4.1 GB daily), secured with Key Vault secrets and parameterised linked services",
        "Built the reconciliation queries and alerting that caught what monitoring missed: a load reporting success for 27 days while writing nothing, a join silently dropping 731 articles for 41 days, 30 stores lost to a parser defect and 9.5% of daily sales lines misclassified",
        "Cut a critical workload's runtime by 30%, replaced a row by row load with COPY INTO (7.6 million rows in 3.5 minutes) and recovered a 471 million row extract by removing a dead predicate",
        "Lead production access governance, including a formal RBAC review that removed 13 stale external accounts",
        "Mentor through pull request review and run platform operations sessions on connectivity, monitoring and alerting",
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
    <section id="experience" className="py-20 bg-gradient-to-b from-white via-teal-50/20 to-cyan-50/30 dark:from-slate-900 dark:via-teal-950/20 dark:to-cyan-950/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            3+ years across data engineering, analytics and research
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-500 via-cyan-500 to-blue-500"></div>
              <CardContent className="p-6 pl-7">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Left side - Job details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          {exp.type && (
                            <Badge className="bg-teal-600 text-white hover:bg-teal-700">
                              {exp.type}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="text-xs bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
