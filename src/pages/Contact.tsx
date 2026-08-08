import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Reveal from "../components/Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "bohodirxon.mahmudoov@gmail.com",
      link: "mailto:bohodirxon.mahmudoov@gmail.com",
    },
    {
      icon: <Phone size={22} />,
      label: "Phone",
      value: "+998 77 500 74 34",
      link: "tel:+998775007434",
    },
    {
      icon: <MapPin size={22} />,
      label: "Location",
      value: "Farg'ona, Uzbekistan",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={22} />,
      label: "GitHub",
      link: "https://github.com/Bahodirkhon",
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/bahodirxon-mahmudov-561096353",
    },
    {
      icon: <Mail size={22} />,
      label: "Email",
      link: "mailto:bahodirxon.web@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-4 bg-slate-50 dark:bg-slate-900/20"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-wide uppercase">
              05 — Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Reveal direction="left">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Contact Information
              </h3>
            </Reveal>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Reveal key={index} direction="left" delay={index * 100}>
                  <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 hover:border-violet-400 hover:-translate-y-0.5 transition-all duration-300">
                    {info.link ? (
                      <a href={info.link} className="flex items-center gap-4">
                        <div className="p-3 bg-violet-100 dark:bg-violet-500/15 rounded-xl text-violet-600 dark:text-violet-400">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-slate-500 dark:text-gray-500 text-sm">
                            {info.label}
                          </p>
                          <p className="text-slate-900 dark:text-white font-medium">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-violet-100 dark:bg-violet-500/15 rounded-xl text-violet-600 dark:text-violet-400">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-slate-500 dark:text-gray-500 text-sm">
                            {info.label}
                          </p>
                          <p className="text-slate-900 dark:text-white font-medium">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal direction="left" delay={300}>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 hover:-translate-y-0.5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Send a Message
              </h3>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold shadow-lg shadow-violet-600/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
