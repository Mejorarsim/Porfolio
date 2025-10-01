import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Award, Youtube, Cloud, Database, Trophy, BookOpen, Sparkles, Code2, Brain, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20 relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A passionate data professional and content creator dedicated to building 
            <span className="font-semibold text-gray-800 dark:text-gray-200"> ethical, scalable solutions</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {/* First Row */}
          {/* Location Card */}
          <Card className="group relative overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-6 relative">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">England, UK 🇬🇧</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="group relative overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-6 relative">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Education</h3>
                  <div className="space-y-2">
                    <div className="p-2 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 rounded-lg">
                      <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">MSc Data Science</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">University of Glasgow • Merit</p>
                    </div>
                    <div className="p-2 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 rounded-lg">
                      <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">B.Tech IT</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Amity University • First Division</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Creator Card */}
          <Card className="group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/50 dark:to-pink-950/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 right-0 p-2">
              <div className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                CREATOR
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <Youtube className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Content Creator</h3>
                  <a href="https://www.youtube.com/@EvolvingSimran" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 font-bold hover:underline">
                    Evolving Simran
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Sharing insights about data science and student life
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <a href="https://www.youtube.com/@EvolvingSimran" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full font-medium hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors">
                      Tech Education
                    </a>
                    <a href="https://www.youtube.com/@EvolvingSimran" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full font-medium hover:bg-pink-200 dark:hover:bg-pink-900/40 transition-colors">
                      Career Tips
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Second Row */}
          {/* Certifications Card */}
          <Card className="group relative overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 h-fit">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                    Certifications
                    <span className="text-xs px-2 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full font-bold">
                      6+ CERTS
                    </span>
                  </h3>

                  <div className="space-y-4">
                    {/* Microsoft Azure */}
                    <div className="group/item p-3 rounded-xl bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 hover:from-blue-100 dark:hover:from-blue-900/30 transition-all">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="p-1.5 bg-blue-500 rounded-lg">
                          <Cloud className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Microsoft Azure</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        <a href="https://learn.microsoft.com/en-us/users/simrangarg-5670/credentials/5f8151e18ca761c3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Data Scientist Associate (DP-100)</span>
                        </a>
                        <a href="https://learn.microsoft.com/en-us/users/simrangarg-5670/credentials/47d23e4949c96868" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Data Engineer Associate (DP-203)</span>
                        </a>
                        <a href="https://learn.microsoft.com/en-us/users/simrangarg-5670/credentials/a985ce8d0ebdbdde" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Fabric Analytics Engineer (DP-600)</span>
                        </a>
                      </div>
                    </div>

                    {/* AWS */}
                    <div className="group/item p-3 rounded-xl bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-900/20 hover:from-orange-100 dark:hover:from-orange-900/30 transition-all">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="p-1.5 bg-orange-500 rounded-lg">
                          <Cloud className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Amazon AWS</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/6276e4cdc55a462eb3a94c90e95074bc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                          <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Cloud Practitioner (CLF-C02)</span>
                        </a>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">Solutions Architect Associate</span>
                        </div>
                      </div>
                    </div>

                    {/* Databricks */}
                    <div className="group/item p-3 rounded-xl bg-gradient-to-r from-red-50 to-transparent dark:from-red-900/20 hover:from-red-100 dark:hover:from-red-900/30 transition-all">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="p-1.5 bg-red-500 rounded-lg">
                          <Database className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Databricks</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        <a href="https://credentials.databricks.com/923b9b56-ff8e-4502-a99a-ca4dd2b3f618" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Data Engineer Associate</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Publications Card - MOVED TO MIDDLE POSITION */}
          <Card className="group relative overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">Publications</h3>
                  <div className="space-y-3">
                    {/* Publication 1 */}
                    <div className="group/item p-3 rounded-xl bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/20 hover:from-green-100 dark:hover:from-green-900/30 transition-all">
                      <a href="https://link.springer.com/chapter/10.1007/978-981-96-7556-2_23" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="p-1.5 bg-green-500 rounded-lg">
                            <BookOpen className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400">
                            Aspect Level Sentiment Analysis on Twitter Tweets for Sarcasm Detection
                          </span>
                        </div>
                        <div className="ml-7 text-xs text-gray-600 dark:text-gray-400">Springer, 2024</div>
                      </a>
                    </div>

                    {/* Publication 2 */}
                    <div className="group/item p-3 rounded-xl bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/20 hover:from-green-100 dark:hover:from-green-900/30 transition-all">
                      <a href="https://link.springer.com/chapter/10.1007/978-981-16-3945-6_62" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="p-1.5 bg-green-500 rounded-lg">
                            <BookOpen className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400">
                            Overview of Augmented Reality and its trends in Agriculture Industry
                          </span>
                        </div>
                        <div className="ml-7 text-xs text-gray-600 dark:text-gray-400">Springer, 2021</div>
                      </a>
                    </div>

                    {/* Publication 3 */}
                    <div className="group/item p-3 rounded-xl bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/20 hover:from-green-100 dark:hover:from-green-900/30 transition-all">
                      <a href="https://ieeexplore.ieee.org/document/10076650" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="p-1.5 bg-green-500 rounded-lg">
                            <BookOpen className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400">
                            The Overview of the Relevance of Virtual Reality and its Applications in Education
                          </span>
                        </div>
                        <div className="ml-7 text-xs text-gray-600 dark:text-gray-400">IEEE, 2022</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards Card - MOVED TO LAST POSITION */}
          <Card className="group relative overflow-hidden border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-amber-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative p-3 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl shadow-lg">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">Awards & Recognition</h3>
                  <div className="space-y-2">
                    {[
                      "Distinguished Services Award - Rotaract",
                      "Outstanding Performance Award",
                      "Sportsmanship Award - Amity",
                      "Gold Medals: Football, Softball, Cricket",
                      "Secretary of Rotaract (500+ events)"
                    ].map((award, i) => (
                      <div key={i} className="flex items-start gap-2 group/award">
                        <Zap className="w-3 h-3 text-yellow-500 mt-0.5 group-hover/award:animate-pulse" />
                        <span className="text-xs text-gray-600 dark:text-gray-400 group-hover/award:text-gray-800 dark:group-hover/award:text-gray-200 transition-colors">
                          {award}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bio Section with enhanced design */}
        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-teal-50/30 to-blue-50/30 dark:from-slate-800 dark:via-teal-950/30 dark:to-blue-950/30">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"></div>
            <CardContent className="p-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Brain className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Professional Summary</span>
                <Code2 className="w-5 h-5 text-purple-500" />
              </div>
              
              <div className="space-y-6 text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Data Engineer at Central Co-op</span> and 
                  a passionate data science graduate from the <span className="font-semibold text-gray-900 dark:text-white">University of Glasgow</span>, 
                  I thrive at the intersection of cloud engineering, machine learning, and responsible AI. I specialize in building 
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> secure, scalable data pipelines</span> using 
                  tools like Microsoft Fabric, Azure, and AWS.
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {["Microsoft Fabric", "Azure", "AWS", "Machine Learning", "Data Pipelines", "Responsible AI"].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-700 dark:text-teal-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  With hands-on experience across diverse domains—from <span className="font-semibold">deep learning research</span> and 
                  <span className="font-semibold"> economic policy analysis</span> to <span className="font-semibold">enterprise data architecture</span>—I 
                  bring a versatile skillset and a mindset for continuous improvement. I'm always excited to collaborate on projects 
                  that are <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">technically robust and purpose-driven</span>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
