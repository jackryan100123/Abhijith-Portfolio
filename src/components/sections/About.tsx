"use client";

import SkillsRadar from "@/components/ui/SkillsRadar";
import FadeIn, { Stagger } from "@/components/ui/FadeIn";
import AwardBanner from "@/components/ui/AwardBanner";

const stackGroups = [
  { label: "Languages", items: ["Python", "C", "C++", "TypeScript"] },
  { label: "Backend", items: ["Django", "DRF", "Celery", "FastAPI"] },
  { label: "Cloud", items: ["EC2", "S3", "RDS", "VPC", "Route 53", "CloudWatch"] },
  { label: "Platform", items: ["Docker", "Kubernetes", "Helm", "Jenkins"] },
  { label: "AI / Agents", items: ["LangChain", "LangGraph", "GraphRAG", "RAG", "MCP"] },
  { label: "Data", items: ["PostgreSQL", "Redis", "Elasticsearch", "Neo4j", "ChromaDB"] },
  { label: "Observability", items: ["Prometheus", "Grafana", "WebSockets"] },
  { label: "Security", items: ["SonarQube", "Trivy", "OWASP"] },
];

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-border">
      <FadeIn>
        <p className="section-label">01 — Profile</p>
        <h2 className="section-title">What I build</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <FadeIn delay={0.1}>
          <div className="space-y-4 font-mono text-sm text-text-base leading-relaxed">
            <p>
              I own the full arc: architecture → implementation → observability →
              secure delivery. Not slide-deck architecture — systems running in
              production with real operators depending on them.
            </p>
            <p>
              Recent focus: real-time intelligence platforms, forensic-scale data
              ingestion, DevSecOps automation, and agentic systems (RAG, LangGraph,
              persistent cluster memory).
            </p>
            <p>
              I optimize for decisions that survive scale — async boundaries,
              fail-closed security gates, and memory layers that compound value over time.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15} direction="left">
          <SkillsRadar />
        </FadeIn>
      </div>

      <FadeIn delay={0.2} className="mt-12">
        <AwardBanner />
      </FadeIn>

      <Stagger className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.06}>
        {stackGroups.map((group) => (
          <div
            key={group.label}
            className="card p-4 hover:border-accent/30 transition-colors duration-300"
          >
            <div className="font-mono text-xs text-accent uppercase tracking-wider mb-3">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="badge text-[10px]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Stagger>
    </section>
  );
}
