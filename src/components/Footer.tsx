import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/Bahodirkhon",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/bahodirxon-mahmudov-561096353",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:bahodirxon.web@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 dark:text-gray-400 text-sm">
              © 2026 Bahodirxon Mahmudov. All rights reserved.
            </div>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 hover:-translate-y-0.5 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
