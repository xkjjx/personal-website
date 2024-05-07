import React from "react";

type FooterItem = {
  name: string;
  path: string;
};

const footerItems: FooterItem[] = [
  { name: "", path: "#" }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        <div className="text-sm">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {footerItems.map((item) => (
            <a key={item.path} href={item.path} className="hover:text-gray-300">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* SVG path for a generic social icon can be placed here */}
            </svg>
          </a>
          <a href="https://twitter.com" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* SVG path for another generic social icon can be placed here */}
            </svg>
          </a>
          <a href="https://instagram.com" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* SVG path for another generic social icon can be placed here */}
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
