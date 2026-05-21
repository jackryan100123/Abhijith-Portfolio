"use client";

import DiagramFrame from "./DiagramFrame";

export default function CICDPipeline() {
  return (
    <DiagramFrame
      title="Enterprise DevSecOps — on-prem, air-gap ready"
      subtitle="NIST-aligned pipeline · private registry · signed artifacts · policy-as-code gates"
    >
      <svg viewBox="0 0 900 420" className="w-full h-auto">
        <defs>
          <marker id="ci-arrow-g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="#4ade80" />
          </marker>
          <marker id="ci-arrow-o" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="#fb923c" />
          </marker>
        </defs>

        {/* On-prem boundary */}
        <rect x={15} y={15} width={870} height={390} rx={8} fill="none" stroke="#fb923c" strokeWidth={1.5} strokeDasharray="8 4" />
        <text x={35} y={35} fill="#fb923c" fontSize={9} fontFamily="var(--font-jetbrains-mono)">
          ON-PREM DATA CENTER · Private K8s · No public artifact registry
        </text>

        {/* Row 1 — Source & build */}
        <rect x={30} y={55} width={95} height={42} rx={5} fill="#161616" stroke="#333" />
        <text x={77} y={74} textAnchor="middle" fill="#ccc" fontSize={8} fontFamily="var(--font-jetbrains-mono)">Git / SCM</text>
        <text x={77} y={88} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">branch policies</text>

        <rect x={140} y={55} width={95} height={42} rx={5} fill="#161616" stroke="#333" />
        <text x={187} y={74} textAnchor="middle" fill="#ccc" fontSize={8} fontFamily="var(--font-jetbrains-mono)">Jenkins</text>
        <text x={187} y={88} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">multibranch</text>

        <rect x={250} y={50} width={130} height={52} rx={5} fill="#111a14" stroke="#4ade80" />
        <text x={315} y={72} textAnchor="middle" fill="#4ade80" fontSize={8} fontFamily="var(--font-jetbrains-mono)">Build & SBOM</text>
        <text x={315} y={86} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">Maven/Gradle · deps lock</text>

        <rect x={395} y={50} width={155} height={52} rx={5} fill="#1f1510" stroke="#fb923c" strokeWidth={2} />
        <text x={472} y={68} textAnchor="middle" fill="#fb923c" fontSize={8} fontWeight="600" fontFamily="var(--font-jetbrains-mono)">SECURITY GATES</text>
        <text x={472} y={82} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">SonarQube SAST · Trivy SCA</text>
        <text x={472} y={94} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">OWASP ZAP · Policy-as-code</text>

        <rect x={565} y={55} width={100} height={42} rx={5} fill="#111a14" stroke="#4ade80" />
        <text x={615} y={74} textAnchor="middle" fill="#4ade80" fontSize={8} fontFamily="var(--font-jetbrains-mono)">Sign + Scan</text>
        <text x={615} y={88} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">Cosign · image</text>

        <rect x={680} y={55} width={95} height={42} rx={5} fill="#161616" stroke="#333" />
        <text x={727} y={74} textAnchor="middle" fill="#ccc" fontSize={8} fontFamily="var(--font-jetbrains-mono)">Harbor</text>
        <text x={727} y={88} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">private registry</text>

        <line x1={125} y1={76} x2={140} y2={76} stroke="#4ade80" strokeWidth={1.2} markerEnd="url(#ci-arrow-g)" />
        <line x1={235} y1={76} x2={250} y2={76} stroke="#4ade80" strokeWidth={1.2} markerEnd="url(#ci-arrow-g)" />
        <line x1={380} y1={76} x2={395} y2={76} stroke="#fb923c" strokeWidth={1.2} markerEnd="url(#ci-arrow-o)" />
        <line x1={550} y1={76} x2={565} y2={76} stroke="#4ade80" strokeWidth={1.2} markerEnd="url(#ci-arrow-g)" />
        <line x1={665} y1={76} x2={680} y2={76} stroke="#4ade80" strokeWidth={1.2} markerEnd="url(#ci-arrow-g)" />

        {/* Row 2 — Environments */}
        <text x={30} y={130} fill="#888" fontSize={8} fontFamily="var(--font-jetbrains-mono)">DEPLOY STAGES</text>

        <rect x={30} y={140} width={120} height={55} rx={5} fill="#161616" stroke="#333" />
        <text x={90} y={162} textAnchor="middle" fill="#ccc" fontSize={8} fontFamily="var(--font-jetbrains-mono)">DEV namespace</text>
        <text x={90} y={176} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">Helm · smoke tests</text>
        <text x={90} y={188} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">auto on merge</text>

        <rect x={165} y={140} width={120} height={55} rx={5} fill="#161616" stroke="#333" />
        <text x={225} y={162} textAnchor="middle" fill="#ccc" fontSize={8} fontFamily="var(--font-jetbrains-mono)">STAGING</text>
        <text x={225} y={176} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">DAST · perf baseline</text>
        <text x={225} y={188} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">manual promote</text>

        <rect x={300} y={140} width={120} height={55} rx={5} fill="#1f1510" stroke="#fb923c" />
        <text x={360} y={162} textAnchor="middle" fill="#fb923c" fontSize={8} fontFamily="var(--font-jetbrains-mono)">CHANGE APPROVAL</text>
        <text x={360} y={176} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">4-eyes · CAB ticket</text>
        <text x={360} y={188} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">audit trail</text>

        <rect x={435} y={140} width={120} height={55} rx={5} fill="#111a14" stroke="#4ade80" />
        <text x={495} y={162} textAnchor="middle" fill="#4ade80" fontSize={8} fontFamily="var(--font-jetbrains-mono)">PRODUCTION</text>
        <text x={495} y={176} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">Blue/green · canary</text>
        <text x={495} y={188} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">auto rollback</text>

        <rect x={570} y={140} width={130} height={55} rx={5} fill="#161616" stroke="#333" />
        <text x={635} y={162} textAnchor="middle" fill="#ccc" fontSize={8} fontFamily="var(--font-jetbrains-mono)">Post-deploy</text>
        <text x={635} y={176} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">Synthetic monitors</text>
        <text x={635} y={188} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">Prometheus alerts</text>

        <line x1={727} y1={97} x2={495} y2={140} stroke="#4ade80" strokeWidth={1} strokeDasharray="4 3" markerEnd="url(#ci-arrow-g)" />

        {/* Row 3 — Platform services */}
        <rect x={30} y={220} width={840} height={70} rx={6} fill="#0d0d0d" stroke="#222" />
        <text x={450} y={242} textAnchor="middle" fill="#4ade80" fontSize={8} fontFamily="var(--font-jetbrains-mono)">
          PLATFORM SERVICES — Vault (secrets) · Nexus (deps) · SonarQube · Trivy scanner · internal DNS · centralized logging
        </text>
        <text x={450} y={258} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          Compliance: CIS benchmarks · immutable audit logs · segregated build agents · no outbound from prod cluster
        </text>
        <text x={450} y={274} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          Industry patterns: trunk-based dev · artifact promotion · fail-closed on CVSS ≥ threshold · SBOM retained 7yr
        </text>

        {/* Fail path */}
        <rect x={720} y={140} width={140} height={55} rx={5} fill="#1a0f0f" stroke="#ef4444" strokeWidth={1} strokeDasharray="4 2" />
        <text x={790} y={162} textAnchor="middle" fill="#ef4444" fontSize={8} fontFamily="var(--font-jetbrains-mono)">FAIL CLOSED</text>
        <text x={790} y={176} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">block merge</text>
        <text x={790} y={188} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">notify + ticket</text>
        <line x1={550} y1={76} x2={720} y2={167} stroke="#ef4444" strokeWidth={1} strokeDasharray="3 2" />

        <rect x={30} y={310} width={840} height={80} rx={6} fill="#111" stroke="#222" />
        <text x={450} y={332} textAnchor="middle" fill="#fb923c" fontSize={8} fontFamily="var(--font-jetbrains-mono)">
          WHY ON-PREM: data sovereignty · air-gapped security scans · predictable cost · full control of golden images
        </text>
        <text x={450} y={350} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          Same rigor as cloud-native CI/CD — adapted for private K8s/OpenShift with zero dependency on public SaaS scanners
        </text>
        <text x={450} y={368} textAnchor="middle" fill="#888" fontSize={7} fontFamily="var(--font-jetbrains-mono)">
          Established org-wide: standardized Jenkins shared libs · reusable Helm charts · environment-specific values overlays
        </text>
      </svg>
    </DiagramFrame>
  );
}
