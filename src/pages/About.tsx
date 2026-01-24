import { Calendar, Code, MapPin, Sparkles } from "lucide-react";

const About = () => {
  const skills = {
    frontend: [
      { name: "HTML", level: "Used in real projects" },
      { name: "CSS", level: "Used in real projects" },
      { name: "JavaScript", level: "Used in real projects" },
      { name: "TypeScript", level: "Used in real projects" },
      { name: "React.js", level: "Production experience" },
      { name: "Next.js", level: "Personal & client projects" },
    ],
    styling: [
      { name: "Tailwind CSS", level: "Production experience" },
      { name: "Sass", level: "Used in real projects" },
      { name: "DaisyUI", level: "Used in real projects" },
    ],
    tools: [
      { name: "Firebase", level: "Used in real projects" },
      { name: "Git & GitHub", level: "Daily use" },
      { name: "AI Integration", level: "Daily use in development" },
    ],
  };

  const highlights = [
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Farg'ona, Uzbekistan",
    },
    { icon: <Calendar size={20} />, label: "Age", value: "19 years old" },
    {
      icon: <Code size={20} />,
      label: "Specialty",
      value: "Frontend Development",
    },
    {
      icon: <Sparkles size={20} />,
      label: "Superpower",
      value: "AI + Backend Integration",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:pb-20 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly
            web experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="text-purple-400 mb-3">{item.icon}</div>
              <p className="text-gray-500 text-sm mb-1">{item.label}</p>
              <p className="text-white font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Who I Am</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Hi! I'm Bahodirxon Mahmudov, a 19-year-old Frontend Developer from
              Farg'ona, Uzbekistan. I specialize in building modern, minimalist,
              and responsive web applications that provide exceptional user
              experiences.
            </p>
            <p>
              My journey in web development started with a passion for creating
              beautiful interfaces. I've mastered technologies like React.js,
              Next.js, TypeScript, and Tailwind CSS to bring designs to life
              with pixel-perfect precision.
            </p>
            <p>
              While I focus on frontend development, I leverage AI tools to
              handle backend integration when needed, allowing me to build
              full-stack solutions independently. I believe in continuous
              learning and staying updated with the latest web technologies and
              best practices.
            </p>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-purple-400">
                Frontend
              </h4>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">
                Styling
              </h4>
              <div className="space-y-4">
                {skills.styling.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-pink-400">
                Tools & More
              </h4>
              <div className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
