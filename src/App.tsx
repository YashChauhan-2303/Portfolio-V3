import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NowPlaying } from "@/components/NowPlaying";
import { motion } from "framer-motion";
import { portfolioData } from "@/constants/portfolio-data";

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-65px" },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
};

export default function App() {
  return (
    <div
      id="top"
      className="min-h-screen text-foreground"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-16 sm:py-24 lg:px-24">
        {/* Hero */}
        <motion.header {...fadeUp} className="mb-24 sm:mb-28">
          <p className="mb-5 text-[11px] uppercase tracking-[0.25em] font-semibold text-zinc-500/80">
            Portfolio · 2026
          </p>
          <h1
            className="text-5xl leading-[1.02] sm:text-6xl lg:text-7xl font-normal tracking-tight text-zinc-100 antialiased"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {portfolioData.hero.heading}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {portfolioData.hero.subheading}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[13px] font-medium tracking-tight">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="rounded-full bg-zinc-100 px-4 py-2 text-[#050505] hover:bg-zinc-200 transition-colors duration-200"
            >
              {portfolioData.hero.ctaText}
            </a>
            <a
              href={portfolioData.personal.resume}
              className="rounded-full border border-zinc-800 px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors duration-200"
            >
              Résumé
            </a>
            <span className="text-zinc-500 ml-1">{portfolioData.personal.location}</span>
          </div>
        </motion.header>

        {/* Experience */}
        <motion.section {...fadeUp} id="experience" className="mb-20">
          <div className="mb-6 flex items-baseline justify-between border-b border-zinc-800/40 pb-3">
            <h2 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-zinc-500/80">
              Experience
            </h2>
          </div>
          <ul className="space-y-6">
            {portfolioData.experience.map((e) => (
              <li key={e.role} className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-4">
                <span className="col-span-4 text-sm font-medium text-zinc-500 sm:col-span-3">
                  {e.period}
                </span>
                <div className="col-span-8 sm:col-span-9">
                  <h3 className="text-base font-semibold text-zinc-200">
                    {e.role} <span className="text-zinc-500 font-normal">· {e.org}</span>
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{e.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Achievements */}
        <motion.section {...fadeUp} id="achievements" className="mb-20">
          <div className="mb-6 flex items-baseline justify-between border-b border-zinc-800/40 pb-3">
            <h2 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-zinc-500/80">
              Achievements
            </h2>
          </div>
          <ul className="space-y-5">
            {portfolioData.achievements.map((a) => (
              <li key={a.title} className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-4">
                <span className="col-span-2 text-sm font-medium text-zinc-500">{a.year}</span>
                <div className="col-span-10">
                  <h3 className="text-base font-semibold text-zinc-200">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{a.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Projects */}
        <motion.section {...fadeUp} id="projects" className="mb-20">
          <div className="mb-6 flex items-baseline justify-between border-b border-zinc-800/40 pb-3">
            <h2 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-zinc-500/80">
              Projects
            </h2>
            <span className="text-xs text-zinc-500 font-medium">
              {portfolioData.projects.length} projects
            </span>
          </div>
          <ul className="divide-y divide-zinc-900/60">
            {portfolioData.projects.map((p) => (
              <li
                key={p.title}
                className="group py-6 -mx-4 px-4 rounded-xl hover:bg-zinc-900/[0.2] border border-transparent hover:border-zinc-900/20 transition-all duration-300"
              >
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-4"
                >
                  <span className="col-span-2 text-sm font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                    {p.year}
                  </span>
                  <div className="col-span-10">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3
                        className="text-xl text-zinc-200 font-semibold group-hover:text-primary transition-colors duration-300"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {p.title}
                      </h3>
                      <span className="text-zinc-500 text-sm group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                        ↗
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                    <p className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono tracking-wider text-zinc-500/80">
                      {p.stack.join(" · ")}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Education & Skills */}
        <motion.section {...fadeUp} id="education" className="mb-20">
          <div className="mb-6 flex items-baseline justify-between border-b border-zinc-800/40 pb-3">
            <h2 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-zinc-500/80">
              Education &amp; Skills
            </h2>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-4">
            <span className="col-span-4 text-sm font-medium text-zinc-500 sm:col-span-3">
              {portfolioData.education.period}
            </span>
            <div className="col-span-8 sm:col-span-9">
              <h3 className="text-base font-semibold text-zinc-200">
                {portfolioData.education.institution}
              </h3>
              <p className="mt-1.5 text-sm text-zinc-400">{portfolioData.education.degree}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400/90">
                Coursework: {portfolioData.education.coursework}
              </p>
            </div>
          </div>
          <dl id="skills" className="mt-8 space-y-4 border-t border-zinc-900/60 pt-8 text-sm">
            {portfolioData.skills.map((g) => (
              <div key={g.label} className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-4">
                <dt className="col-span-4 text-zinc-500 font-medium sm:col-span-3">{g.label}</dt>
                <dd className="col-span-8 text-zinc-300 sm:col-span-9">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.div {...fadeUp}>
          <NowPlaying />
        </motion.div>

        {/* Contact */}
        <motion.section
          {...fadeUp}
          id="contact"
          className="mb-12 rounded-2xl border border-zinc-900/50 bg-card/15 p-8 backdrop-blur-sm"
        >
          <h2 className="text-2xl text-zinc-200" style={{ fontFamily: "var(--font-serif)" }}>
            Let's connect.
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
            Open to internships, side projects, and a good conversation. The fastest way to reach me
            is email.
          </p>
          <ul className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
            <li>
              <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Email
              </span>
              <a
                className="mt-1 block text-zinc-300 underline-offset-4 hover:underline hover:text-white transition-colors duration-200"
                href={`mailto:${portfolioData.personal.email}`}
              >
                {portfolioData.personal.email}
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                GitHub
              </span>
              <a
                className="mt-1 block text-zinc-300 underline-offset-4 hover:underline hover:text-white transition-colors duration-200"
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
              >
                {portfolioData.personal.githubUsername}
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                LinkedIn
              </span>
              <a
                className="mt-1 block text-zinc-300 underline-offset-4 hover:underline hover:text-white transition-colors duration-200"
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {portfolioData.personal.linkedinUsername}
              </a>
            </li>
          </ul>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
