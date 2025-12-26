import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { to: "/", label: "HOME" },
    { to: "/services", label: "SERVICES" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b-2 border-accent sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition duration-300 flex-shrink-0"
          >
            <img
              src="https://i.ibb.co/s954vR34/eaglesecurityoriginallogo-1-copy.png"
              alt="Eagle Security Guards Logo"
              className="h-12 w-12 md:h-16 md:w-16"
            />
            <div className="flex flex-col gap-1">
              <span className="text-xl md:text-2xl font-black text-white">
                Eagle
              </span>
              <span className="text-xs font-black tracking-widest text-accent">
                SECURITY GUARDS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-12 items-center">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-black text-sm text-white hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Professional Mobile Menu Button - Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1.5 w-8 h-8 items-center justify-center hover:opacity-80 transition-opacity duration-300 focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Professional Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 border-t border-accent pt-6 animate-slideDown">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-5 font-black text-sm text-white hover:text-accent bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 transition-all duration-300 rounded-lg mb-2 border-l-4 border-transparent hover:border-accent"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}
