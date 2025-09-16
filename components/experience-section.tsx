import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            3+ years of hands-on experience building robust data solutions across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
