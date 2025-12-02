import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="font-amiri text-3xl md:text-4xl font-bold gradient-text">
          SufiMehendi
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["home", "gallery", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground hover:text-primary font-medium capitalize transition-colors relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-islamic-teal to-islamic-gold group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-12 h-12 rounded-xl bg-gradient-to-br from-islamic-teal to-islamic-burgundy p-[2px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-islamic-teal" />
            ) : (
              <Menu className="w-6 h-6 text-islamic-teal" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-background via-background to-islamic-cream/30 backdrop-blur-xl border-t-2 border-islamic-gold shadow-2xl animate-fadeInUp">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
          
          <div className="container mx-auto px-4 py-8 flex flex-col gap-3 relative z-10">
            {["home", "gallery", "about", "contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="group relative text-left text-xl font-semibold capitalize py-4 px-6 rounded-2xl bg-gradient-to-r from-card to-muted/20 hover:from-islamic-teal hover:to-islamic-burgundy hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 border-2 border-border hover:border-islamic-gold"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item}</span>
                {/* Decorative accent */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-islamic-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
