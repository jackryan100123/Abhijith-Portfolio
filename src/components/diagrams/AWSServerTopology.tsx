"use client";

import DiagramFrame from "./DiagramFrame";

export default function AWSServerTopology() {
  return (
    <DiagramFrame
      title="Server-based · 3-tier microservices on EC2/EKS"
      subtitle="Multi-AZ VPC · public/private subnets · horizontal + vertical scaling"
    >
      <svg viewBox="0 0 920 480" className="w-full min-w-[760px] h-auto">
        <defs>
          <marker id="topo-g" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L5,3 L0,5" fill="#4ade80" />
          </marker>
        </defs>

        <text x={460} y={18} textAnchor="middle" fill="#888" fontSize={9} fontFamily="var(--font-jetbrains-mono)">
          REGION · Multi-AZ · Defense-in-depth network segmentation
        </text>

        {/* VPC */}
        <rect x={30} y={30} width={860} height={400} rx={8} fill="none" stroke="#fb923c" strokeWidth={2} strokeDasharray="10 4" />
        <text x={50} y={50} fill="#fb923c" fontSize={9} fontFamily="var(--font-jetbrains-mono)">VPC 10.0.0.0/16</text>

        {/* Public subnets */}
        <rect x={50} y={60} width={400} height={90} rx={6} fill="#1a1510" stroke="#fb923c" strokeOpacity={0.5} />
        <text x={70} y={78} fill="#fb923c" fontSize={8} fontFamily="var(--font-jetbrains-mono)">PUBLIC SUBNETS (AZ-a / AZ-b)</text>
        <rect x={70} y={88} width={85} height={48} rx={4} fill="#161616" stroke="#333" />
        <text x={112} y={108} textAnchor="middle" fill="#ccc" fontSize={7} fontFamily="var(--font-jetbrains-mono)">Route 53</text>
        <text x={112} y={122} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">DNS + health</text>
        <rect x={170} y={88} width={85} height={48} rx={4} fill="#161616" stroke="#333" />
        <text x={212} y={108} textAnchor="middle" fill="#ccc" fontSize={7} fontFamily="var(--font-jetbrains-mono)">ALB</text>
        <text x={212} y={122} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">L7 routing</text>
        <rect x={270} y={88} width={85} height={48} rx={4} fill="#161616" stroke="#333" />
        <text x={312} y={108} textAnchor="middle" fill="#ccc" fontSize={7} fontFamily="var(--font-jetbrains-mono)">NAT GW</text>
        <text x={312} y={122} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">egress only</text>
        <rect x={370} y={88} width={65} height={48} rx={4} fill="#161616" stroke="#333" />
        <text x={402} y={115} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">Bastion</text>

        <rect x={470} y={60} width={400} height={90} rx={6} fill="#1a1510" stroke="#fb923c" strokeOpacity={0.5} />
        <text x={490} y={78} fill="#fb923c" fontSize={8} fontFamily="var(--font-jetbrains-mono)">WAF + Shield</text>
        <text x={680} y={115} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">Edge protection → ALB</text>

        {/* Private app tier */}
        <rect x={50} y={165} width={820} height={130} rx={6} fill="#111a14" stroke="#4ade80" strokeOpacity={0.4} />
        <text x={70} y={183} fill="#4ade80" fontSize={8} fontFamily="var(--font-jetbrains-mono)">PRIVATE APP TIER — Microservices (EKS / EC2 ASG)</text>

        {[
          { x: 70, label: "API Svc", type: "t3.large×3", scale: "H-scale" },
          { x: 175, label: "Auth Svc", type: "t3.medium×2", scale: "CPU target" },
          { x: 280, label: "Worker Svc", type: "c5.xlarge×4", scale: "queue depth" },
          { x: 400, label: "ETL Svc", type: "m5.2xl×2", scale: "mem-bound" },
          { x: 530, label: "Search Svc", type: "r5.large×2", scale: "read-heavy" },
          { x: 660, label: "Notify Svc", type: "t3.small×2", scale: "burst" },
        ].map((s) => (
          <g key={s.label}>
            <rect x={s.x} y={195} width={95} height={82} rx={4} fill="#161616" stroke="#4ade80" strokeOpacity={0.6} />
            <text x={s.x + 47} y={215} textAnchor="middle" fill="#4ade80" fontSize={7} fontFamily="var(--font-jetbrains-mono)">{s.label}</text>
            <text x={s.x + 47} y={230} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">{s.type}</text>
            <text x={s.x + 47} y={244} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">ASG: {s.scale}</text>
            <text x={s.x + 47} y={258} textAnchor="middle" fill="#666" fontSize={5} fontFamily="var(--font-jetbrains-mono)">PDB · HPA · mTLS</text>
          </g>
        ))}

        <rect x={780} y={195} width={75} height={82} rx={4} fill="#111" stroke="#333" />
        <text x={817} y={220} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">Service</text>
        <text x={817} y={234} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">Mesh</text>
        <text x={817} y={248} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">Istio</text>

        <line x1={212} y1={136} x2={112} y2={165} stroke="#4ade80" strokeWidth={1} markerEnd="url(#topo-g)" opacity={0.5} />

        {/* Data tier */}
        <rect x={50} y={310} width={820} height={105} rx={6} fill="#161616" stroke="#a78bfa" strokeOpacity={0.4} />
        <text x={70} y={328} fill="#a78bfa" fontSize={8} fontFamily="var(--font-jetbrains-mono)">DATA TIER — Isolated DB subnets (no internet route)</text>

        <rect x={70} y={340} width={130} height={60} rx={4} fill="#1a1525" stroke="#a78bfa" />
        <text x={135} y={362} textAnchor="middle" fill="#a78bfa" fontSize={7} fontFamily="var(--font-jetbrains-mono)">RDS PostgreSQL</text>
        <text x={135} y={376} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">Multi-AZ primary</text>
        <text x={135} y={390} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">Read replica ×2 · PIOPS</text>

        <rect x={220} y={340} width={110} height={60} rx={4} fill="#161616" stroke="#333" />
        <text x={275} y={362} textAnchor="middle" fill="#ccc" fontSize={7} fontFamily="var(--font-jetbrains-mono)">ElastiCache</text>
        <text x={275} y={376} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">Redis cluster</text>
        <text x={275} y={390} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">shard scaling</text>

        <rect x={350} y={340} width={120} height={60} rx={4} fill="#161616" stroke="#333" />
        <text x={410} y={362} textAnchor="middle" fill="#ccc" fontSize={7} fontFamily="var(--font-jetbrains-mono)">OpenSearch</text>
        <text x={410} y={376} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">3 data nodes</text>
        <text x={410} y={390} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">ultrawarm tier</text>

        <rect x={490} y={340} width={100} height={60} rx={4} fill="#161616" stroke="#333" />
        <text x={540} y={370} textAnchor="middle" fill="#ccc" fontSize={7} fontFamily="var(--font-jetbrains-mono)">S3</text>
        <text x={540} y={386} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">object store</text>

        <rect x={610} y={340} width={120} height={60} rx={4} fill="#161616" stroke="#333" />
        <text x={670} y={362} textAnchor="middle" fill="#ccc" fontSize={7} fontFamily="var(--font-jetbrains-mono)">MSK / SQS</text>
        <text x={670} y={376} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">event bus</text>

        <rect x={750} y={340} width={100} height={60} rx={4} fill="#111a14" stroke="#4ade80" />
        <text x={800} y={370} textAnchor="middle" fill="#4ade80" fontSize={6} fontFamily="var(--font-jetbrains-mono)">CloudWatch</text>

        <rect x={30} y={445} width={860} height={28} rx={4} fill="#0d0d0d" stroke="#222" />
        <text x={460} y={463} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          Scaling: vertical (instance family swap) + horizontal (ASG/HPA) · DB: read replicas + connection pooling · cross-AZ failover
        </text>
      </svg>
    </DiagramFrame>
  );
}
