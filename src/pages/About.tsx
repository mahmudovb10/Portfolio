import { Calendar, Code, MapPin, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal";

const About = () => {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
    ],
    styling: ["Tailwind CSS", "Sass", "DaisyUI"],
    tools: ["Firebase", "Firestore", "Git & GitHub"],
    backend: ["MongoDB"],
  };

  const highlights = [
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Ferghana, Uzbekistan",
    },
    { icon: <Calendar size={20} />, label: "Age", value: "20 years old" },
    {
      icon: <Code size={20} />,
      label: "Specialty",
      value: "Frontend Engineer",
    },
    {
      icon: <Sparkles size={20} />,
      label: "Additional skills",
      value: "AI + Backend Integration",
    },
  ];

  const skillGroups = [
    { title: "Frontend", color: "violet", items: skills.frontend },
    { title: "Styling", color: "indigo", items: skills.styling },
    {
      title: "Tools & More",
      color: "violet",
      items: [...skills.tools, ...skills.backend],
    },
  ];

  return (
    <section id="about" className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-wide uppercase">
              02 — About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              About Me
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional, and user-friendly
              web experiences
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-violet-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <p className="text-slate-500 dark:text-gray-500 text-sm mb-1">
                  {item.label}
                </p>
                <p className="text-slate-900 dark:text-white font-semibold">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-violet-600" />
            <h3 className="text-2xl font-bold mb-6 text-violet-700 dark:text-violet-400">
              Who I Am
            </h3>
            <div className="space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed">
              <p>
                Hello! I am Bahodirkhon Mahmudov, a 20-year-old Frontend
                Developer from Fergana, Uzbekistan. I develop modern,
                minimalist, and user-friendly responsive web applications
              </p>
              <p>
                My experience in web development started with a passion for
                creating I have mastered technologies such as React.js and
                Next.js, I use CSS and Tailwind CSS to bring designs to life
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h3 className="text-2xl font-bold mb-10 text-center text-slate-900 dark:text-white">
              Technical Skills
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, gIndex) => (
              <Reveal key={group.title} delay={gIndex * 120}>
                <div className="bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-violet-400 transition-all duration-300 h-full">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-violet-600" />
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {group.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-violet-50 dark:bg-slate-800 border border-violet-100 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-500/10 hover:border-violet-300 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
