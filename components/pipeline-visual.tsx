"use client"

import { useEffect, useState } from "react"

const sources = [
  { label: "REST APIs", y: 34, color: "#22d3ee" },
  { label: "Oracle, SQL Server", y: 124, color: "#a78bfa" },
  { label: "Delta Sharing", y: 214, color: "#f472b6" },
  { label: "SFTP files", y: 304, color: "#fbbf24" },
]

const layers = [
  { label: "Bronze", detail: "raw, as landed", y: 40, color: "#f59e0b", fill: "rgba(245,158,11,0.14)" },
  { label: "Silver", detail: "validated", y: 168, color: "#cbd5e1", fill: "rgba(203,213,225,0.12)" },
  { label: "Gold", detail: "119 tables", y: 296, color: "#fde047", fill: "rgba(253,224,71,0.14)" },
]

const sourcePath = (y: number) => `M150,${y + 22} C185,${y + 22} 180,191 215,191`
const toBronze = "M345,191 C375,191 372,68 402,68"
const bronzeToSilver = "M461,96 L461,168"
const silverToGold = "M461,224 L461,296"

export function PipelineVisual() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  return (
    <svg
      viewBox="0 0 540 380"
      role="img"
      aria-label="Animated diagram: REST APIs, Oracle and SQL Server, Delta Sharing and SFTP files flow through one metadata framework into bronze, silver and gold lakehouse layers"
      className="w-full h-auto"
    >
      {/* connectors */}
      <g fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5">
        {sources.map((source) => (
          <path key={source.label} d={sourcePath(source.y)} />
        ))}
        <path d={toBronze} />
        <path d={bronzeToSilver} />
        <path d={silverToGold} />
      </g>

      {/* moving records */}
      {animate && (
        <g>
          {sources.map((source, index) =>
            [0, 1].map((n) => (
              <circle key={`${source.label}-${n}`} r="4.5" fill={source.color}>
                <animateMotion
                  dur="2.6s"
                  begin={`-${index * 0.45 + n * 1.3}s`}
                  repeatCount="indefinite"
                  path={sourcePath(source.y)}
                />
              </circle>
            )),
          )}
          {[0, 0.9, 1.8].map((delay) => (
            <circle key={`b-${delay}`} r="4.5" fill="#ffffff">
              <animateMotion dur="2.7s" begin={`-${delay}s`} repeatCount="indefinite" path={toBronze} />
            </circle>
          ))}
          {[0, 1].map((delay) => (
            <circle key={`s-${delay}`} r="4.5" fill="#f59e0b">
              <animateMotion dur="2s" begin={`-${delay}s`} repeatCount="indefinite" path={bronzeToSilver} />
            </circle>
          ))}
          {[0.5, 1.5].map((delay) => (
            <circle key={`g-${delay}`} r="4.5" fill="#fde047">
              <animateMotion dur="2s" begin={`-${delay}s`} repeatCount="indefinite" path={silverToGold} />
            </circle>
          ))}
        </g>
      )}

      {/* sources */}
      {sources.map((source) => (
        <g key={source.label}>
          <rect x="6" y={source.y} width="144" height="44" rx="10" fill="rgba(255,255,255,0.06)" stroke={source.color} strokeWidth="1.5" />
          <text x="78" y={source.y + 27} textAnchor="middle" fontSize="13" fontWeight="500" fill="#f8fafc">
            {source.label}
          </text>
        </g>
      ))}

      {/* framework */}
      <defs>
        <linearGradient id="frameworkFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#06b6d4" />
          <stop offset="0.55" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#db2777" />
        </linearGradient>
      </defs>
      {animate && <rect x="215" y="151" width="130" height="80" rx="16" fill="none" stroke="#a78bfa" strokeWidth="2" className="pulse-ring" />}
      <rect x="215" y="151" width="130" height="80" rx="16" fill="url(#frameworkFill)" />
      <text x="280" y="186" textAnchor="middle" fontSize="14" fontWeight="600" fill="#ffffff">
        One framework
      </text>
      <text x="280" y="206" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.9)">
        600+ source objects
      </text>

      {/* medallion layers */}
      {layers.map((layer) => (
        <g key={layer.label}>
          <rect x="402" y={layer.y} width="118" height="56" rx="12" fill={layer.fill} stroke={layer.color} strokeWidth="1.5" />
          <text x="461" y={layer.y + 25} textAnchor="middle" fontSize="14" fontWeight="600" fill={layer.color}>
            {layer.label}
          </text>
          <text x="461" y={layer.y + 43} textAnchor="middle" fontSize="12" fill="rgba(248,250,252,0.8)">
            {layer.detail}
          </text>
        </g>
      ))}
    </svg>
  )
}
