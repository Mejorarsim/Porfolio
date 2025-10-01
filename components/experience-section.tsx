import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Briefcase } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Central England Co-operative",
      location: "Lichfield, UK",
      period: "March 2025 – Present",
      type: "Full-time",
      description: [
        "Built automated data pipelines using Azure Data Factory and SQL, integrating APIs and file-based workflows",
        "Resolved ETL failures from schema mismatches, access errors, and credentials; added robust logging",
        "Optimized ingestion via parallel processing and version-controlled deployment using Git",
        "Automated ingestion using Azure Functions, monitored via Airflow; reduced latency by 30%",
        "Collaborated with IT, BI, and finance teams to ensure secure, compliant data pipelines",
      ],
      skills: ["Azure Data Factory", "SQL", "Python", "Git", "Apache Airflow", "Microsoft Fabric"],
    },
    {
      title: "Research Data Assistant",
      company: "University of Glasgow",
      location: "Glasgow, UK",
      period: "November 2024 – March 2025",
      type: "Full-time",
      description: [
        "Conducted curriculum mapping using Excel and data models to identify interdisciplinary learning gaps",
        "Analysed life expectancy factors under the SIPHER project using QCA methodology",
        "Applied fuzzy-set QCA to model outcomes and derive health policy insights",
        "Wrote R scripts for causal extraction; contributed to a forthcoming publication",
      ],
      skills: ["R Programming", "QCA Analysis", "Data Modeling", "Statistical Analysis", "Research"],
    },
    {
      title: "Platform Engineer",
      company: "Prospecta Software Company",
      location: "Delhi, India",
      period: "March 2023 – August 2023",
      type: "Full-time",
      description: [
        "Integrated Python and SQL with SAP Hana S4 to improve data quality and real-time insights",
        "Improved ETL efficiency by 25% and reduced inconsistencies by 20% via CI/CD restructuring",
        "Built Tableau dashboards to validate data integrity with cross-functional teams",
        "Managed GitHub repositories, reviewed PRs, and enforced engineering code standards",
      ],
      skills: ["Python", "SQL", "SAP Hana S4", "Tableau", "CI/CD", "GitHub"],
    },
    {
      title: "Python Cloud Developer",
      company: "BCS Infallible Technology",
      location: "Delhi, India",
      period: "June 2022 – November 2022",
      type: "Contract",
      description: [
        "Built emotion recognition models using OpenCV and TensorFlow; improved performance by 40%",
        "Developed Emojify, a Dockerized AI tool for streamlined deployment and scalability",
        "Automated model evaluation in Python; deployed inference pipelines on AWS EC2",
      ],
      skills: ["Python", "TensorFlow", "OpenCV", "Docker", "AWS EC2", "Computer Vision"],
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
            3+ years of hands-on experience building robust data solutions across diverse industries
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
                          <Badge className="bg-teal-600 text-white hover:bg-teal-700">
                            {exp.type}
                          </Badge>
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
