"use client";

import DiagramFrame from "./DiagramFrame";

export default function RAGPipeline() {
  return (
    <DiagramFrame
      title="Legal RAG — retrieval-augmented Q&A"
      subtitle="Corpus embedding → vector search → grounded generation"
    >
      <svg viewBox="0 0 700 220" className="w-full min-w-[560px] h-auto">
        <defs>
          <marker id="rag-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="#a78bfa" />
          </marker>
        </defs>

        {[
          { x: 20, w: 90, label: "User Query", fill: "#161616", color: "#ccc" },
          { x: 130, w: 120, label: "LangChain Embed", fill: "#1a1525", color: "#a78bfa" },
          { x: 270, w: 90, label: "ChromaDB", fill: "#1a1525", color: "#a78bfa" },
          { x: 380, w: 90, label: "Gemini LLM", fill: "#1a1525", color: "#a78bfa" },
          { x: 490, w: 110, label: "Legal Answer", fill: "#111a14", color: "#4ade80" },
        ].map((n, i, arr) => (
          <g key={n.label}>
            <rect x={n.x} y={45} width={n.w} height={40} rx={6} fill={n.fill} stroke="#333" strokeWidth={1.5} />
            <text x={n.x + n.w / 2} y={70} textAnchor="middle" fill={n.color} fontSize={10} fontFamily="var(--font-jetbrains-mono)">{n.label}</text>
            {i < arr.length - 1 && (
              <line x1={n.x + n.w} y1={65} x2={arr[i + 1].x} y2={65} stroke="#a78bfa" strokeWidth={1.5} markerEnd="url(#rag-arrow)" opacity={0.8} />
            )}
          </g>
        ))}

        <rect x={270} y={110} width={120} height={36} rx={6} fill="#111" stroke="#222" />
        <text x={330} y={132} textAnchor="middle" fill="#888" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Legal corpus → indexed</text>
        <line x1={330} y1={110} x2={315} y2={85} stroke="#555" strokeDasharray="4 2" />

        <rect x={40} y={165} width={620} height={36} rx={6} fill="#0d0d0d" stroke="#222" />
        <text x={350} y={187} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">
          K8s · Helm · Prometheus · Grafana · FastAPI
        </text>
      </svg>
    </DiagramFrame>
  );
}
