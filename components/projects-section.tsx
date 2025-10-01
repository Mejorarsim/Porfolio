import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Play } from "lucide-react"
import { useState } from "react"

export function ProjectsSection() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const projects = [
    {
      title: "AI Chatbot with Neural Networks",
      description:
        "Built a fully functional AI chatbot with 98% accuracy using neural networks and NLP. Features multiple interfaces (terminal, GUI, testing), sub-second response times, and 11 conversation categories with professional-grade performance.",
      period: "2024",
      type: "AI/ML Project",
      technologies: ["Python", "TensorFlow", "NLTK", "Neural Networks", "NLP", "Tkinter"],
      githubUrl: "https://github.com/Mejorarsim/AI-Chat-Bot",
      demoVideo: "/Porfolio/videos/chatbot.mp4",
      featured: true,
    },
    {
      title: "MSc Dissertation: Differential Privacy with Deep Learning",
      description:
        "Experimented with differential privacy in deep learning for human activity recognition using UCF101 dataset. Analyzed trade-offs between privacy protection and model performance, achieving balanced results with data augmentation techniques.",
      period: "2024",
      type: "Academic Research",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Differential Privacy", "Computer Vision", "PyTorch"],
      githubUrl: "https://github.com/Mejorarsim/DP-DeepLearning-HAR",
      demoVideo: "/Porfolio/videos/dp-deep-learning.mp4",
      featured: true,
    },
    {
      title: "Real-Time Retail Analytics Pipeline",
      description:
        "Production-grade streaming pipeline for real-time retail analytics with sub-second latency. Implements Kappa architecture using Kafka, Spark Structured Streaming, and PostgreSQL for windowed aggregations with 180+ events/min throughput.",
      period: "2024",
      type: "Data Engineering",
      technologies: ["Apache Kafka", "Apache Spark", "PostgreSQL", "Streamlit", "Docker", "Python"],
      githubUrl: "https://github.com/Mejorarsim/kafka-spark-streaming-pipeline",
      demoVideo: "/Porfolio/videos/kafka-pipeline.mp4",
      featured: true,
    },
    {
      title: "Bike Rental Management System",
      description:
        "Developed a Python-based bike rental app with map interface, multi-role access (User/Operator/Manager), secure authentication, wallet system, and comprehensive reporting. Features real-time bike tracking and admin dashboard.",
      period: "2024",
      type: "Full-Stack Application",
      technologies: ["Python", "SQLite3", "Tkinter", "PIL", "GUI Development", "Database Design"],
      githubUrl: "https://github.com/Mejorarsim/Bike-Rental-App",
      demoVideo: "/Porfolio/videos/bike-rental.mp4",
      featured: true,
    },
    {
      title: "Information Visualization System",
      description:
        "Built a multiview visualization system for U.S. traffic accident data analysis (2016-2023). Features interactive maps, temporal analysis, weather correlation studies, and geographic hotspot identification with advanced filtering capabilities.",
      period: "2024",
      type: "Data Visualization",
      technologies: ["HTML", "JavaScript", "D3.js", "Data Visualization", "Interactive Design"],
      githubUrl: "https://github.com/Mejorarsim/Information-Visualization",
      demoVideo: "/Porfolio/videos/info-viz.mp4",
    },
    {
      title: "Geo-Localization Analysis of Tweets",
      description:
        "Analyzed spatial distribution of geo-tagged tweets in London using 1km x 1km grids. Implemented newsworthiness scoring mechanism and performed statistical analysis of tweet distribution patterns across the city.",
      period: "2023",
      type: "Data Science",
      technologies: ["Python", "GeoPandas", "NLTK", "Spatial Analysis", "Data Mining", "Visualization"],
      githubUrl: "https://github.com/Mejorarsim/Geo-Localization",
      demoVideo: "/Porfolio/videos/geo-localization.mp4",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A showcase of data engineering, machine learning, and cloud computing projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-300 ${
                project.featured ? "ring-2 ring-primary/20 hover:ring-primary/40" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={project.featured ? "default" : "secondary"} className="text-xs">
                    {project.type}
                  </Badge>
                  {project.featured && (
                    <Badge variant="outline" className="text-xs border-primary text-primary">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg font-bold text-balance font-[family-name:var(--font-space-grotesk)]">
                  {project.title}
                </CardTitle>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demoVideo && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedVideo(project)}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
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
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)]">
                  {selectedVideo.title}
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedVideo(null)}
                >
                  ✕
                </Button>
              </div>
              <div className="p-4">
                <video 
                  className="w-full rounded-lg"
                  controls 
                  autoPlay
                  src={selectedVideo.demoVideo}
                >
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