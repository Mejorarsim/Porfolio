"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Play } from "lucide-react"
import { useState } from "react"

type Project = {
  title: string
  type: string
  problem: string
  approach: string
  result: string
  technologies: string[]
  githubUrl: string
  demoVideo?: string
  lead?: boolean
}

const pipelineStages = [
  { name: "Python generator", detail: "Synthetic retail events as JSON" },
  { name: "Apache Kafka", detail: "3 topics: transactions, inventory, customer events" },
  { name: "Spark Structured Streaming", detail: "1 minute tumbling windows, 10 minute watermark" },
  { name: "PostgreSQL", detail: "Upsert keyed on window and store" },
  { name: "Streamlit dashboard", detail: "Refreshes every 5 seconds" },
]

function PipelineDiagram() {
  return (
    <div
      role="img"
      aria-label="Architecture: Python generator to Apache Kafka to Spark Structured Streaming to PostgreSQL to Streamlit dashboard"
      className="rounded-lg border border-border bg-muted/30 p-4"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Architecture</p>
      <div className="flex flex-col items-stretch">
        {pipelineStages.map((stage, index) => (
          <div key={stage.name} className="flex flex-col items-center">
            <div className="w-full rounded-md border border-primary/30 bg-background px-3 py-2 text-center">
              <p className="text-sm font-semibold text-foreground">{stage.name}</p>
              <p className="text-xs text-muted-foreground">{stage.detail}</p>
            </div>
            {index < pipelineStages.length - 1 && <ArrowDown className="h-4 w-4 my-1 text-primary" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-3 text-center">All services run under Docker Compose</p>
    </div>
  )
}

export function ProjectsSection() {
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: "Real Time Streaming Pipeline",
      type: "Data Engineering",
      problem:
        "Batch reporting shows store sales hours after they happen. The goal was store level revenue and customer counts within a minute of each transaction.",
      approach:
        "A Python generator publishes synthetic retail events to three Kafka topics. Spark Structured Streaming aggregates them by store in 1 minute tumbling windows, with a 10 minute watermark for late data, and upserts each window into PostgreSQL so a replay cannot create duplicates. A Streamlit dashboard reads the results.",
      result:
        "Runs at 180 events per minute in the development environment with end to end latency under 300 ms. A sample run produced 1,239 windows covering 4,538 transactions across 10 stores.",
      technologies: ["Apache Kafka", "Spark Structured Streaming", "PostgreSQL", "Streamlit", "Docker", "Python"],
      githubUrl: "https://github.com/Mejorarsim/kafka-spark-streaming-pipeline",
      demoVideo: "/Porfolio/demos/kafka-pipeline.mp4",
      lead: true,
    },
    {
      title: "Privacy Preserving Deep Learning for Human Activity Recognition",
      type: "AI/ML Research",
      problem:
        "Video models can memorise the people in their training data. This MSc dissertation measured how much accuracy a formal privacy guarantee costs.",
      approach:
        "Trained four variants on the UCF101 dataset (13,320 videos): a baseline, differentially private training with Opacus, data augmentation, and both together. Each was compared on accuracy, F1 score, precision and ROC curves.",
      result:
        "The private model reached 62.77% accuracy against 77.23% for the baseline, which puts a number on the trade off so it becomes an explicit decision.",
      technologies: ["Python", "PyTorch", "Opacus", "TensorFlow", "OpenCV", "Differential Privacy"],
      githubUrl: "https://github.com/Mejorarsim/DP-DeepLearning-HAR",
    },
    {
      title: "Power BI Dashboards",
      type: "Business Intelligence",
      problem:
        "Four datasets, each needing a report that a non technical reader can filter and question without help.",
      approach:
        "Built four reports: Amazon Prime Video content by genre, country and rating; Blinkit grocery sales by category; IT budget against actuals and forecast, modelled with separate dimension tables; and a LinkedIn profile dashboard fed by a Python preprocessing notebook.",
      result:
        "Each report is published as a .pbix file alongside its source data, so the model and measures can be opened and checked.",
      technologies: ["Power BI", "DAX", "Power Query", "Python"],
      githubUrl: "https://github.com/Mejorarsim/Power-BI-Dashboards",
    },
  ]

  const earlierWork = [
    { title: "Bike Rental Management System", url: "https://github.com/Mejorarsim/Bike-Rental-App" },
    { title: "Information Visualization System", url: "https://github.com/Mejorarsim/Information-Visualization" },
    { title: "Geo-Localization Analysis of Tweets", url: "https://github.com/Mejorarsim/Geo-Localization" },
    { title: "AI Chatbot with Neural Networks", url: "https://github.com/Mejorarsim/AI-Chat-Bot" },
  ]

  const sections = (project: Project) => [
    { label: "Problem", text: project.problem },
    { label: "Approach", text: project.approach },
    { label: "Result", text: project.result },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Three projects, each with the problem, the approach and what came out of it
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`hover:shadow-lg transition-all duration-300 ring-2 ring-primary/20 hover:ring-primary/40 ${
                project.lead ? "lg:col-span-2" : ""
              }`}
            >
              <CardHeader>
                <div className="mb-2">
                  <Badge className="text-xs">{project.type}</Badge>
                </div>
                <CardTitle className="text-xl font-bold text-balance font-[family-name:var(--font-space-grotesk)]">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={project.lead ? "grid md:grid-cols-5 gap-8" : ""}>
                  <div className={project.lead ? "md:col-span-3" : ""}>
                    <dl className="space-y-3 mb-4">
                      {sections(project).map((part) => (
                        <div key={part.label}>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-primary">{part.label}</dt>
                          <dd className="text-sm text-muted-foreground leading-relaxed text-pretty">{part.text}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      {project.demoVideo && (
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => setSelectedVideo(project)}
                          className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900"
                        >
                          <Play className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                  {project.lead && (
                    <div className="md:col-span-2">
                      <PipelineDiagram />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Earlier work */}
        <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span className="font-semibold text-foreground">Earlier work:</span>
          {earlierWork.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline"
            >
              <Github className="h-3.5 w-3.5" />
              {item.title}
            </a>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b flex items-center justify-between">
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)]">{selectedVideo.title}</h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedVideo(null)}>
                  ✕
                </Button>
              </div>
              <div className="p-4">
                <video className="w-full rounded-lg" controls autoPlay src={selectedVideo.demoVideo}>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
