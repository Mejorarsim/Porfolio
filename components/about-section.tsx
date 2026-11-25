const education = [
  { degree: "MSc Data Science", detail: "University of Glasgow, Merit" },
  { degree: "B.Tech Information Technology", detail: "Amity University, First Division" },
]

const certifications = [
  {
    issuer: "Microsoft",
    items: [
      {
        name: "Fabric Data Engineer Associate (DP-700)",
        url: "https://learn.microsoft.com/en-us/users/simrangarg-5670/credentials/12a81ed560fc6b0c",
      },
      {
        name: "DevOps Engineer Expert (AZ-400)",
        url: "https://learn.microsoft.com/en-us/users/simrangarg-5670/transcript/71yqae52ox2wrw7",
      },
      {
        name: "Azure Data Engineer Associate (DP-203)",
        url: "https://learn.microsoft.com/en-us/users/simrangarg-5670/credentials/47d23e4949c96868",
      },
      {
        name: "Fabric Analytics Engineer Associate (DP-600)",
        url: "https://learn.microsoft.com/en-us/users/simrangarg-5670/credentials/a985ce8d0ebdbdde",
      },
    ],
  },
  {
    issuer: "AWS",
    items: [
      {
        name: "Cloud Practitioner (CLF-C02)",
        url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/6276e4cdc55a462eb3a94c90e95074bc",
      },
    ],
  },
  {
    issuer: "Databricks",
    items: [
      {
        name: "Data Engineer Associate",
        url: "https://credentials.databricks.com/923b9b56-ff8e-4502-a99a-ca4dd2b3f618",
      },
    ],
  },
  {
    issuer: "HashiCorp",
    items: [
      {
        name: "Terraform Associate (004)",
        url: "https://www.credly.com/badges/b7983113-c25d-434d-9f4e-7cb403edf8db/public_url",
      },
    ],
  },
  {
    issuer: "Learning programmes",
    items: [
      {
        name: "Anthropic: Claude AI Fluency and AI Engineering Learning Path, including Model Context Protocol",
        url: "https://drive.google.com/drive/folders/1VRcPilzqyT9NlwxmttqtYXPpivUGDCUI?usp=sharing",
      },
      {
        name: "McKinsey Forward Program",
        url: "https://www.credly.com/badges/6736f691-7b37-4999-bfec-f670c6a1c279/public_url",
      },
    ],
  },
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

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">About</h2>

        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
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

        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="border-b border-border pb-3 text-lg font-semibold text-foreground">Education</h3>
            <ul className="mt-5 space-y-5">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="text-base font-medium text-foreground">{item.degree}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 border-b border-border pb-3 text-lg font-semibold text-foreground">Beyond work</h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Distinguished Services Award and Secretary at Rotaract (500+ events), Sportsmanship Award and gold medals
              in football, softball and cricket at Amity, and a Letter of Recommendation from Heritage Trust Network. I
              also run a YouTube channel,{" "}
              <a href="https://www.youtube.com/@EvolvingSimran" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Evolving Simran
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="border-b border-border pb-3 text-lg font-semibold text-foreground">Certifications</h3>
            <div className="mt-5 space-y-6">
              {certifications.map((group) => (
                <div key={group.issuer}>
                  <p className="text-sm font-medium text-primary">{group.issuer}</p>
                  <ul className="mt-2 space-y-2">
                    {group.items.map((item) => (
                      <li key={item.name} className="text-base leading-snug">
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="border-b border-border pb-3 text-lg font-semibold text-foreground">Publications</h3>
            <ul className="mt-5 space-y-6">
              {publications.map((item) => (
                <li key={item.title}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className={`text-base leading-snug ${linkClass}`}>
                    {item.title}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">{item.venue}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
