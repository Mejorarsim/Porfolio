import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Award, Youtube, Cloud, Database, Trophy, BookOpen } from "lucide-react"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A passionate data professional and content creator dedicated to building ethical, scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Personal Info */}
          <div className="space-y-6 animate-slide-up delay-200">
            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">England, UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Education</h3>
                    <p className="text-sm text-muted-foreground">MSc Data Science, University of Glasgow (Merit)</p>
                    <p className="text-sm text-muted-foreground">B.Tech IT, Amity University (First Division)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-lg">
                    <Youtube className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Content Creator</h3>
                    <p className="text-muted-foreground">Evolving Simran</p>
                    <p className="text-sm text-muted-foreground">
                      Sharing insights about data science and student life
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Certifications */}
          <div className="space-y-6 animate-slide-up delay-300">
            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl h-fit">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-4">Certifications</h3>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Cloud className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-foreground">Microsoft Azure</span>
                        </div>
                        <div className="text-xs text-muted-foreground ml-6 space-y-1">
                          <div>• Azure Data Scientist Associate (DP-100)</div>
                          <div>• Azure Data Engineer Associate (DP-203)</div>
                          <div>• Fabric Analytics Engineer Associate (DP-600)</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Cloud className="h-4 w-4 text-orange-600" />
                          <span className="text-sm font-medium text-foreground">Amazon AWS</span>
                        </div>
                        <div className="text-xs text-muted-foreground ml-6 space-y-1">
                          <div>• AWS Certified Cloud Practitioner (CLF-C02)</div>
                          <div>• AWS Certified Solutions Architect Associate</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Database className="h-4 w-4 text-red-600" />
                          <span className="text-sm font-medium text-foreground">Databricks</span>
                        </div>
                        <div className="text-xs text-muted-foreground ml-6">
                          <div>• Databricks Certified Data Engineer Associate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Awards & Publications */}
          <div className="space-y-6 animate-slide-up delay-400">
            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-lg">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">Awards & Recognition</h3>
                    <div className="text-xs text-muted-foreground space-y-2">
                      <div>• Distinguished Services Award - Rotaract Club</div>
                      <div>• Outstanding Performance Award - Rotaract Club</div>
                      <div>• Sportsmanship Award - Amity University</div>
                      <div>• Gold Medals in Football, Softball, Cricket</div>
                      <div>• Secretary of Rotaract Club (500+ events)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">Publications</h3>
                    <div className="text-xs text-muted-foreground space-y-2">
                      <div>• Virtual Reality in Education (IEEE, 2022)</div>
                      <div>• Augmented Reality in Agriculture (Springer, 2021)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto animate-slide-up delay-500">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-4 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a Data Engineer at Central Co-op and a passionate data science graduate from the University of
                  Glasgow, I thrive at the intersection of cloud engineering, machine learning, and responsible AI. I
                  specialize in building secure, scalable data pipelines using tools like Microsoft Fabric, Azure, and
                  AWS.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  With hands-on experience across diverse domains—from deep learning research and economic policy
                  analysis to enterprise data architecture—I bring a versatile skillset and a mindset for continuous
                  improvement. I'm always excited to collaborate on projects that are technically robust and
                  purpose-driven.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
