import { portfolioData } from "@/constants/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-3xl gap-6 px-6 py-10 sm:grid-cols-3">
        <div>
          <p className="text-sm font-medium">{portfolioData.personal.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">{portfolioData.footer.tagline}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Elsewhere</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a
                className="hover:text-primary"
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary"
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            {portfolioData.personal.readCv && (
              <li>
                <a
                  className="hover:text-primary"
                  href={portfolioData.personal.readCv}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read.cv
                </a>
              </li>
            )}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Colophon</p>
          <p className="mt-2 text-sm text-muted-foreground">{portfolioData.footer.colophon}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-3 px-6 py-4 text-center sm:text-left text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {portfolioData.personal.name}
          </span>
          <span>{portfolioData.footer.lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}
