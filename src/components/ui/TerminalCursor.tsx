"use client";

export default function TerminalCursor() {
  return (
    <span
      className="inline-block w-[3px] h-[0.9em] bg-accent ml-0.5 align-middle animate-pulse"
      aria-hidden
    />
  );
}
