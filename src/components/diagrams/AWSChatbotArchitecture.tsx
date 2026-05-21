"use client";

import DiagramFrame from "./DiagramFrame";

export default function AWSChatbotArchitecture() {
  return (
    <DiagramFrame
      title="AWS Chatbot — control plane + worker fleet"
      subtitle="LLM orchestration · Terraform AMI templates · async AWS operations"
    >
      <svg viewBox="0 0 860 400" className="w-full min-w-[720px] h-auto">
        <defs>
          <marker id="aws-bot-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="#fb923c" />
          </marker>
        </defs>

        {/* Control plane */}
        <rect x={20} y={25} width={400} height={155} rx={8} fill="none" stroke="#fb923c" strokeWidth={1.5} strokeDasharray="6 3" />
        <text x={40} y={45} fill="#fb923c" fontSize={9} fontFamily="var(--font-jetbrains-mono)">CONTROL PLANE</text>

        <rect x={40} y={58} width={110} height={44} rx={5} fill="#1f1510" stroke="#fb923c" />
        <text x={95} y={78} textAnchor="middle" fill="#fb923c" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Chat API</text>
        <text x={95} y={92} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">NLP ingress</text>

        <rect x={165} y={58} width={110} height={44} rx={5} fill="#161616" stroke="#333" />
        <text x={220} y={78} textAnchor="middle" fill="#ccc" fontSize={9} fontFamily="var(--font-jetbrains-mono)">LLM Router</text>
        <text x={220} y={92} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">intent + tools</text>

        <rect x={290} y={58} width={110} height={44} rx={5} fill="#161616" stroke="#333" />
        <text x={345} y={78} textAnchor="middle" fill="#ccc" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Context Store</text>
        <text x={345} y={92} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">session memory</text>

        <rect x={40} y={115} width={360} height={50} rx={5} fill="#111" stroke="#222" />
        <text x={220} y={136} textAnchor="middle" fill="#ccc" fontSize={8} fontFamily="var(--font-jetbrains-mono)">Orchestrator — job queue · policy engine · cost guardrails</text>
        <text x={220} y={152} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">ML feedback loop improves routing & recommendation quality over time</text>

        <line x1={150} y1={80} x2={165} y2={80} stroke="#fb923c" markerEnd="url(#aws-bot-arrow)" />
        <line x1={275} y1={80} x2={290} y2={80} stroke="#fb923c" markerEnd="url(#aws-bot-arrow)" />

        {/* Worker plane */}
        <rect x={440} y={25} width={400} height={155} rx={8} fill="none" stroke="#4ade80" strokeWidth={1.5} strokeDasharray="6 3" />
        <text x={460} y={45} fill="#4ade80" fontSize={9} fontFamily="var(--font-jetbrains-mono)">WORKER FLEET (auto-scaled)</text>

        {[
          { x: 460, label: "Terraform Worker", sub: "plan/apply" },
          { x: 590, label: "Cost Optimizer", sub: "rightsizing" },
          { x: 720, label: "Vuln Scanner", sub: "Inspector+TF" },
        ].map((w) => (
          <g key={w.label}>
            <rect x={w.x} y={58} width={115} height={50} rx={5} fill="#111a14" stroke="#4ade80" />
            <text x={w.x + 57} y={80} textAnchor="middle" fill="#4ade80" fontSize={8} fontFamily="var(--font-jetbrains-mono)">{w.label}</text>
            <text x={w.x + 57} y={96} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">{w.sub}</text>
          </g>
        ))}

        <rect x={460} y={115} width={360} height={50} rx={5} fill="#111" stroke="#222" />
        <text x={640} y={136} textAnchor="middle" fill="#ccc" fontSize={8} fontFamily="var(--font-jetbrains-mono)">Isolated execution · IAM role per task · state backends per env</text>
        <text x={640} y={152} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">Workers pull from SQS — control plane never holds cloud credentials in request path</text>

        <line x1={400} y1={140} x2={460} y2={83} stroke="#4ade80" strokeDasharray="4 2" markerEnd="url(#aws-bot-arrow)" />

        {/* AMI / Terraform templates */}
        <rect x={20} y={200} width={820} height={90} rx={6} fill="#161616" stroke="#a78bfa" strokeWidth={1.5} />
        <text x={430} y={222} textAnchor="middle" fill="#a78bfa" fontSize={9} fontFamily="var(--font-jetbrains-mono)">
          GOLDEN AMI TEMPLATES (Terraform modules) — hardened base image · app layer · sidecar agents
        </text>
        <text x={430} y={240} textAnchor="middle" fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">
          ec2-app.tpl · eks-node.tpl · lambda-vpc.tpl · rds-cluster.tpl → parameterized per env (dev/stage/prod)
        </text>
        <text x={430} y={258} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          Chatbot generates / validates HCL → worker applies → drift detection → cost estimate before apply
        </text>
        <text x={430} y={274} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          Packer pipeline bakes AMIs → Terraform provisions ASG/EKS/Lambda from template catalog
        </text>

        {/* AWS boundary */}
        <rect x={20} y={305} width={820} height={80} rx={6} fill="#0d0d0d" stroke="#222" />
        <text x={430} y={328} textAnchor="middle" fill="#fb923c" fontSize={8} fontFamily="var(--font-jetbrains-mono)">
          AWS: EC2 · EKS · Lambda · RDS · S3 · IAM · Cost Explorer · Security Hub · Inspector
        </text>
        <text x={430} y={346} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          Natural language → infrastructure action · cost-efficient recommendations · automated vuln tests pre-deploy
        </text>
        <text x={430} y={364} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          Conversation context persisted — multi-turn ops without re-explaining the environment
        </text>
      </svg>
    </DiagramFrame>
  );
}
