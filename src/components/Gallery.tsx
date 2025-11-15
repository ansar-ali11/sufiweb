import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
  {
    title: "Bridal Mehendi",
    image: "https://images.unsplash.com/photo-1610117048930-ff5092976aaa?q=80&w=800",
    description: "Intricate bridal designs for your special day",
  },
  {
    title: "Traditional Patterns",
    image: "https://images.unsplash.com/photo-1598513239239-d3d3a9000e66?q=80&w=800",
    description: "Classic Islamic geometric patterns",
  },
  {
    title: "Party Elegance",
    image: "https://images.unsplash.com/photo-1610117049304-b7386add2f6c?q=80&w=800",
    description: "Perfect for celebrations and gatherings",
  },
  {
    title: "Modern Minimal",
    image: "https://images.unsplash.com/photo-1623146339642-e949ddeea1b2?q=80&w=800",
    description: "Contemporary designs with traditional roots",
  },
  {
    title: "Arabic Designs",
    image: "https://images.unsplash.com/photo-1614021422985-5ffbfb2e6c6a?q=80&w=800",
    description: "Flowing Arabic calligraphy-inspired art",
  },
  {
    title: "Floral Art",
    image: "https://images.unsplash.com/photo-1610117049044-8794b5eb4bcc?q=80&w=800",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 border-border hover:border-islamic-gold transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fadeInScale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-islamic-burgundy/90 via-islamic-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2 font-playfair">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
