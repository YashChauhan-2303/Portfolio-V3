import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/constants/portfolio-data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/60 bg-[#050505]/65 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-16 lg:px-24">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm transition-opacity hover:opacity-90"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-semibold text-zinc-100">{portfolioData.personal.name}</span>
          <span className="text-zinc-500 font-normal hidden md:inline">
            / {portfolioData.personal.role}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-nowrap items-center gap-x-4 lg:gap-x-6 text-[13px] font-medium tracking-tight text-zinc-400">
          <a
            className="hover:text-zinc-100 transition-colors duration-200"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="hover:text-zinc-100 transition-colors duration-200"
            href="#achievements"
          >
            Achievements
          </a>
          <a
            className="hover:text-zinc-100 transition-colors duration-200"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="hover:text-zinc-100 transition-colors duration-200"
            href="#education"
          >
            Education &amp; Skills
          </a>
          <a
            className="hover:text-zinc-100 transition-colors duration-200"
            href="#contact"
          >
            Connect
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-[#050505]/40 text-zinc-300 hover:text-white hover:bg-zinc-900/60 focus:outline-none focus:ring-1 focus:ring-zinc-700 md:hidden transition-all duration-200"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <div className="relative flex h-4 w-4 flex-col justify-between overflow-hidden">
            <span
              className={`block h-[1.5px] w-4 bg-current transition-all duration-300 origin-left ${
                isOpen ? "rotate-45 translate-y-[2px] translate-x-[1px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                isOpen ? "opacity-0 -translate-x-2" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-current transition-all duration-300 origin-left ${
                isOpen ? "-rotate-45 -translate-y-[2px] translate-x-[1px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Backdrop & Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[#050505]/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {isOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-full border-b border-zinc-900/80 bg-[#050505]/95 backdrop-blur-lg px-6 py-6 md:hidden z-40 overflow-hidden"
          >
            <div className="flex flex-col gap-5 text-sm font-medium tracking-tight">
              <div className="border-b border-zinc-900/60 pb-3">
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold">
                  Role
                </p>
                <p className="text-zinc-300 text-sm mt-0.5 font-medium">
                  {portfolioData.personal.role}
                </p>
              </div>
              <a
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors py-2 text-zinc-300 text-base border-b border-zinc-950"
                href="#experience"
              >
                Experience
              </a>
              <a
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors py-2 text-zinc-300 text-base border-b border-zinc-950"
                href="#achievements"
              >
                Achievements
              </a>
              <a
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors py-2 text-zinc-300 text-base border-b border-zinc-950"
                href="#projects"
              >
                Projects
              </a>
              <a
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors py-2 text-zinc-300 text-base border-b border-zinc-950"
                href="#education"
              >
                Education &amp; Skills
              </a>
              <a
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors py-2 text-zinc-300 text-base"
                href="#contact"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
