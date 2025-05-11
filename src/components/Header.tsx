
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300 font-cairo",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="z-10">
          <h1 className="text-xl md:text-2xl font-bold text-black">
            <span className="text-gold">ME</span> Caravan
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1 space-x-reverse">
            {[
              { id: "home", label: "الرئيسية" },
              { id: "about", label: "من نحن" },
              { id: "products", label: "منتجاتنا" },
              { id: "gallery", label: "المعرض" },
              { id: "videos", label: "فيديوهات" },
              { id: "contact", label: "تواصل معنا" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="px-4 py-2 hover-gold font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-10 p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1">
            <span
              className={`block h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-[5] transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <nav>
              <ul className="flex flex-col items-center space-y-6">
                {[
                  { id: "home", label: "الرئيسية" },
                  { id: "about", label: "من نحن" },
                  { id: "products", label: "منتجاتنا" },
                  { id: "gallery", label: "المعرض" },
                  { id: "videos", label: "فيديوهات" },
                  { id: "contact", label: "تواصل معنا" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-xl font-medium hover-gold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
