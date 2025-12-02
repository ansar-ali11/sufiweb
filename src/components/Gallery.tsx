import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
  {
    title: "Bridal Mehendi",
    image: "/assets/m1.jpg",
    description: "Intricate bridal designs for your special day",
  },
  {
    title: "Traditional Patterns",
    image: "/assets/m2.jpg",
    description: "Classic Islamic geometric patterns",
  },
  {
    title: "Party Elegance",
    image: "/assets/m3.jpg",
    description: "Perfect for celebrations and gatherings",
  },
  {
    title: "Modern Minimal",
    image: "/assets/m4.jpg",
    description: "Contemporary designs with traditional roots",
  },
  {
    title: "Arabic Designs",
    image: "https://cdn0.weddingwire.in/article/8044/original/1920/jpg/114408-habeedas-henna.jpeg",
    description: "Flowing Arabic calligraphy-inspired art",
  },
  {
    title: "Floral Art",
    image: "https://getethnic.com/wp-content/uploads/2023/09/Floral-Mehendi-Designs-27.jpg",
    description: "Delicate floral motifs and patterns",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-islamic-teal to-islamic-gold mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautiful Islamic-inspired mehendi designs
          </p>
        </div>

        {/* Infinite Scrolling Gallery */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll-left">
            {/* First set of cards */}
            {galleryItems.map((item, index) => (
              <Card
                key={`first-${index}`}
                className="flex-shrink-0 w-[350px] group overflow-hidden rounded-3xl border-0 transition-all duration-500 shadow-2xl hover:shadow-islamic-gold/30 hover:-translate-y-4 bg-gradient-to-br from-islamic-teal/5 via-card to-islamic-burgundy/5"
              >
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden h-[450px] rounded-3xl">
                    {/* Islamic Pattern Overlay */}
                    <div className="absolute inset-0 islamic-pattern opacity-5 z-10 pointer-events-none" />
                    
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-islamic-burgundy/90 via-islamic-burgundy/40 to-transparent opacity-60" />
                    
                    {/* Content Container - Always Visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                      {/* Decorative Line */}
                      <div className="w-16 h-1 bg-islamic-gold rounded-full mb-4 group-hover:w-24 transition-all duration-500" />
                      
                      <h3 className="text-3xl font-bold mb-3 font-playfair drop-shadow-2xl group-hover:text-islamic-gold transition-colors duration-500">{item.title}</h3>
                      <p className="text-base opacity-90 drop-shadow-lg leading-relaxed">{item.description}</p>
                      
                      {/* Decorative Corner Elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-islamic-gold/50 group-hover:border-islamic-gold transition-all duration-500" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-islamic-gold/50 group-hover:border-islamic-gold transition-all duration-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {galleryItems.map((item, index) => (
              <Card
                key={`second-${index}`}
                className="flex-shrink-0 w-[350px] group overflow-hidden rounded-3xl border-0 transition-all duration-500 shadow-2xl hover:shadow-islamic-gold/30 hover:-translate-y-4 bg-gradient-to-br from-islamic-teal/5 via-card to-islamic-burgundy/5"
              >
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden h-[450px] rounded-3xl">
                    {/* Islamic Pattern Overlay */}
                    <div className="absolute inset-0 islamic-pattern opacity-5 z-10 pointer-events-none" />
                    
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-islamic-burgundy/90 via-islamic-burgundy/40 to-transparent opacity-60" />
                    
                    {/* Content Container - Always Visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                      {/* Decorative Line */}
                      <div className="w-16 h-1 bg-islamic-gold rounded-full mb-4 group-hover:w-24 transition-all duration-500" />
                      
                      <h3 className="text-3xl font-bold mb-3 font-playfair drop-shadow-2xl group-hover:text-islamic-gold transition-colors duration-500">{item.title}</h3>
                      <p className="text-base opacity-90 drop-shadow-lg leading-relaxed">{item.description}</p>
                      
                      {/* Decorative Corner Elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-islamic-gold/50 group-hover:border-islamic-gold transition-all duration-500" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-islamic-gold/50 group-hover:border-islamic-gold transition-all duration-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
