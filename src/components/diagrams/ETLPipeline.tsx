"use client";

import { motion } from "framer-motion";
import DiagramFrame from "./DiagramFrame";

function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  highlight = false,
  pulse = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  highlight?: boolean;
  pulse?: boolean;
}) {
  return (
    <g>
      {pulse && (
        <rect
          x={x - 2}
          y={y - 2}
          width={w + 4}
          height={h + 4}
          rx={8}
          fill="none"
          stroke="#4ade80"
          strokeWidth={1}
          opacity={0.4}
        >
          <animate
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
      )}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        fill={highlight ? "#111a14" : "#161616"}
        stroke={highlight ? "#4ade80" : "#333"}
        strokeWidth={highlight ? 2 : 1}
      />
      <text
        x={x + w / 2}
        y={y + (sub ? h / 2 - 2 : h / 2 + 4)}
        textAnchor="middle"
        fill={highlight ? "#4ade80" : "#e0e0e0"}
        fontSize={10}
        fontWeight={highlight ? 600 : 400}
        fontFamily="var(--font-jetbrains-mono)"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          fill="#888"
          fontSize={8}
          fontFamily="var(--font-jetbrains-mono)"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Flow({
  x1,
  y1,
  x2,
  y2,
  color = "#4ade80",
  animated = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  animated?: boolean;
}) {
  const id = `flow-${x1}-${y1}-${x2}-${y2}`;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth={2} />
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={1.5}
        strokeDasharray={animated ? "6 4" : undefined}
        markerEnd="url(#arrow-green)"
        opacity={0.85}
      >
        {animated && (
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-20"
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </line>
    </g>
  );
}

export default function ETLPipeline() {
  return (
    <DiagramFrame
      title="Real-time operations intelligence pipeline"
      subtitle="Streaming ingest → async enrichment → sub-second dashboard refresh"
    >
      <svg viewBox="0 0 760 320" className="w-full min-w-[640px] h-auto">
        <defs>
          <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="#4ade80" />
          </marker>
        </defs>

        <Box x={20} y={40} w={110} h={44} label="Streaming APIs" sub="1M+ events/day" />
        <Box x={155} y={40} w={100} h={44} label="Django REST" sub="ingest layer" highlight />
        <Box x={280} y={40} w={105} h={44} label="Celery Workers" sub="ETL + enrich" highlight />
        <Box x={410} y={40} w={115} h={44} label="Elasticsearch" sub="aggregations" />
        <Box x={550} y={32} w={120} h={60} label="Ops Dashboard" sub="live + predictive" highlight pulse />

        <Flow x1={130} y1={62} x2={155} y2={62} animated />
        <Flow x1={255} y1={62} x2={280} y2={62} animated />
        <Flow x1={385} y1={62} x2={410} y2={62} animated />
        <Flow x1={525} y1={62} x2={550} y2={62} animated />

        <Box x={155} y={120} w={90} h={36} label="Redis" sub="broker" />
        <Box x={280} y={120} w={100} h={36} label="Idempotent" sub="job dedup" />
        <line x1={200} y1={120} x2={200} y2={84} stroke="#555" strokeWidth={1} strokeDasharray="3 2" />
        <line x1={330} y1={120} x2={332} y2={84} stroke="#555" strokeWidth={1} strokeDasharray="3 2" />

        <rect x={40} y={200} width={680} height={56} rx={6} fill="#0d0d0d" stroke="#222" />
        <text x={380} y={222} textAnchor="middle" fill="#4ade80" fontSize={9} fontFamily="var(--font-jetbrains-mono)">
          OUTCOME → Real-time situational awareness · Predictive policing signals · Active operational use
        </text>
        <text x={380} y={240} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">
          Design choice: decouple ingest from aggregation so dashboard never blocks on heavy transforms
        </text>

        <motion.circle
          cx={610}
          cy={62}
          r={4}
          fill="#4ade80"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </DiagramFrame>
  );
}
