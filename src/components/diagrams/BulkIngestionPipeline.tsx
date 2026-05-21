"use client";

import DiagramFrame from "./DiagramFrame";

export default function BulkIngestionPipeline() {
  return (
    <DiagramFrame
      title="Multi-terabyte forensic dump ingestion"
      subtitle="Resumable chunked uploads · backpressure · integrity at scale"
    >
      <svg viewBox="0 0 760 340" className="w-full min-w-[640px] h-auto">
        <defs>
          <marker id="arrow-orange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="#fb923c" />
          </marker>
        </defs>

        {/* Client upload path */}
        <rect x={20} y={36} width={130} height={50} rx={6} fill="#1f1510" stroke="#fb923c" strokeWidth={1.5} />
        <text x={85} y={58} textAnchor="middle" fill="#fb923c" fontSize={10} fontFamily="var(--font-jetbrains-mono)">TB-scale dumps</text>
        <text x={85} y={72} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">resumable chunks</text>

        <rect x={180} y={36} width={120} height={50} rx={6} fill="#161616" stroke="#333" />
        <text x={240} y={58} textAnchor="middle" fill="#e0e0e0" fontSize={10} fontFamily="var(--font-jetbrains-mono)">Upload API</text>
        <text x={240} y={72} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">pre-signed S3</text>

        <rect x={330} y={36} width={110} height={50} rx={6} fill="#161616" stroke="#333" />
        <text x={385} y={58} textAnchor="middle" fill="#e0e0e0" fontSize={10} fontFamily="var(--font-jetbrains-mono)">S3 multipart</text>
        <text x={385} y={72} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">parallel parts</text>

        <rect x={470} y={36} width={120} height={50} rx={6} fill="#161616" stroke="#333" />
        <text x={530} y={58} textAnchor="middle" fill="#e0e0e0" fontSize={10} fontFamily="var(--font-jetbrains-mono)">Celery queue</text>
        <text x={530} y={72} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">backpressure</text>

        <rect x={620} y={36} width={120} height={50} rx={6} fill="#1f1510" stroke="#fb923c" strokeWidth={1.5} />
        <text x={680} y={58} textAnchor="middle" fill="#fb923c" fontSize={10} fontFamily="var(--font-jetbrains-mono)">Index + verify</text>
        <text x={680} y={72} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">checksum audit</text>

        <line x1={150} y1={61} x2={180} y2={61} stroke="#fb923c" strokeWidth={1.5} markerEnd="url(#arrow-orange)" />
        <line x1={300} y1={61} x2={330} y2={61} stroke="#fb923c" strokeWidth={1.5} markerEnd="url(#arrow-orange)" />
        <line x1={440} y1={61} x2={470} y2={61} stroke="#fb923c" strokeWidth={1.5} markerEnd="url(#arrow-orange)" />
        <line x1={590} y1={61} x2={620} y2={61} stroke="#fb923c" strokeWidth={1.5} markerEnd="url(#arrow-orange)" />

        {/* Failure / retry loop */}
        <path d="M 680 86 Q 680 130 530 130 Q 240 130 240 86" fill="none" stroke="#555" strokeWidth={1} strokeDasharray="4 3" />
        <text x={460} y={125} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">retry + resume from last committed chunk</text>

        {/* Side stores */}
        <rect x={80} y={160} width={100} height={40} rx={6} fill="#111" stroke="#222" />
        <text x={130} y={185} textAnchor="middle" fill="#888" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Redis state</text>

        <rect x={220} y={160} width={100} height={40} rx={6} fill="#111" stroke="#222" />
        <text x={270} y={185} textAnchor="middle" fill="#888" fontSize={9} fontFamily="var(--font-jetbrains-mono)">PostgreSQL</text>

        <rect x={360} y={160} width={100} height={40} rx={6} fill="#111" stroke="#222" />
        <text x={410} y={185} textAnchor="middle" fill="#888" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Dead-letter</text>

        <line x1={240} y1={86} x2={130} y2={160} stroke="#444" strokeWidth={1} strokeDasharray="2 2" />
        <line x1={385} y1={86} x2={270} y2={160} stroke="#444" strokeWidth={1} strokeDasharray="2 2" />
        <line x1={530} y1={86} x2={410} y2={160} stroke="#444" strokeWidth={1} strokeDasharray="2 2" />

        <rect x={40} y={230} width={680} height={70} rx={6} fill="#0d0d0d" stroke="#222" />
        <text x={380} y={255} textAnchor="middle" fill="#fb923c" fontSize={9} fontFamily="var(--font-jetbrains-mono)">
          SOLVED: network drops mid-upload · memory blowups on single-request bodies · duplicate processing on retry
        </text>
        <text x={380} y={275} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">
          Chunk manifest in DB · worker pool throttling · idempotent finalize step before marking dump complete
        </text>
      </svg>
    </DiagramFrame>
  );
}
