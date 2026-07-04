import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail, Globe } from "lucide-react";

function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: FaGithub,
      href: "https://github.com/Rohan-Korake",
      label: "GitHub",
    },
    {
      id: 2,
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rohan-korake",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: FaXTwitter,
      href: "https://x.com/RohanKorake",
      label: "Twitter",
    },
    {
      id: 4,
      icon: Globe,
      href: "https://rohankorake.vercel.app/",
      label: "Website",
    },
    {
      id: 5,
      icon: Mail,
      href: "mailto:rohannkorake@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className=" flex justify-center">
      <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#12192B]/80 backdrop-blur-xl px-5 py-3 shadow-[0_0_40px_rgba(139,92,246,0.25)]">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group rounded-full p-2 text-gray-400 transition-all duration-300 hover:bg-violet-500/10 hover:text-violet-400 hover:scale-110"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
