import { Button } from "@/components/ui/button";
import IslamicPattern from "./IslamicPattern";

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.85), rgba(127, 29, 29, 0.85)), url('https://images.unsplash.com/photo-1610117048930-ff5092976aaa?q=80&w=2000')`,
        }}
      />

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <IslamicPattern />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-islamic-gold/30 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border-4 border-islamic-gold/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeInUp">
          <div className="inline-block mb-4 px-6 py-2 bg-islamic-gold/20 backdrop-blur-sm rounded-full border border-islamic-gold/30">
            <span className="text-islamic-gold-light font-amiri text-lg">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
          </div>

          <h1 className="font-amiri text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            SufiMehendi
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light max-w-2xl mx-auto leading-relaxed">
            Elegant Henna Art for Every Special Occasion
          </p>

          <p className="text-lg md:text-xl text-islamic-cream/90 max-w-xl mx-auto">
            Traditional Islamic designs blended with contemporary elegance
          </p>

          <Button
            onClick={scrollToGallery}
            size="lg"
            className="bg-islamic-gold hover:bg-islamic-gold-light text-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Our Art
          </Button>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
