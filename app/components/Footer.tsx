const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[color:var(--sand-100)] py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--ink-700)]">
            Bektech
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[color:var(--ink-700)]">
            Carrelage, revêtement, mosaïque, démolition, préparation et petite
            maçonnerie pour particuliers et professionnels.
          </p>
        </div>

        <div className="space-y-2 text-sm text-[color:var(--ink-700)]">
          <div>Route du Vélodrome 60</div>
          <div>1228 Plan-les-Ouates</div>
          <div>+41 79 925 22 27</div>
          <div>info@bektech.ch</div>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[color:var(--ink-700)] transition hover:border-[color:var(--accent-500)] hover:text-black"
              aria-label={link.label}
            >
              <span className="text-xs uppercase tracking-[0.2em]">
                {link.label.slice(0, 2)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
