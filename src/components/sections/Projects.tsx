"use client";

import { useState, ReactNode, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/site";
import { IconBrandGithub, IconChevronDown, IconBrain, IconCloud } from "@tabler/icons-react";
import FadeIn from "@/components/ui/FadeIn";
import KubeMemoryArchitecture from "@/components/diagrams/KubeMemoryArchitecture";
import CICDPipeline from "@/components/diagrams/CICDPipeline";
import AWSChatbotArchitecture from "@/components/diagrams/AWSChatbotArchitecture";

interface Project {
  title: string;
  tagline: string;
  description: string;
  problem?: string;
  features?: string[];
  badges: string[];
  badgeVariant?: "accent" | "purple" | "orange";
  github?: string;
  diagram?: ReactNode;
  featured?: boolean;
  inProgress?: boolean;
  screenshot?: string;
}

const projects: Project[] = [
  {
    title: "KubeMemory",
    tagline: "A persistent AI brain for Kubernetes clusters",
    description:
      "GraphRAG + LangGraph agents + local LLM — zero cloud inference cost. Your cluster remembers every incident, learns from every fix, and troubleshoots with full historical context.",
    problem:
      "Every K8s tool (K8sGPT, Datadog, PagerDuty) is stateless and amnesiac — each incident treated like the first. KubeMemory compounds institutional knowledge over time.",
    badges: [
      "GraphRAG",
      "LangGraph",
      "ChromaDB",
      "Neo4j",
      "Corrective RAG",
      "MCP",
      "Local LLM",
      "WebSockets",
    ],
    badgeVariant: "purple",
    diagram: <KubeMemoryArchitecture />,
    featured: true,
    screenshot: SITE.kubeMemoryScreenshot,
  },
  {
    title: "AWS Chatbot with Terraform Integration",
    tagline: "Intelligent AWS automation via natural language",
    description:
      "An intelligent chatbot that automates AWS activities, provides cost-efficient solutions, and performs vulnerability testing using Terraform and LLM AI — with a separated control plane and worker fleet.",
    inProgress: true,
    features: [
      "Natural language processing for AWS operations",
      "Automated infrastructure provisioning with Terraform",
      "Cost optimization recommendations",
      "Security vulnerability testing",
      "Conversation context management",
      "Machine learning-based performance improvement",
    ],
    badges: [
      "Terraform",
      "LLM",
      "AWS",
      "Packer",
      "AMI Templates",
      "IAM",
      "Cost Explorer",
    ],
    badgeVariant: "orange",
    diagram: <AWSChatbotArchitecture />,
  },
  {
    title: "Enterprise DevSecOps Pipeline",
    tagline: "Industry-standard · on-prem · air-gap ready",
    description:
      "Established an organization-wide CI/CD platform for private infrastructure — NIST-aligned security gates, signed artifacts, SBOM generation, and policy-as-code enforcement before any workload reaches production Kubernetes.",
    features: [
      "On-prem Jenkins with shared pipeline libraries — no dependency on public SaaS scanners",
      "SAST (SonarQube) + SCA (Trivy) + DAST (OWASP ZAP) as hard merge gates",
      "Private Harbor registry · Cosign image signing · immutable promotion path",
      "Blue/green & canary deploys with automated rollback and synthetic monitoring",
      "4-eyes change approval · CIS benchmarks · segregated build agents",
    ],
    badges: [
      "On-Prem",
      "Jenkins",
      "SonarQube",
      "Trivy",
      "OWASP",
      "Harbor",
      "Helm",
      "Vault",
      "SBOM",
    ],
    badgeVariant: "orange",
    diagram: <CICDPipeline />,
  },
];

function useDiagramOpen(featured?: boolean, inProgress?: boolean) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prefersOpen = featured || inProgress;
    if (!prefersOpen) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    if (mq.matches) setOpen(true);
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches && prefersOpen) setOpen(true);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [featured, inProgress]);

  return [open, setOpen] as const;
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [open, setOpen] = useDiagramOpen(project.featured, project.inProgress);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const badgeClass =
    project.badgeVariant === "purple"
      ? "badge-purple"
      : project.badgeVariant === "orange"
        ? "badge-orange"
        : "badge-accent";

  const accentHover =
    project.badgeVariant === "orange"
      ? "hover:text-accent-3"
      : project.badgeVariant === "purple"
        ? "hover:text-accent-2"
        : "hover:text-accent";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`project-card card group ${
        project.featured
          ? "border-accent-2/30 bg-gradient-to-br from-accent-2/5 via-bg-card to-bg-card ring-1 ring-accent-2/10"
          : project.inProgress
            ? "border-accent-3/25 bg-gradient-to-br from-accent-3/5 to-bg-card"
            : "hover:border-border/80"
      } transition-all duration-300`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
        {project.featured && (
          <>
            <IconBrain className="w-4 h-4 text-accent-2 shrink-0" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-2">
              Flagship project
            </span>
          </>
        )}
        {project.inProgress && (
          <>
            <IconCloud className="w-4 h-4 text-accent-3 shrink-0" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-3">
              In progress
            </span>
          </>
        )}
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start gap-5 sm:gap-6 lg:gap-8 min-w-0">
        {project.screenshot && (
          <div className="w-full min-w-0 max-w-full mx-auto sm:max-w-md lg:w-44 xl:w-52 shrink-0 lg:mx-0 lg:order-2">
            <div className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square rounded-lg border border-border bg-bg-surface overflow-hidden">
              <Image
                src={project.screenshot}
                alt={`${project.title} dashboard screenshot`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 224px"
              />
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0 w-full lg:order-1">
          <div className="flex items-start justify-between gap-2 sm:gap-3 min-w-0">
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-base sm:text-xl md:text-2xl text-text-hi italic leading-snug break-words">
                {project.title}
              </h3>
              <p
                className={`font-mono text-[11px] sm:text-xs mt-1 break-words ${
                  project.badgeVariant === "orange"
                    ? "text-accent-3"
                    : project.badgeVariant === "purple"
                      ? "text-accent-2"
                      : "text-accent"
                }`}
              >
                {project.tagline}
              </p>
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors shrink-0 p-1"
                aria-label={`${project.title} on GitHub`}
              >
                <IconBrandGithub className="w-5 h-5" />
              </a>
            )}
          </div>

          {project.problem && (
            <div className="mt-3 sm:mt-4 p-3 rounded border border-accent-2/20 bg-accent-2/5 min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-wider text-accent-2 mb-1">
                The problem
              </p>
              <p className="font-mono text-[11px] sm:text-xs text-text-muted leading-relaxed break-words">
                {project.problem}
              </p>
            </div>
          )}

          <p className="mt-3 sm:mt-4 font-mono text-xs sm:text-sm text-text-muted leading-relaxed break-words">
            {project.description}
          </p>

          {project.features && (
            <ul className="mt-3 sm:mt-4 space-y-2 font-mono text-[11px] sm:text-xs text-text-base min-w-0">
              {project.features.map((line) => (
                <li key={line} className="flex gap-2 min-w-0">
                  <span className="text-accent-3 shrink-0">→</span>
                  <span className="min-w-0 break-words">{line}</span>
                </li>
              ))}
            </ul>
          )}

          {project.featured && (
            <ul className="mt-3 sm:mt-4 space-y-2 font-mono text-[11px] sm:text-xs text-text-base min-w-0">
              {[
                "K8s Watcher → streams cluster events in real-time",
                "ChromaDB → semantic search over past incidents",
                "Neo4j → causal graph (deploy correlations, crash patterns)",
                "LangGraph → Retriever → Correlator → Recommender agents",
                "Corrective RAG → learns when engineers override AI",
                "MCP Server → Claude Desktop queries cluster with full context",
                "Django + React → live dashboard via WebSockets",
              ].map((line) => (
                <li key={line} className="flex gap-2 min-w-0">
                  <span className="text-accent-2 shrink-0">→</span>
                  <span className="min-w-0 break-words">{line}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 min-w-0">
            {project.badges.map((b) => (
              <span key={b} className={`badge ${badgeClass}`}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {project.diagram && (
        <div className="diagram-panel mt-4 sm:mt-5 min-w-0">
          <motion.button
            type="button"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-1 font-mono text-xs text-text-muted ${accentHover} transition-colors w-full sm:w-auto`}
          >
            <IconChevronDown
              className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
            {open ? "Hide" : "Explore"} architecture
          </motion.button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="diagram-panel overflow-hidden"
              >
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border w-full min-w-0 max-w-full">
                  {project.diagram}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding section-contained border-t border-border"
    >
      <FadeIn>
        <p className="section-label">03 — Projects</p>
        <h2 className="section-title">What I&apos;m building</h2>
        <p className="font-mono text-xs sm:text-sm text-text-muted -mt-6 sm:-mt-8 mb-6 sm:mb-12 max-w-xl break-words">
          Deep dives on architecture — expand any card for the full system diagram.
        </p>
      </FadeIn>

      <div className="grid gap-4 sm:gap-6 w-full min-w-0">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
