"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AWSServerTopology from "./AWSServerTopology";
import AWSServerlessTopology from "./AWSServerlessTopology";

const tabs = [
  { id: "server", label: "Server-based (EC2/EKS)" },
  { id: "serverless", label: "Serverless (Lambda)" },
] as const;

export default function TopologyTabs() {
  const [active, setActive] = useState<"server" | "serverless">("server");

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`font-mono text-xs px-4 py-2 rounded border transition-all duration-300 ${
              active === tab.id
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-text-muted hover:border-accent/40 hover:text-text-base"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {active === "server" ? <AWSServerTopology /> : <AWSServerlessTopology />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
