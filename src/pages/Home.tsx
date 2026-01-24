import { useEffect, useState } from "react";
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
    "Tailwind CSS",
    "Sass",
    "Firebase",
    "DaisyUI",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <div
              className="mb-6 opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Bahodirxon Mahmudov
              </h1>
            </div>
            <div
              className="mb-8 opacity-0 animate-fadeIn h-8"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <p className="text-lg md:text-xl text-gray-300">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <div
              className="mb-8 opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <p className="text-gray-400 leading-relaxed">
                19 years old passionate developer from Fergana, specializing in
                creating modern, minimalist, and user-friendly web experiences
                with cutting-edge technologies.
              </p>
            </div>
            <div
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-linear-to-r border-2 border-cyan-500 hover:bg-cyan-500/10  hover:shadow-cyan-500/50 rounded-lg font-semibold hover:shadow-lg  transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
            <div
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              <p className="text-sm text-gray-500 mb-4">Tech Stack</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center order-1 md:order-2">
            <div
              className="relative opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                <img
                  src="/deskuser.jpg"
                  alt="Bahodirxon Mahmudov"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-bounce"></div>
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
