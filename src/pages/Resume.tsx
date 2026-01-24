import {
  Download,
  ExternalLink,
  FileText,
  Code,
  Sparkles,
  Award,
} from "lucide-react";

const Resume = () => {
  const skills = {
    frontend: [
      { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
      { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "JavaScript", level: 88, color: "from-yellow-500 to-orange-500" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
      { name: "React.js", level: 90, color: "from-cyan-500 to-blue-500" },
      { name: "Next.js", level: 82, color: "from-gray-700 to-gray-900" },
    ],
    styling: [
      { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-blue-500" },
      { name: "Sass", level: 85, color: "from-pink-500 to-red-500" },
    ],
    tools: [
      { name: "Firebase", level: 78, color: "from-yellow-500 to-orange-600" },
      { name: "Git & GitHub", level: 88, color: "from-gray-600 to-gray-800" },
      {
        name: "AI Integration",
        level: 85,
        color: "from-purple-500 to-pink-500",
      },
    ],
  };

  const education = [
    {
      institution: "Najot Ta'lim",
      degree: "Frontend Developer",
      year: "2024",
      description:
        "Completed comprehensive frontend development bootcamp covering modern web technologies and best practices.",
    },
    {
      institution: "Kasb-hunar Kolleji",
      degree: "Professional Education",
      year: "2023",
      description:
        "Foundation in technical education and professional skills development.",
    },
  ];

  const certificates = [
    {
      name: "Frontend Developer",
      issuer: "Najot Ta'lim",
      year: "2024",
      type: "Professional Certificate",
    },
    {
      name: "Frontend Developer",
      issuer: "Kasb-hunar Kolleji",
      year: "2024",
      type: "Professional Certificate",
    },
  ];

  return (
    <section
      id="resume"
      className="min-h-screen py-20 px-4 md:pb-20 pb-24 bg-slate-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r  from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Download my resume or view my qualifications and skills below
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/CV.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download size={20} />
              Download PDF
            </a>
            <a
              href="/CV.pdf"
              className="flex items-center gap-2 px-6 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              <ExternalLink size={20} />
              View Full Resume
            </a>
          </div>
        </div>
        <div className="mb-16 bg-slate-900/50 border-2 border-dashed border-slate-700 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300">
          <FileText className="mx-auto mb-4 text-gray-600" size={64} />
          <p className="text-gray-400 mb-2">PDF Resume Preview</p>
          <p className="text-sm text-gray-500">
            Upload your resume PDF to display it here
          </p>
          ,
          <iframe
            src="/CV.pdf"
            className="w-full h-[600px]"
            title="Resume Preview"
          />
        </div>
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
                <Code size={20} />
                Frontend
              </h4>
              <div className="space-y-5">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`bg-linear-to-r ${skill.color} h-2.5 rounded-full transition-all duration-1000 shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center gap-2">
                <Sparkles size={20} />
                Styling
              </h4>
              <div className="space-y-5">
                {skills.styling.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`bg-linear-to-r ${skill.color} h-2.5 rounded-full transition-all duration-1000 shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-6 text-pink-400 flex items-center gap-2">
                <Award size={20} />
                Tools & More
              </h4>
              <div className="space-y-5">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`bg-linear-to-r ${skill.color} h-2.5 rounded-full transition-all duration-1000 shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg w-fit">
                    <Code className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-white">
                        {edu.institution}
                      </h4>
                      <span className="text-sm text-gray-500 bg-slate-800 px-3 py-1 rounded-full w-fit">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-cyan-400 mb-2 font-medium">
                      {edu.degree}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-purple-500/20 to-cyan-500/20 rounded-lg">
                    <Award className="text-purple-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-gray-500">{cert.type}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-500">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
