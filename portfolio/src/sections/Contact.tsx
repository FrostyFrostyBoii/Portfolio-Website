export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-t border-[#04070c] bg-[#14213d]"
    >
      {/* Geometric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large dark structural block */}
        <div className="absolute -right-24 top-0 h-full w-[32%] bg-[#0c1425]" />

        {/* Large outlined square */}
        <div className="absolute right-[20%] top-20 h-64 w-64 rotate-12 border-2 border-[#3e67bf]/30" />

        {/* Orange block */}
        <div className="absolute right-[8%] top-28 h-20 w-48 -rotate-6 bg-[#fca311]" />

        {/* Small orange square */}
        <div className="absolute bottom-24 right-[28%] h-10 w-10 rotate-45 bg-[#fca311]" />

        {/* Grey structural block */}
        <div className="absolute bottom-16 right-[8%] h-24 w-32 bg-[#29447e]" />

        {/* Vertical line */}
        <div className="absolute right-[32%] top-0 h-full w-px bg-[#3e67bf]/30" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#fca311]" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e5e5e5]">
              04 — Contact
            </p>
          </div>

          {/* Heading */}
          <h2 className="max-w-3xl text-5xl font-bold tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">
            Let's work
            <br />
            together<span className="text-[#fca311]">.</span>
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#e5e5e5]">
            Have a project, opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>

          {/* Email CTA */}
          <div className="mt-10">
            <a
              href="mailto:you@example.com"
              className="group inline-flex items-center gap-4 border border-[#fca311] bg-[#fca311] px-6 py-4 text-sm font-semibold text-[#14213d] transition-all duration-300 hover:bg-[#fdb541]"
            >
              <span>you@example.com</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Secondary contact line */}
          <div className="mt-16 flex items-center gap-4">
            <span className="h-px w-16 bg-[#3e67bf]" />

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#beccea]">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="relative z-10 h-px w-full bg-[#fca311]" />
    </section>
  );
}