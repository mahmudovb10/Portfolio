import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Reveal from "../components/Reveal";

const HomePage = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer | Modern and Minimalist Website Builder";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Sass",
    "DaisyUI",
    "Firebase",
    "Firestore",
    "Git",
    "MongoDB",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      {/* Decorative solid-color blobs, no gradients */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-violet-200 dark:bg-violet-600/20 rounded-full blur-3xl opacity-50 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-200 dark:bg-indigo-600/20 rounded-full blur-3xl opacity-50 animate-pulse-slow pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <Reveal direction="left">
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-wide uppercase">
                Salom, men
              </span>
            </Reveal>

            <Reveal direction="left" delay={80}>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
                Bahodirxon Mahmudov
              </h1>
            </Reveal>

            <Reveal direction="left" delay={160}>
              <p className="text-lg md:text-xl text-violet-600 dark:text-violet-400 mb-6 h-8">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </Reveal>

            <Reveal direction="left" delay={240}>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8 max-w-lg">
                20 years old passionate developer from Fergana, specializing in
                creating modern, minimalist, and user-friendly web experiences
                with cutting-edge technologies.
              </p>
            </Reveal>

            <Reveal direction="left" delay={320}>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-violet-600 text-white hover:bg-violet-700 rounded-full font-semibold shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-full font-semibold hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <p className="text-sm text-slate-500 dark:text-gray-500 mb-4 font-medium">
                Tech Stack
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {techStack.map((tech, i) => (
                  <span
                    key={tech}
                    style={{ transitionDelay: `${420 + i * 25}ms` }}
                    className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-700 dark:text-gray-300 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex justify-center items-center order-1 md:order-2">
            <Reveal direction="right" delay={100}>
              <div className="relative animate-float">
                <div className="absolute -inset-3 rounded-full border-2 border-dashed border-violet-300 dark:border-violet-700/50" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-violet-500/40 shadow-2xl shadow-violet-500/20">
                  <img
                    src="/deskuser.jpg"
                    alt="Bahodirxon Mahmudov"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  20yo
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={600}>
          <div className="hidden md:flex justify-center mt-16 text-slate-400 dark:text-gray-600 animate-bounce">
            <ArrowDown size={24} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HomePage;
