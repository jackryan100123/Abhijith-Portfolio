"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const labels = [
  "Backend",
  "Cloud/AWS",
  "DevOps/CI-CD",
  "Security",
  "AI/ML",
  "Observability",
];

const values = [95, 85, 88, 80, 75, 82];

export default function SkillsRadar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const data = {
    labels,
    datasets: [
      {
        label: "Skills",
        data: isInView ? values : values.map(() => 0),
        backgroundColor: "rgba(74, 222, 128, 0.15)",
        borderColor: "#4ade80",
        borderWidth: 2,
        pointBackgroundColor: "#4ade80",
        pointBorderColor: "#4ade80",
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 1200,
      easing: "easeOutQuart" as const,
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { display: false, stepSize: 20 },
        grid: { color: "#222222" },
        angleLines: { color: "#222222" },
        pointLabels: {
          color: "#888888",
          font: { family: "var(--font-jetbrains-mono)", size: 11 },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#161616",
        borderColor: "#222222",
        borderWidth: 1,
        titleColor: "#f0f0f0",
        bodyColor: "#cccccc",
      },
    },
  };

  return (
    <div ref={ref} className="w-full max-w-md mx-auto aspect-square">
      <Radar data={data} options={options} />
    </div>
  );
}
