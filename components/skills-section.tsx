import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Database, Code, Brain, Settings, BarChart3 } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-gradient-to-br from-primary/20 to-primary/10",
      skills: ["Python", "R", "Java", "T-SQL", "Bash", "SQL"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-secondary",
      bgColor: "bg-gradient-to-br from-secondary/20 to-secondary/10",
      skills: [
        "Azure Data Factory",
        "AWS S3/EC2/Glue",
        "Google Cloud Platform",
        "Snowflake",
        "Databricks",
        "Docker",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-gradient-to-br from-accent/20 to-accent/10",
      skills: [
        "ETL Pipelines",
        "Data Warehousing",
        "API Integration",
        "Apache Airflow",
        "Microsoft Fabric",
        "Data Orchestration",
      ],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-purple-500/10",
      skills: ["Scikit-Learn", "TensorFlow", "Deep Learning", "NLP", "Computer Vision", "Differential Privacy"],
    },
    {
      title: "Data Analysis",
      icon: BarChart3,
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-orange-500/10",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Advanced Excel", "Statistical Analysis"],
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      color: "text-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-500/20 to-indigo-500/10",
      skills: ["Git", "GitHub", "Tableau", "Jupyter", "VS Code", "SAP Hana S4", "REST APIs"],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive toolkit for building scalable data solutions and driving insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up border-0 shadow-lg`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg ${category.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground font-[family-name:var(--font-space-grotesk)]">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
