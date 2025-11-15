import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    detail: "Kakinada, Andhra Pradesh",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 7386146338",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@sufimehendi.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon-Sat: Flexible Times",
  },
  {
    icon: IndianRupee,
    title: "Prices",
    detail: "In Person Deal",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    event: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received!",
      description: "Thank you for your interest. We'll contact you soon.",
    });
    setFormData({
      name: "",
      email: "",
      date: "",
      event: "",
      contact: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Contact & Booking
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-islamic-teal to-islamic-gold mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to adorn your hands with beautiful henna art? Get in touch with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-fadeInUp">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-border hover:border-islamic-gold transition-all duration-300 hover:shadow-lg group"
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-islamic-teal to-islamic-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 font-playfair">{item.title}</h3>
                      <p className="text-muted-foreground">{item.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Booking Form */}
          <Card className="border-2 border-islamic-gold/20 shadow-xl animate-fadeInUp">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-islamic-teal"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-islamic-teal"
                  />
                </div>
                <div>
                  <Input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-islamic-teal"
                  />
                </div>
                <div>
                  <Input
                    name="event"
                    placeholder="Event Name"
                    value={formData.event}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-islamic-teal"
                  />
                </div>
                <div>
                  <Input
                    name="contact"
                    type="tel"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-islamic-teal"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Special Requests"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="border-2 focus:border-islamic-teal"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-islamic-teal to-islamic-emerald hover:from-islamic-teal-dark hover:to-islamic-emerald text-white font-semibold py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
