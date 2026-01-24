import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Briefcase,
  FileText,
  Send,
  Github,
  Linkedin,
  Mail,
  Code,
  Calendar,
  Award,
  Sparkles,
  Download,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={20} /> },
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
    { name: "Resume", href: "#resume", icon: <FileText size={20} /> },
    { name: "Contact", href: "#contact", icon: <Send size={20} /> },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 hidden md:block ${scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                BM.
              </span>
            </div>
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-2 px-2">
        <div className="bg-slate-900/60 backdrop-blur-2xl border border-slate-800 rounded-2xl shadow-2xl shadow-black/50">
          <div className="flex justify-around items-center h-16 px-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === link.href.substring(1) ? "text-cyan-400 bg-cyan-400/10" : "text-gray-400 hover:text-gray-300"}`}
              >
                {link.icon}
                <span className="text-xs font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
