import { useState, useEffect } from "react";
import { Home, User, Briefcase, FileText, Send, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "resume", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
    { name: "Resume", href: "#resume", icon: <FileText size={18} /> },
    { name: "Contact", href: "#contact", icon: <Send size={18} /> },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 hidden md:block ${
          scrolled
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center font-bold text-sm">
                BM
              </span>
              <span className="text-sm font-semibold text-slate-500 dark:text-gray-400 tracking-wide">
                PORTFOLIO
              </span>
            </div>
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      active
                        ? "text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-500/15"
                        : "text-slate-600 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="ml-2 p-2 rounded-full text-slate-600 dark:text-gray-300 hover:text-violet-700 dark:hover:text-violet-300 border border-slate-200 dark:border-slate-800 hover:border-violet-400 transition-all duration-300"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-2 px-2">
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg">
          <div className="flex justify-around items-center h-16 px-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-violet-600 dark:text-violet-300 bg-violet-100 dark:bg-violet-500/15"
                    : "text-slate-500 dark:text-gray-400"
                }`}
              >
                {link.icon}
                <span className="text-[11px] font-medium">{link.name}</span>
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl text-slate-500 dark:text-gray-400"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-[11px] font-medium">Theme</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
