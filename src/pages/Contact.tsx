import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   alert("Message sent! (This is a demo - integrate with your backend)");
  //   setFormData({ name: "", email: "", message: "" });
  // };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "bohodirxon.mahmudoov@gmail.com",
      link: "mailto:bohodirxon.mahmudoov@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+998 77 500 74 34",
      link: "tel:+998775007434",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Farg'ona, Uzbekistan",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      link: "https://github.com/mahmudovb10",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/bahodirxon-mahmudov-561096353",
      color: "hover:text-blue-400",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      link: "mailto:bohodirxon.mahmudoov@gmail.com",
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 md:pb-20 pb-24 bg-slate-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300"
                >
                  {info.link ? (
                    <a href={info.link} className="flex items-center gap-4">
                      <div className="p-3 bg-slate-800 rounded-lg text-purple-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-800 rounded-lg text-purple-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-linear-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
