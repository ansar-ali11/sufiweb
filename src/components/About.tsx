import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Users, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Passionate Artists",
    description: "Trained in traditional Islamic art and modern techniques",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Using only the finest natural henna ingredients",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Custom designs tailored to your preferences",
  },
  {
    icon: Award,
    title: "Years of Excellence",
    description: "Trusted by brides and families across the region",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-islamic-cream via-background to-islamic-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-islamic-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-islamic-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            About SufiMehendi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-islamic-teal to-islamic-gold mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16 animate-fadeInUp">
          <Card className="border-2 border-islamic-gold/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed mb-6">
                SufiMehendi was born out of a deep love for the ancient art of henna, 
                blending traditional Islamic geometric patterns with contemporary designs. 
                Our journey began with a simple passion to adorn hands with beautiful patterns 
                that tell stories of faith, culture, and celebration.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Today, we specialize in creating elegant, custom mehendi designs for girls 
                and women of all ages. Whether it's your wedding day, a festive celebration, 
                or just a special occasion, we believe your story deserves to be celebrated 
                with artistry, joy, and the timeless grace of Islamic Mehendi art.
              </p>
              <p className="text-lg leading-relaxed">
                Our artists are trained in various styles from traditional Islamic and Arabic 
                patterns to modern fusion designs, ensuring that each creation is as unique 
                as the person wearing it.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 border-border hover:border-islamic-teal transition-all duration-300 hover:shadow-xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-islamic-teal to-islamic-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-playfair">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
