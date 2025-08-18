import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import NavigationClient from "./NavigationClient";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavigationContainer = ({ isScrolled }: { isScrolled?: boolean }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="md:container mx-auto md:px-6">
        <div className="flex items-center justify-between h-16 relative z-50">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              VIJAY KUMAR
            </h1>
          </div>

          {/* Desktop Navigation - Static Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" variant="gradient">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button - Will be handled by client component */}
          <NavigationClient navItems={navItems} />
        </div>
      </div>
    </nav>
  );
};

export default NavigationContainer;
