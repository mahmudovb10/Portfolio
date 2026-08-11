import { ExternalLink, Github } from "lucide-react";
import Reveal from "../components/Reveal";

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
      githubLink: "https://github.com/Bahodirkhon/Orman",
    },
    {
      id: 2,
      title: "Auron",
      description:
        "Auron — administratorlar o'rniga ishlaydigan AI yordamchi. Bu loyihani Telegram bori ham bor, bot guruhga qo'shilgach, a'zolarning savollariga avtomatik javob berib, admin va moderatorlarning vaqtini tejaydi. Har doim faol —  guruh azolarini savollari javobsiz qolmaydi. Auronni veb-saytida esa foydalanuvchi matematik amallar, ba'zi bir dasturlash tillari haqida ma'lumot olishi mumkin",
      image: "/auron.png",
      technologies: [
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Firebase",
        "Firestore",
        "MongoDB",
        "Zustand",
        "CSS",
      ],
      liveLink: "https://auron-five.vercel.app/",
      githubLink: "Private Repository",
    },

    {
      id: 3,
      title: "Green Mind",
      description:
        "Greend Mind gul do'koni uchun preview sayt. Bu saytda xaridor gullar narxi va kompaniya haqida malumot olishi mumkin",
      image: "/green.png",
      technologies: ["React", "Tailwind CSS", "CSS"],
      liveLink: "https://green-mind-eta.vercel.app/",
      githubLink: "https://github.com/Bahodirkhon/Green-Mind",
    },
    {
      id: 4,
      title: "Healthy Recipe",
      description:
        "Health Recipe restorani uchun menyu sayt. Bunda xaridor buyurtma qilgan taomini yoki boshqa taomlarning tarkibiy qismlarini ko'rishi mumkin",
      image: "/healthy.png",
      technologies: ["React", "JavaScript", "Tailwind CSS", "CSS"],
      liveLink: "https://examfigma-g8a5.vercel.app/",
      githubLink: "https://github.com/Bahodirkhon/Healthy-Recipe",
    },
    {
      id: 5,
      title: "PNT",
      description:
        "Bu sayt orqli qog'ozbozlik muammosini bartaraf qildim. Oldin Passport malumotlarini qog'ozda saqlashar edi bu esa xavfsiz emas edi. Men qurgan vebsayt orqali pasport malumotlari saytda saqlanadi va bu ancha xavfsiz, saytga faqat checklangan foydalanuvchilar kira oladi holos",
      image: "/pnt.png",
      technologies: [
        "React.js",
        "Java Script",
        "Type Script",
        "Tailwind CSS",
        "MongoDB ( Databse Integration )",
        "REST API",
        "JWT Authentication",
      ],
      liveLink: "https://securitysite-eight.vercel.app/",
      githubLink: "https://",
    },
    {
      id: 6,
      title: "Auron bot",
      description:
        "Auron Telegram Bot Guruhlar uchun aqlli yordamchi, kanallar uchun kunlik yangiliklar manbai. Auron — Telegram guruh va kanallar uchun mo'ljallangan, foydalanuvchi tajribasini yengillashtiruvchi bot. Foydalanuvchiga nima beradi: Guruh a'zolarining tez-tez beriladigan savollariga darhol, avtomatik javob — admin doim onlayn bo'lishi shart emas. Kanal a'zolari uchun har kuni yangilanib turadigan, AI va dasturlash sohasidagi eng dolzarb yangiliklar — qo'lda qidirish shart emas. Sifat nazorati — kanalga chiqadigan har bir post admin tomonidan ko'rib chiqiladi, shuning uchun faqat foydali va aniq kontent joylanadi. Har bir guruh o'ziga xos, moslashtirilgan javoblarga ega — umumiy, shablon javoblar emas. Tez va uzluksiz ishlaydi — foydalanuvchi hech qachon botning band yoki o'chiq ekanini sezmaydi.",
      image: "/auron.png",
      technologies: [
        "TypeScript",
        "Node.js",
        "grammY",
        "Express.js",
        "Firebase Admin SDK / Firestore",
        "RSS Parser",
        "Render.com",
        "cron-job.org,",
        "UptimeRobot",
        "node-cron",
      ],
      liveLink: "https://t.me/aurronn_ai_bot",
      githubLink: "https://",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 bg-slate-50 dark:bg-slate-900/20"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-wide uppercase">
              03 — Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Projects
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work and personal projects
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 120}>
              <div className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-violet-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-violet-50 dark:bg-slate-800 text-violet-700 dark:text-violet-300 text-xs rounded-md border border-violet-100 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-semibold shadow-md shadow-violet-600/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-slate-300 dark:border-slate-700 rounded-lg text-sm font-semibold hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
