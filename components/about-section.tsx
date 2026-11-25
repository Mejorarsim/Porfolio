const education = [
  { degree: "MSc Data Science", detail: "University of Glasgow, Merit" },
  { degree: "B.Tech Information Technology", detail: "Amity University, First Division" },
]

const certifications = [
  { name: "DP-700 Fabric Data Engineer Associate", url: "https://learn.microsoft.com/en-us/users/simrangarg-5670/credentials/12a81ed560fc6b0c" },
  { name: "AZ-400 DevOps Engineer Expert", url: "https://learn.microsoft.com/en-us/users/simrangarg-5670/transcript/71yqae52ox2wrw7" },
  { name: "DP-203 Azure Data Engineer Associate", url: "https://learn.microsoft.com/en-us/users/simrangarg-5670/credentials/47d23e4949c96868" },
  { name: "DP-600 Fabric Analytics Engineer Associate", url: "https://learn.microsoft.com/en-us/users/simrangarg-5670/credentials/a985ce8d0ebdbdde" },
  { name: "AWS Cloud Practitioner (CLF-C02)", url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/6276e4cdc55a462eb3a94c90e95074bc" },
  { name: "Databricks Data Engineer Associate", url: "https://credentials.databricks.com/923b9b56-ff8e-4502-a99a-ca4dd2b3f618" },
  { name: "HashiCorp Terraform Associate (004)", url: "https://www.credly.com/badges/b7983113-c25d-434d-9f4e-7cb403edf8db/public_url" },
  { name: "Anthropic AI Fluency and AI Engineering Learning Path", url: "https://drive.google.com/drive/folders/1VRcPilzqyT9NlwxmttqtYXPpivUGDCUI?usp=sharing" },
  { name: "McKinsey Forward Program", url: "https://www.credly.com/badges/6736f691-7b37-4999-bfec-f670c6a1c279/public_url" },
]

const publications = [
  {
    title: "Aspect Level Sentiment Analysis on Twitter Tweets for Sarcasm Detection",
    venue: "Springer, 2025",
    url: "https://link.springer.com/chapter/10.1007/978-981-96-7556-2_23",
  },
  {
    title: "Sentiment Analysis of Twitter Data using Machine Learning: A Case Study of SVM Algorithm",
    venue: "Research Square, 2023",
    url: "https://doi.org/10.21203/rs.3.rs-2850627/v2",
  },
  {
    title: "Overview of Augmented Reality and its trends in Agriculture Industry",
    venue: "Springer, 2022",
    url: "https://link.springer.com/chapter/10.1007/978-981-16-3945-6_62",
  },
  {
    title: "The Overview of the Relevance of Virtual Reality and its Applications in Education",
    venue: "IEEE, 2022",
    url: "https://ieeexplore.ieee.org/document/10076650",
  },
]

const linkClass =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"

const blockHeading = "border-b border-border pb-2 text-lg font-semibold text-foreground"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground heading-bar">About</h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
            <p>
              As a Data Engineer at Central Co-op and a data science graduate of the University of Glasgow, I own an
              enterprise Azure data platform end to end: ingestion, warehousing, reconciliation and governance under UK
              GDPR. My work centres on pipelines that are checked by control totals, built on Synapse, Data Factory,
              Microsoft Fabric and Databricks.
            </p>
            <p>
              Before this I worked in deep learning research, public health analysis and SAP data consulting, and that
              mix shapes how I approach a problem. I like working on projects that are technically sound and useful to
              the people relying on them.
            </p>
          </div>

          <div>
            <h3 className={blockHeading}>Education and certifications</h3>
            <ul className="mt-4 space-y-2">
              {education.map((item) => (
                <li key={item.degree} className="text-base">
                  <span className="font-medium text-foreground">{item.degree}</span>
                  <span className="text-sm text-muted-foreground">, {item.detail}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {certifications.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-violet-200 bg-violet-50 px-3 py-0.5 text-sm font-medium text-violet-900 transition-colors hover:bg-violet-100"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={blockHeading}>Publications and achievements</h3>
            <ul className="mt-4 space-y-2.5">
              {publications.map((item) => (
                <li key={item.title} className="text-[15px] leading-snug">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {item.title}
                  </a>
                  <span className="text-sm text-muted-foreground"> ({item.venue})</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Distinguished Services Award and Secretary at Rotaract (500+ events), Sportsmanship Award and gold medals
              in football, softball and cricket at Amity, and a Letter of Recommendation from Heritage Trust Network. I
              also run a YouTube channel,{" "}
              <a href="https://www.youtube.com/@EvolvingSimran" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Evolving Simran
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
