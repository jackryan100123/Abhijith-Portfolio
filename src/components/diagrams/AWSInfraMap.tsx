"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AWSInfraMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full overflow-x-auto"
    >
      <svg viewBox="0 0 640 360" className="w-full min-w-[520px] h-auto">
        <text x={320} y={22} textAnchor="middle" fill="#888" fontSize={11} fontFamily="var(--font-jetbrains-mono)">
          Production AWS Stack
        </text>

        {/* VPC */}
        <rect x={80} y={40} width={480} height={240} rx={8} fill="none" stroke="#fb923c" strokeWidth={2} strokeDasharray="8 4" />
        <text x={100} y={58} fill="#fb923c" fontSize={10} fontFamily="var(--font-jetbrains-mono)">VPC</text>

        {/* EC2 */}
        <rect x={120} y={80} width={160} height={100} rx={6} fill="#161616" stroke="#222" strokeWidth={1.5} />
        <text x={200} y={105} textAnchor="middle" fill="#4ade80" fontSize={11} fontFamily="var(--font-jetbrains-mono)">EC2</text>
        <text x={200} y={125} textAnchor="middle" fill="#888" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Django + Nginx</text>
        <text x={200} y={145} textAnchor="middle" fill="#888" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Certbot SSL</text>

        {/* RDS */}
        <rect x={320} y={80} width={100} height={70} rx={6} fill="#161616" stroke="#222" strokeWidth={1.5} />
        <text x={370} y={110} textAnchor="middle" fill="#cccccc" fontSize={10} fontFamily="var(--font-jetbrains-mono)">RDS</text>
        <text x={370} y={128} textAnchor="middle" fill="#888" fontSize={9} fontFamily="var(--font-jetbrains-mono)">PostgreSQL</text>

        {/* ElastiCache */}
        <rect x={440} y={80} width={100} height={70} rx={6} fill="#161616" stroke="#222" strokeWidth={1.5} />
        <text x={490} y={110} textAnchor="middle" fill="#cccccc" fontSize={10} fontFamily="var(--font-jetbrains-mono)">ElastiCache</text>
        <text x={490} y={128} textAnchor="middle" fill="#888" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Redis</text>

        <line x1={280} y1={115} x2={320} y2={115} stroke="#555" strokeWidth={1.5} />
        <line x1={280} y1={125} x2={440} y2={115} stroke="#555" strokeWidth={1.5} strokeDasharray="4 2" />

        {/* External */}
        <rect x={40} y={300} width={90} height={40} rx={6} fill="#161616" stroke="#222" strokeWidth={1.5} />
        <text x={85} y={325} textAnchor="middle" fill="#fb923c" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Route 53</text>

        <rect x={160} y={300} width={80} height={40} rx={6} fill="#161616" stroke="#222" strokeWidth={1.5} />
        <text x={200} y={325} textAnchor="middle" fill="#cccccc" fontSize={9} fontFamily="var(--font-jetbrains-mono)">Nginx</text>

        <line x1={130} y1={320} x2={160} y2={320} stroke="#555" strokeWidth={1.5} />
        <line x1={240} y1={320} x2={200} y2={180} stroke="#555" strokeWidth={1.5} />

        <rect x={280} y={300} width={70} height={40} rx={6} fill="#161616" stroke="#222" strokeWidth={1.5} />
        <text x={315} y={325} textAnchor="middle" fill="#cccccc" fontSize={9} fontFamily="var(--font-jetbrains-mono)">S3</text>

        <rect x={380} y={300} width={100} height={40} rx={6} fill="#161616" stroke="#222" strokeWidth={1.5} />
        <text x={430} y={325} textAnchor="middle" fill="#cccccc" fontSize={9} fontFamily="var(--font-jetbrains-mono)">CloudWatch</text>

        <line x1={200} y1={180} x2={430} y2={300} stroke="#555" strokeWidth={1} strokeDasharray="3 3" opacity={0.5} />
      </svg>
    </motion.div>
  );
}
