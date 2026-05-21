"use client";

import DiagramFrame from "./DiagramFrame";

export default function KubeMemoryArchitecture() {
  return (
    <DiagramFrame
      title="KubeMemory — persistent cluster intelligence"
      subtitle="GraphRAG + LangGraph agents · zero cloud inference cost"
    >
      <svg viewBox="0 0 800 400" className="w-full min-w-[680px] h-auto">
        <defs>
          <marker id="arrow-purple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="#a78bfa" />
          </marker>
          <linearGradient id="brain-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#4ade80" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* K8s cluster boundary */}
        <rect x={30} y={30} width={340} height={200} rx={8} fill="none" stroke="#a78bfa" strokeWidth={1.5} strokeDasharray="6 4" />
        <text x={50} y={52} fill="#a78bfa" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Kubernetes cluster</text>

        <rect x={50} y={70} width={130} height={44} rx={6} fill="#1a1525" stroke="#a78bfa" />
        <text x={115} y={92} textAnchor="middle" fill="#a78bfa" fontSize={10} fontFamily="var(--font-jetbrains-mono)">K8s Watcher</text>
        <text x={115} y={106} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">real-time events</text>

        <rect x={200} y={70} width={150} height={44} rx={6} fill="#161616" stroke="#333" />
        <text x={275} y={92} textAnchor="middle" fill="#e0e0e0" fontSize={10} fontFamily="var(--font-jetbrains-mono)">Incident stream</text>
        <text x={275} y={106} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">normalized schema</text>

        <rect x={50} y={140} width={300} height={70} rx={6} fill="url(#brain-glow)" stroke="#4ade80" strokeWidth={1.5} />
        <text x={200} y={168} textAnchor="middle" fill="#4ade80" fontSize={11} fontWeight="600" fontFamily="var(--font-jetbrains-mono)">PERSISTENT MEMORY LAYER</text>
        <text x={200} y={186} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">every incident remembered · correlations preserved</text>

        {/* Memory stores */}
        <rect x={400} y={50} width={120} height={50} rx={6} fill="#1a1525" stroke="#a78bfa" />
        <text x={460} y={72} textAnchor="middle" fill="#a78bfa" fontSize={10} fontFamily="var(--font-jetbrains-mono)">ChromaDB</text>
        <text x={460} y={88} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">vector search</text>

        <rect x={540} y={50} width={120} height={50} rx={6} fill="#1a1525" stroke="#a78bfa" />
        <text x={600} y={72} textAnchor="middle" fill="#a78bfa" fontSize={10} fontFamily="var(--font-jetbrains-mono)">Neo4j</text>
        <text x={600} y={88} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">causal graph</text>

        <line x1={350} y1={175} x2={400} y2={75} stroke="#a78bfa" strokeWidth={1.5} markerEnd="url(#arrow-purple)" />
        <line x1={350} y1={175} x2={540} y2={75} stroke="#a78bfa" strokeWidth={1.5} markerEnd="url(#arrow-purple)" />

        {/* LangGraph agents */}
        <rect x={400} y={130} width={360} height={90} rx={6} fill="#111" stroke="#333" />
        <text x={580} y={155} textAnchor="middle" fill="#a78bfa" fontSize={10} fontFamily="var(--font-jetbrains-mono)">LangGraph — 3-agent pipeline</text>

        <rect x={420} y={168} width={95} height={36} rx={4} fill="#161616" stroke="#444" />
        <text x={467} y={190} textAnchor="middle" fill="#ccc" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Retriever</text>

        <rect x={530} y={168} width={95} height={36} rx={4} fill="#161616" stroke="#444" />
        <text x={577} y={190} textAnchor="middle" fill="#ccc" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Correlator</text>

        <rect x={640} y={168} width={100} height={36} rx={4} fill="#161616" stroke="#4ade80" />
        <text x={690} y={190} textAnchor="middle" fill="#4ade80" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Recommender</text>

        <line x1={515} y1={186} x2={530} y2={186} stroke="#666" markerEnd="url(#arrow-purple)" />
        <line x1={625} y1={186} x2={640} y2={186} stroke="#666" markerEnd="url(#arrow-purple)" />

        {/* Bottom row */}
        <rect x={50} y={260} width={110} height={40} rx={6} fill="#111a14" stroke="#4ade80" />
        <text x={105} y={285} textAnchor="middle" fill="#4ade80" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Local LLM</text>

        <rect x={180} y={260} width={110} height={40} rx={6} fill="#161616" stroke="#333" />
        <text x={235} y={285} textAnchor="middle" fill="#ccc" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Corrective RAG</text>

        <rect x={310} y={260} width={110} height={40} rx={6} fill="#161616" stroke="#333" />
        <text x={365} y={285} textAnchor="middle" fill="#ccc" fontSize={9} fontFamily="var(--font-jetbrains-mono)">MCP Server</text>

        <rect x={440} y={260} width={160} height={40} rx={6} fill="#161616" stroke="#333" />
        <text x={520} y={278} textAnchor="middle" fill="#ccc" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Django + React</text>
        <text x={520} y={292} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">WebSocket dashboard</text>

        <rect x={620} y={260} width={150} height={40} rx={6} fill="#1a1525" stroke="#a78bfa" />
        <text x={695} y={285} textAnchor="middle" fill="#a78bfa" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Claude Desktop</text>

        <rect x={30} y={330} width={740} height={50} rx={6} fill="#0d0d0d" stroke="#222" />
        <text x={400} y={352} textAnchor="middle" fill="#a78bfa" fontSize={9} fontFamily="var(--font-jetbrains-mono)">
          vs K8sGPT / Datadog / PagerDuty: stateless tools forget every incident — KubeMemory learns from every fix
        </text>
        <text x={400} y={368} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">
          Engineer overrides feed Corrective RAG · historically-aware troubleshooting improves over time
        </text>
      </svg>
    </DiagramFrame>
  );
}
