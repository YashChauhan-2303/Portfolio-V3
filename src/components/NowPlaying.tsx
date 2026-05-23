import { portfolioData } from "@/constants/portfolio-data";

// "Now" terminal-style card — the fun bit. Static, no animation.
export function NowPlaying() {
  return (
    <section id="now" className="mb-20">
      <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
        <h2 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-zinc-500/80">
          /now
        </h2>
        <span className="text-xs text-muted-foreground">a snapshot</span>
      </div>

      <div
        className="overflow-hidden rounded-xl border border-border bg-card"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <div className="flex items-center gap-2 border-b border-border bg-accent/40 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-destructive/70" />
          <span className="h-3 w-3 rounded-full bg-primary/70" />
          <span className="h-3 w-3 rounded-full bg-muted-foreground/40" />
          <span className="ml-3 text-xs text-muted-foreground">{portfolioData.now.prompt}</span>
        </div>

        <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-6 text-zinc-300">
          {`> cat now.json\n{\n  `}
          <span className="text-primary">&quot;learning&quot;</span>
          {`:   "${portfolioData.now.learning}",\n  `}
          <span className="text-primary">&quot;reading&quot;</span>
          {`:    "${portfolioData.now.reading}",\n  `}
          <span className="text-primary">&quot;building&quot;</span>
          {`:   "${portfolioData.now.building}",\n  `}
          <span className="text-primary">&quot;listening&quot;</span>
          {`:  "${portfolioData.now.listening}",\n  `}
          <span className="text-primary">&quot;coffee&quot;</span>
          {`:    "${portfolioData.now.coffee}",\n  `}
          <span className="text-primary">&quot;status&quot;</span>
          {`:    "${portfolioData.now.status}"\n}\n\n> _`}
        </pre>
      </div>
    </section>
  );
}
