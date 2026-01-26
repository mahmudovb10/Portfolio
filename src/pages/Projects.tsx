import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Orman",
      description:
        "Bu saytda xaridor mahsulot haqida batafsil malumot olishi bilan birga, o'zining va sotuvchi operatorlarni vaqtini tejamoqda",
      image: "/orman.png",
      technologies: [
        "React.js",
        "Type Script",
        "Java Script",
        "Firebase",
        "Tailwind CSS",
      ],
      liveLink: "https://ormanuz.vercel.app/",
      githubLink: "https://github.com/mahmudovb10/Orman",
    },
    {
      id: 2,
      title: "Green Mind",
      description:
        "Greend Mind gul do'koni uchun preview sayt. Bu saytda xaridor gullar narxi va kompaniya haqida malumot olishi mumkin",
      image: "/green.png",
      technologies: ["React", "Tailwind CSS", "CSS"],
      liveLink: "https://green-mind-eta.vercel.app/",
      githubLink: "https://github.com/mahmudovb10/Green-Mind",
    },
    {
      id: 3,
      title: "Healthy Recipe",
      description:
        "Health Recipe restorani uchun menyu sayt. Bunda xaridor buyurtma qilgan taomini yoki boshqa taomlarning tarkibiy qismlarini ko'rishi mumkin",
      image: "/healthy.png",
      technologies: ["React", "JavaScript", "Tailwind CSS", "CSS"],
      liveLink: "https://examfigma-g8a5.vercel.app/",
      githubLink: "https://github.com/mahmudovb10/Healthy-Recipe",
    },
    {
      id: 4,
      title: "PNT",
      description:
        "Bu sayt orqli qog'ozbozlik muammosini bartaraf qildim. Oldin Passport malumotlarini qog'ozda saqlashar edi bu esa xavfsiz emas edi. Men qurgan vebsayt orqali pasport malumotlari saytda saqlanadi va bu ancha xavfsiz, saytga faqat checklangan foydalanuvchilar kira oladi holos",
      image: "/nnjbj",
      technologies: [
        "React.js",
        "Java Script",
        "Type Script",
        "Tailwind CSS",
        "MongoDB ( Databse Integration )",
        "REST API",
        "JWT Authentication",
      ],
      levelLink: "https://securitysite-eight.vercel.app/",
      githubLink: "https://github.com/mahmudovb10/securitysite",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:pb-20 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-cyan-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-slate-700 rounded-lg text-sm font-semibold hover:border-purple-500 transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
