import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location]);

  const productCategories = [
    { id: "caravans", label: "كرفانات", path: "/products/caravans" },
    { id: "shelters", label: "ملاجئ", path: "/products/shelters" },
    { id: "kiosks", label: "أكشاك", path: "/products/kiosks" },
    { id: "food-trucks", label: "عربات طعام", path: "/products/food-trucks" },
    {
      id: "mobile-offices",
      label: "مكاتب متنقلة",
      path: "/products/mobile-offices",
    },
  ];

  const navItems = [
    { id: "home", label: "الرئيسية", path: "/" },
    { id: "about", label: "من نحن", path: "/about-us" },
    {
      id: "products",
      label: "منتجاتنا",
      path: "/#products",
      hasDropdown: true,
    },
    { id: "projects", label: "مشاريعنا", path: "/projects" },
    { id: "gallery", label: "المعرض", path: "/gallery" },
    { id: "videos", label: "فيديوهات", path: "/videos" },
    { id: "contact", label: "تواصل معنا", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300 font-cairo",
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-10">
          <h1 className="text-xl md:text-2xl font-bold text-black">
            <span className="text-gold">ME</span> Caravan
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1 space-x-reverse items-center ">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setProductsDropdownOpen(!productsDropdownOpen)
                      }
                      className="px-4 py-2 hover:text-gold font-medium flex items-center"
                      onMouseEnter={() => setProductsDropdownOpen(true)}
                      onMouseLeave={() => setProductsDropdownOpen(false)}
                    >
                      {item.label}
                      <ChevronDown size={16} className="mr-1" />
                    </button>

                    {productsDropdownOpen && (
                      <div
                        className="absolute top-full right-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50"
                        onMouseEnter={() => setProductsDropdownOpen(true)}
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                      >
                        {productCategories.map((category) => (
                          <Link
                            key={category.id}
                            to={category.path}
                            className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-gold text-right"
                            onClick={() => {
                              setProductsDropdownOpen(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            {category.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="px-4 py-2 hover:text-gold font-medium"
                  >
                    {item.label}
                  </Link>
                )}
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
                {navItems.map((item) => (
                  <li key={item.id} className="relative">
                    {item.hasDropdown ? (
                      <div className="text-center">
                        <button
                          onClick={() =>
                            setProductsDropdownOpen(!productsDropdownOpen)
                          }
                          className="text-xl font-medium hover:text-gold flex items-center"
                        >
                          {item.label}
                          <ChevronDown size={16} className="mr-1" />
                        </button>

                        {productsDropdownOpen && (
                          <div className="mt-2 py-2">
                            {productCategories.map((category) => (
                              <Link
                                key={category.id}
                                to={category.path}
                                className="block py-2 hover:text-gold text-lg"
                                onClick={() => {
                                  setProductsDropdownOpen(false);
                                  setMobileMenuOpen(false);
                                }}
                              >
                                {category.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="text-xl font-medium hover:text-gold"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
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
