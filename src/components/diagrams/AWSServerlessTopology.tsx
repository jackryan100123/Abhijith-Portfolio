"use client";

import DiagramFrame from "./DiagramFrame";

export default function AWSServerlessTopology() {
  return (
    <DiagramFrame
      title="Serverless · event-driven Lambda architecture"
      subtitle="API Gateway · Lambda in VPC · managed data plane · pay-per-use scaling"
    >
      <svg viewBox="0 0 920 480" className="w-full min-w-[760px] h-auto">
        <defs>
          <marker id="sls-g" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L5,3 L0,5" fill="#a78bfa" />
          </marker>
        </defs>

        <text x={460} y={18} textAnchor="middle" fill="#888" fontSize={9} fontFamily="var(--font-jetbrains-mono)">
          SERVERLESS TOPOLOGY · Zero server ops · auto-scale to zero · event-native
        </text>

        <rect x={30} y={30} width={860} height={400} rx={8} fill="none" stroke="#a78bfa" strokeWidth={2} strokeDasharray="10 4" />
        <text x={50} y={50} fill="#a78bfa" fontSize={9} fontFamily="var(--font-jetbrains-mono)">VPC — Lambda ENIs in private subnets</text>

        {/* Edge */}
        <rect x={50} y={65} width={820} height={55} rx={6} fill="#1a1525" stroke="#a78bfa" strokeOpacity={0.5} />
        <text x={70} y={83} fill="#a78bfa" fontSize={8} fontFamily="var(--font-jetbrains-mono)">EDGE</text>
        {[
          { x: 80, l: "CloudFront" },
          { x: 200, l: "WAF" },
          { x: 320, l: "API Gateway" },
          { x: 480, l: "Cognito" },
          { x: 620, l: "AppSync" },
        ].map((e) => (
          <g key={e.l}>
            <rect x={e.x} y={90} width={95} height={22} rx={3} fill="#161616" stroke="#333" />
            <text x={e.x + 47} y={105} textAnchor="middle" fill="#ccc" fontSize={7} fontFamily="var(--font-jetbrains-mono)">{e.l}</text>
          </g>
        ))}

        {/* Lambda functions */}
        <rect x={50} y={135} width={820} height={145} rx={6} fill="#111a14" stroke="#4ade80" strokeOpacity={0.4} />
        <text x={70} y={153} fill="#4ade80" fontSize={8} fontFamily="var(--font-jetbrains-mono)">COMPUTE — Lambda functions (provisioned + on-demand concurrency)</text>

        {[
          { x: 70, l: "API Handler", mem: "512MB", c: "1000" },
          { x: 195, l: "Auth Fn", mem: "256MB", c: "burst" },
          { x: 320, l: "ETL Fn", mem: "3GB", c: "15min" },
          { x: 445, l: "Webhook", mem: "128MB", c: "async" },
          { x: 570, l: "Stream Proc", mem: "1GB", c: "Kinesis" },
          { x: 695, l: "Scheduled", mem: "512MB", c: "cron" },
        ].map((fn) => (
          <g key={fn.l}>
            <rect x={fn.x} y={165} width={110} height={95} rx={4} fill="#161616" stroke="#4ade80" strokeOpacity={0.7} />
            <text x={fn.x + 55} y={185} textAnchor="middle" fill="#4ade80" fontSize={7} fontFamily="var(--font-jetbrains-mono)">λ {fn.l}</text>
            <text x={fn.x + 55} y={200} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">{fn.mem}</text>
            <text x={fn.x + 55} y={214} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">{fn.c}</text>
            <text x={fn.x + 55} y={230} textAnchor="middle" fill="#666" fontSize={5} fontFamily="var(--font-jetbrains-mono)">DLQ on fail</text>
            <text x={fn.x + 55} y={244} textAnchor="middle" fill="#666" fontSize={5} fontFamily="var(--font-jetbrains-mono)">X-Ray trace</text>
          </g>
        ))}

        <line x1={415} y1={120} x2={125} y2={165} stroke="#a78bfa" strokeWidth={1} markerEnd="url(#sls-g)" opacity={0.6} />

        {/* Event sources */}
        <rect x={50} y={290} width={260} height={75} rx={5} fill="#161616" stroke="#333" />
        <text x={70} y={308} fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">EVENT SOURCES</text>
        <text x={180} y={330} textAnchor="middle" fill="#ccc" fontSize={7} fontFamily="var(--font-jetbrains-mono)">SQS · SNS · EventBridge</text>
        <text x={180} y={346} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">S3 triggers · DynamoDB streams</text>

        {/* Data plane */}
        <rect x={330} y={290} width={540} height={75} rx={5} fill="#1a1525" stroke="#a78bfa" strokeOpacity={0.5} />
        <text x={350} y={308} fill="#a78bfa" fontSize={8} fontFamily="var(--font-jetbrains-mono)">MANAGED DATA PLANE</text>
        {[
          { x: 350, l: "DynamoDB", s: "on-demand RCU" },
          { x: 470, l: "Aurora Srvless", s: "auto-pause" },
          { x: 590, l: "ElastiCache", s: "serverless" },
          { x: 710, l: "S3 + Glacier", s: "lifecycle" },
        ].map((d) => (
          <g key={d.l}>
            <rect x={d.x} y={318} width={105} height={38} rx={3} fill="#161616" stroke="#333" />
            <text x={d.x + 52} y={334} textAnchor="middle" fill="#a78bfa" fontSize={7} fontFamily="var(--font-jetbrains-mono)">{d.l}</text>
            <text x={d.x + 52} y={348} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">{d.s}</text>
          </g>
        ))}

        {/* VPC endpoints */}
        <rect x={50} y={375} width={400} height={45} rx={5} fill="#111" stroke="#222" />
        <text x={250} y={395} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          VPC Endpoints: S3 · DynamoDB · Secrets Manager — no NAT for data-plane traffic
        </text>
        <text x={250} y={410} textAnchor="middle" fill="#666" fontSize={6} fontFamily="var(--font-jetbrains-mono)">
          Private subnets only · Security groups per Lambda · least-privilege IAM per function
        </text>

        <rect x={470} y={375} width={400} height={45} rx={5} fill="#0d0d0d" stroke="#222" />
        <text x={670} y={395} textAnchor="middle" fill="#4ade80" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          Scale: concurrency limits · reserved capacity · split by domain
        </text>
        <text x={670} y={410} textAnchor="middle" fill="#888" fontSize={6} fontFamily="var(--font-jetbrains-mono)">
          Cost: pay-per-invoke vs always-on EC2 — right tool per workload shape
        </text>
      </svg>
    </DiagramFrame>
  );
}
