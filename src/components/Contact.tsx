import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Config
  const EMAILJS_SERVICE_ID = "service_oicadhq";
  const EMAILJS_TEMPLATE_ID = "template_ufcorbw";
  const EMAILJS_PUBLIC_KEY = "RO5Vxv8h4n-R9GnDE";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          event_date: formData.date,
          event_name: formData.event,
          contact_number: formData.contact,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Booking Request Sent! ✓",
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
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 islamic-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Contact & Booking
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-islamic-teal to-islamic-gold mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to adorn your hands with beautiful henna art? Get in touch with
            us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fadeInUp">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-border hover:border-islamic-gold transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group bg-gradient-to-br from-card to-muted/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-islamic-teal to-islamic-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-islamic-gold to-islamic-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon className="w-8 h-8 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 font-playfair group-hover:text-islamic-teal transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Form */}
          <Card className="border-2 border-islamic-gold/30 shadow-2xl animate-fadeInUp bg-gradient-to-br from-card to-muted/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-islamic-gold h-12 px-4 rounded-xl shadow-sm"
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-islamic-gold h-12 px-4 rounded-xl shadow-sm"
                />

                <Input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-islamic-gold h-12 px-4 rounded-xl shadow-sm"
                />

                <Input
                  name="event"
                  placeholder="Event Name"
                  value={formData.event}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-islamic-gold h-12 px-4 rounded-xl shadow-sm"
                />

                <Input
                  name="contact"
                  type="tel"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-islamic-gold h-12 px-4 rounded-xl shadow-sm"
                />

                <Textarea
                  name="message"
                  placeholder="Special Requests"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="border-2 focus:border-islamic-gold px-4 py-3 rounded-xl shadow-sm resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-islamic-teal to-islamic-gold text-white font-semibold py-7 rounded-full shadow-xl"
                >
                  {isSubmitting ? "Sending..." : "Book Now"}
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
