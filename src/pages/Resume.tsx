import {
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Award,
} from "lucide-react";
import Reveal from "../components/Reveal";

const Resume = () => {
  const education = [
    {
      institution: "Najot Ta'lim",
      degree: "Frontend Developer",
      year: "2025",
      description:
        "Completed comprehensive frontend development bootcamp covering modern web technologies and best practices.",
    },
    {
      institution: "Vocational College",
      degree: "Professional Education",
      year: "2024",
      description:
        "Foundation in technical education and professional skills development.",
    },
  ];

  const certificates = [
    {
      name: "Frontend Developer",
      issuer: "Najot Ta'lim",
      year: "2025",
      type: "Professional Certificate",
    },
  ];

  return (
    <section id="resume" className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-wide uppercase">
              04 — Resume
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Resume
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Download my resume or view my qualifications and skills below
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold shadow-lg shadow-violet-600/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download size={18} />
                Download PDF
              </a>
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-full font-semibold hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
              >
                <ExternalLink size={18} />
                View Full Resume
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-20 bg-slate-50 dark:bg-slate-900/50 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 text-center hover:border-violet-400 transition-all duration-300">
            <FileText
              className="mx-auto mb-4 text-violet-400 dark:text-violet-500/60"
              size={56}
            />
            <p className="text-slate-500 dark:text-gray-400 mb-4">
              PDF Resume Preview
            </p>
            <iframe
              src="/resume.pdf"
              className="w-full h-[600px] rounded-lg"
              title="Resume Preview"
            />
          </div>
        </Reveal>

        {/* Timeline: Education */}
        <div className="mb-20">
          <Reveal>
            <h3 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
              Education
            </h3>
          </Reveal>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-violet-200 dark:bg-violet-800" />
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Reveal key={index} direction="left" delay={index * 150}>
                  <div className="relative pl-16">
                    <span className="absolute left-0 top-1 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-lg shadow-violet-600/30 z-10">
                      <GraduationCap size={20} />
                    </span>
                    <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-violet-400 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {edu.institution}
                        </h4>
                        <span className="text-sm text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-500/15 px-3 py-1 rounded-full w-fit">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-violet-600 dark:text-violet-400 mb-2 font-medium">
                        {edu.degree}
                      </p>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
              Certificates
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-violet-400 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/15 rounded-xl">
                      <Award
                        className="text-indigo-600 dark:text-indigo-400"
                        size={24}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-slate-600 dark:text-gray-400 text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-500 dark:text-gray-500">
                          {cert.type}
                        </span>
                        <span className="text-slate-400 dark:text-gray-600">
                          •
                        </span>
                        <span className="text-slate-500 dark:text-gray-500">
                          {cert.year}
                        </span>
                      </div>
                    </div>
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

export default Resume;
