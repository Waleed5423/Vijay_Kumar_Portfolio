"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { navItems as defaultNavItems } from "./navigation-data";

// Define the type for navigation items
interface NavItem {
  label: string;
  href: string;
}

export default function NavigationClient({
  navItems = defaultNavItems as NavItem[], // Type assertion
}: {
  navItems?: NavItem[];
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu state (body scroll lock and ESC key)
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  // Navigation handler
  const handleNavigate = (href: string) => {
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      if (window.location.hash !== href) {
        window.history.pushState(null, "", href);
      }
    } else {
      router.push("/" + href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="md:container mx-auto md:px-6">
        <div className="flex items-center justify-between h-16 relative z-50 px-2 sm:px-0">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              VIJAY KUMAR
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigate(item.href)}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button size="sm" variant="gradient">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-md grid transition-[grid-template-rows] duration-300 ease-out relative z-40 ${
            isMobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigate(item.href)}
                  className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button size="sm" variant="gradient" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for outside click (mobile only) */}
      <button
        aria-hidden
        className={`fixed inset-0 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-30 bg-black/10`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}
