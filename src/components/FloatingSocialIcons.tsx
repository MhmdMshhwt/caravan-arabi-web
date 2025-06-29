
import { Facebook, Instagram, Twitter } from "lucide-react";

const FloatingSocialIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
