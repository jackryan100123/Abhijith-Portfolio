"use client";

import {
  IconChartBar,
  IconShieldLock,
  IconBolt,
} from "@tabler/icons-react";
import TopologyTabs from "@/components/diagrams/TopologyTabs";
import FadeIn, { Stagger } from "@/components/ui/FadeIn";

const philosophies = [
  {
    icon: IconChartBar,
    title: "Observability first",
    principle:
      "Metrics and traces before features. If operators can't see it, they can't run it at 3am.",
    color: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/5",
    hover: "hover:border-accent/40",
  },
  {
    icon: IconShieldLock,
    title: "Security in the pipeline",
    principle:
      "Gates, not audits. SonarQube, Trivy, OWASP block the build — vulnerabilities never reach prod.",
    color: "text-accent-3",
    border: "border-accent-3/20",
    bg: "bg-accent-3/5",
    hover: "hover:border-accent-3/40",
  },
  {
    icon: IconBolt,
    title: "Async by default",
    principle:
      "Anything non-interactive goes to the queue. Request threads answer fast; workers own the heavy lift.",
    color: "text-accent-2",
    border: "border-accent-2/20",
    bg: "bg-accent-2/5",
    hover: "hover:border-accent-2/40",
  },
];

export default function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="section-padding border-t border-border bg-bg-card/30"
    >
      <FadeIn>
        <p className="section-label">04 — Principles</p>
        <h2 className="section-title">How I design systems</h2>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12" stagger={0.1}>
        {philosophies.map((p) => (
          <div
            key={p.title}
            className={`card ${p.border} ${p.bg} ${p.hover} transition-colors duration-300`}
          >
            <p.icon className={`w-8 h-8 ${p.color} mb-4`} stroke={1.5} />
            <h3 className="font-serif text-lg italic text-text-hi mb-2">
              {p.title}
            </h3>
            <p className="font-mono text-xs text-text-muted leading-relaxed">
              {p.principle}
            </p>
          </div>
        ))}
      </Stagger>

      <FadeIn delay={0.15}>
        <div className="card p-3 sm:p-4 md:p-6 hover:border-accent/20 transition-colors duration-300 overflow-hidden">
          <p className="font-mono text-[10px] sm:text-xs text-text-muted uppercase tracking-wider mb-2 text-center px-1">
            AWS architecture patterns
          </p>
          <p className="font-mono text-[9px] sm:text-[10px] text-text-dim text-center mb-4 sm:mb-6 max-w-2xl mx-auto px-1 leading-relaxed">
            Two reference topologies — server-based microservices vs serverless event-driven.
            VPC segmentation, multi-AZ, 3-tier data plane, and scaling strategies per workload.
          </p>
          <TopologyTabs />
        </div>
      </FadeIn>
    </section>
  );
}
