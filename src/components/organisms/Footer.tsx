import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import SocialLink from "../molecules/SocialLink";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Byakko. All rights reserved.
            </p>
          </div>

          <div className="flex flex-row gap-4">
            <SocialLink
              href="https://github.com/bbbyk105"
              icon={<FaGithub />}
            />
            <SocialLink
              href="mailto:byakkokondo@gmail.com"
              icon={<FaEnvelope />}
            />
            <SocialLink href="https://x.com/byakko_bbb" icon={<FaXTwitter />} />
            <SocialLink
              href="https://linkedin.com/in/byakko-kondo"
              icon={<FaLinkedin />}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
