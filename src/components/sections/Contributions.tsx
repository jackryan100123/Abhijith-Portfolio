"use client";

import {
  IconShieldLock,
  IconTopologyStar,
  IconRobot,
} from "@tabler/icons-react";
import FadeIn, { Stagger } from "@/components/ui/FadeIn";

const items = [
  {
    icon: IconShieldLock,
    title: "DevSecOps pipeline",
    body: "Established zero-touch CI/CD with SonarQube, Trivy, and OWASP as hard gates — images don't ship on critical findings.",
    color: "text-accent-3",
    border: "hover:border-accent-3/40",
  },
  {
    icon: IconTopologyStar,
    title: "Scaling & availability design",
    body: "System design for HA deployments — async workers, health-checked rollouts, observability-first ops, and capacity planning under real traffic.",
    color: "text-accent",
    border: "hover:border-accent/40",
  },
  {
    icon: IconRobot,
    title: "Agentic RAG systems",
    body: "Production agentic chatbots — corrective RAG, tool-use via MCP, and multi-agent orchestration for domain-specific Q&A.",
    color: "text-accent-2",
    border: "hover:border-accent-2/40",
  },
];

export default function Contributions() {
  return (
    <section className="section-padding border-t border-border !py-12 sm:!py-16">
      <FadeIn>
        <p className="section-label">Cross-cutting</p>
        <h2 className="font-serif text-xl sm:text-2xl text-text-hi italic mb-6 sm:mb-8">
          Other engineering contributions
        </h2>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.08}>
        {items.map((item) => (
          <div
            key={item.title}
            className={`card ${item.border} transition-colors duration-300`}
          >
            <item.icon className={`w-7 h-7 ${item.color} mb-3`} stroke={1.5} />
            <h3 className="font-mono text-sm text-text-hi mb-2">{item.title}</h3>
            <p className="font-mono text-xs text-text-muted leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </Stagger>
    </section>
  );
}
