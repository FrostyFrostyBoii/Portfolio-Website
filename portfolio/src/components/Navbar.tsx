import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center px-4 lg:px-6">
        {/* Brand */}
        <a
          href="#"
          onClick={closeMenu}
          className="group flex items-center gap-2"
          aria-label="Home"
        >
          <span className="text-[15px] font-bold uppercase tracking-[0.08em] text-[#14213d]">
            Your Name
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#fca311] transition-transform duration-200 group-hover:scale-150" />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="ml-auto mr-8 hidden h-full md:block"
          aria-label="Main navigation"
        >
          <ul className="flex h-full items-center gap-8">
            {links.map((link) => (
              <li key={link.href} className="h-full">
                <a
                  href={link.href}
                  className="group relative flex h-full items-center text-[13px] font-medium tracking-wide text-[#666666] transition-colors hover:text-[#14213d]"
                >
                  {link.label}

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#fca311] transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden border border-[#14213d] bg-[#14213d] px-4 py-2.5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-[#fca311] hover:bg-[#fca311] md:block"
        >
          Let's talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto flex h-10 w-10 items-center justify-center text-[#14213d] transition-colors hover:bg-[#f5f5f5] md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#e5e5e5] bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-4 py-3 lg:px-6"
          aria-label="Mobile navigation"
        >
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center border-b border-[#e5e5e5] py-4 text-sm font-medium text-[#14213d] transition-colors hover:text-[#fca311]"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block border border-[#14213d] bg-[#14213d] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:border-[#fca311] hover:bg-[#fca311]"
              >
                Let's talk
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


