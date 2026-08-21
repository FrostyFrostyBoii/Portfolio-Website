import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#e5e5e5] text-[#14213d]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-[#333333] bg-[#04070c]">
        {/* Subtle geometric accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Blue structural block */}
          <div className="absolute -bottom-10 right-[6%] h-24 w-24 rotate-45 bg-[#0c1425]" />

          {/* Subtle vertical line */}
          <div className="absolute right-[18%] top-0 h-full w-px bg-[#14213d]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          {/* Copyright */}
          <div>
            <p className="text-[13px] font-medium tracking-wide text-[#e5e5e5]">
              © {new Date().getFullYear()} Your Name
            </p>

            <p className="mt-1 text-xs text-[#666666]">
              Built with React &amp; TypeScript
            </p>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="group flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#b8b8b8] transition-colors hover:text-white"
          >
            <span>Back to top</span>

            <span className="flex h-8 w-8 items-center justify-center border border-[#333333] text-[#fca311] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#fca311] group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
