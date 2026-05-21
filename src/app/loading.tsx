export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-6 px-6">
      <div className="w-12 h-12 rounded-full border-2 border-border border-t-accent animate-spin" />
      <p className="font-mono text-xs text-text-muted uppercase tracking-[0.2em] animate-pulse">
        Loading portfolio
      </p>
    </div>
  );
}
