import { Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-islamic-burgundy via-foreground to-islamic-burgundy text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 islamic-pattern" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-amiri text-3xl font-bold mb-4 text-islamic-gold">
              SufiMehendi
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Bringing elegance to every occasion with beautiful Islamic-inspired 
              henna art that tells your unique story.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/sufi_mehendi_86"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-islamic-gold flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-islamic-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["home", "gallery", "about", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-white/80 hover:text-islamic-gold capitalize transition-colors duration-300 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-islamic-gold">
              Services
            </h3>
            <ul className="space-y-3 text-white/80">
              <li>Bridal Mehendi</li>
              <li>Festival Specials</li>
              <li>Party Designs</li>
              <li>Custom Artwork</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/70">
            &copy; 2024 SufiMehendi. All rights reserved. Crafted with{" "}
            <span className="text-islamic-gold">♥</span> and tradition.
          </p>
        </div>
      </div>

      {/* Floating Instagram Button */}
      <a
        href="https://www.instagram.com/sufi_mehendi_86"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-islamic-gold shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300 animate-float"
        title="Follow us on Instagram"
      >
        <Instagram className="w-8 h-8 text-white" />
      </a>
    </footer>
  );
};

export default Footer;
