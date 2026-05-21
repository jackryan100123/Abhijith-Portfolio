"use client";

import FadeIn from "@/components/ui/FadeIn";
import WorkEntry from "@/components/ui/WorkEntry";
import MetricCounter from "@/components/ui/MetricCounter";
import ETLPipeline from "@/components/diagrams/ETLPipeline";
import BulkIngestionPipeline from "@/components/diagrams/BulkIngestionPipeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-border bg-bg-card/30"
    >
      <FadeIn>
        <p className="section-label">02 — Architecture work</p>
        <h2 className="section-title">Systems I designed & shipped</h2>
        <p className="font-mono text-xs sm:text-sm text-text-muted -mt-6 sm:-mt-8 mb-8 sm:mb-12 max-w-2xl">
          Outcome-first — the problems, the decisions, and the infra that made it work.
          No vendor names — just the engineering.
        </p>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn delay={0.05}>
          <WorkEntry
            title="Real-time Operations Intelligence Platform"
            subtitle="ETL architecture powering live dashboards & predictive policing"
            impact="Built the streaming ETL backbone so operators see situational data in near real-time — directly feeding operational dashboards and predictive policing workflows now in active use by the field system."
            decisions={[
              "Separated hot-path ingest from heavy transforms — API stays fast, workers own aggregation",
              "Celery + Redis for async enrichment with idempotent jobs — safe retries under burst load",
              "Elasticsearch as the query layer — sub-second drill-downs for ops dashboards",
              "Indexed time-series + entity graphs so predictive signals compose without batch lag",
            ]}
            problems={[
              "Batch ETL couldn't meet operational tempo — leadership needed live visibility",
              "Burst API traffic (1M+ responses/day) risked blocking synchronous pipelines",
              "Duplicate events on retry polluted dashboard counts without idempotency keys",
            ]}
            diagram={<ETLPipeline />}
            defaultOpen
            accent="green"
          >
            <div className="grid grid-cols-1 min-[380px]:grid-cols-3 gap-6 sm:gap-8 py-2 border-t border-border/50 pt-6">
              <MetricCounter value={1} suffix="M+" label="Events processed daily" />
              <MetricCounter value={100} suffix="%" label="Live dashboard coverage" />
              <MetricCounter value={1} suffix="s" label="Target agg refresh" />
            </div>
          </WorkEntry>
        </FadeIn>

        <FadeIn delay={0.1}>
          <WorkEntry
            title="Multi-Terabyte Forensic Ingestion System"
            subtitle="Chunked dump pipeline for evidence-scale file ingestion"
            impact="Architected a resumable, backpressure-aware ingestion path for multi-terabyte forensic dumps — so analysts can upload massive evidence packages without melting the API or losing progress on network failure."
            decisions={[
              "Multipart S3 uploads with client-side chunking — never hold full TB payloads in app memory",
              "Chunk manifest persisted in PostgreSQL — resume from last committed byte range",
              "Celery worker pool with explicit concurrency caps — backpressure under load spikes",
              "Idempotent finalize step — a dump is 'complete' only after checksum + index verification",
            ]}
            problems={[
              "Single-request uploads OOM'd the app and timed out at gateway limits",
              "Mid-upload network drops forced full re-upload without resume semantics",
              "Retry storms duplicated indexing work without a dead-letter + idempotency layer",
            ]}
            diagram={<BulkIngestionPipeline />}
            accent="orange"
          >
            <div className="grid grid-cols-1 min-[380px]:grid-cols-3 gap-6 sm:gap-8 py-2 border-t border-border/50 pt-6">
              <MetricCounter value={1} prefix="Multi-" suffix="TB" label="Per dump scale" />
              <MetricCounter value={60} suffix="%" label="Less manual ops toil" />
              <MetricCounter value={100} suffix="%" label="Integrity on resume" />
            </div>
          </WorkEntry>
        </FadeIn>
      </div>
    </section>
  );
}
