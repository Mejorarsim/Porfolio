import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Cloud, Database, BookOpen, Code2, Brain } from "lucide-react"

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

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8 items-start">
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
                      7 CERTS
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
                        <a href="https://learn.microsoft.com/en-us/users/simrangarg-5670/credentials/12a81ed560fc6b0c" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Fabric Data Engineer Associate (DP-700)</span>
                        </a>
                        <a href="https://learn.microsoft.com/en-us/users/simrangarg-5670/transcript/71yqae52ox2wrw7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">DevOps Engineer Expert (AZ-400)</span>
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

                    <div className="group/item p-3 rounded-xl bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 hover:from-purple-100 dark:hover:from-purple-900/30 transition-all">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="p-1.5 bg-purple-500 rounded-lg">
                          <Cloud className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">HashiCorp</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        <a href="https://www.credly.com/badges/b7983113-c25d-434d-9f4e-7cb403edf8db/public_url" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Terraform Associate (004)</span>
                        </a>
                      </div>
                    </div>

                    <div className="group/item p-3 rounded-xl bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 hover:from-teal-100 dark:hover:from-teal-900/30 transition-all">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="p-1.5 bg-teal-500 rounded-lg">
                          <Cloud className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Learning Programmes</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        <a href="https://drive.google.com/drive/folders/1VRcPilzqyT9NlwxmttqtYXPpivUGDCUI?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                          <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Anthropic: Claude AI Fluency and AI Engineering Learning Path, including Model Context Protocol</span>
                        </a>
                        <a href="https://www.credly.com/badges/6736f691-7b37-4999-bfec-f670c6a1c279/public_url" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                          <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">McKinsey Forward Program</span>
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
                        <div className="ml-7 text-xs text-gray-600 dark:text-gray-400">Springer, 2025</div>
                      </a>
                    </div>

                    {/* Publication: Research Square */}
                    <div className="group/item p-3 rounded-xl bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/20 hover:from-green-100 dark:hover:from-green-900/30 transition-all">
                      <a href="https://doi.org/10.21203/rs.3.rs-2850627/v2" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="p-1.5 bg-green-500 rounded-lg">
                            <BookOpen className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400">
                            Sentiment Analysis of Twitter Data using Machine Learning: A Case Study of SVM Algorithm
                          </span>
                        </div>
                        <div className="ml-7 text-xs text-gray-600 dark:text-gray-400">Research Square, 2023</div>
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
                        <div className="ml-7 text-xs text-gray-600 dark:text-gray-400">Springer, 2022</div>
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

        </div>

        {/* Awards and activities in one line */}
        <p className="max-w-5xl mx-auto mb-16 text-center text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <span className="font-semibold text-gray-900 dark:text-white">Beyond work:</span> Distinguished Services Award and Secretary at Rotaract (500+ events),
          Sportsmanship Award and gold medals in football, softball and cricket at Amity, a Letter of Recommendation from Heritage Trust Network, and a YouTube channel,{" "}
          <a href="https://www.youtube.com/@EvolvingSimran" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700 dark:text-teal-300 hover:underline">
            Evolving Simran
          </a>.
        </p>

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
                  a data science graduate of the <span className="font-semibold text-gray-900 dark:text-white">University of Glasgow</span>,
                  I own an enterprise Azure data platform end to end: ingestion, warehousing, reconciliation and governance under UK GDPR. My work centres on
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> pipelines that are checked by control totals</span>, built on
                  Synapse, Data Factory, Microsoft Fabric and Databricks.
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {["Azure Synapse", "Microsoft Fabric", "Databricks", "PySpark", "Data Governance", "Reconciliation"].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-700 dark:text-teal-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Before this I worked in <span className="font-semibold">deep learning research</span>,
                  <span className="font-semibold"> public health analysis</span> and <span className="font-semibold">SAP data consulting</span>, and
                  that mix shapes how I approach a problem. I like working on projects
                  that are <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">technically sound and useful to the people relying on them</span>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
