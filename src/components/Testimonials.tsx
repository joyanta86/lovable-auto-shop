import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "Lovable has completely transformed my self-care routine. The quality is exceptional and I love knowing that my purchases support sustainable practices.",
    product: "Glow Renewal Serum"
  },
  {
    name: "Marcus Johnson",
    location: "Austin, TX",
    rating: 5,
    text: "The aromatherapy diffuser has made such a difference in creating a peaceful atmosphere at home. Beautiful design and amazing customer service!",
    product: "Zen Aromatherapy Diffuser"
  },
  {
    name: "Emma Rodriguez",
    location: "Portland, OR",
    rating: 5,
    text: "I'm obsessed with the Serenity Soy Candle! It burns evenly, smells incredible, and the packaging is so elegant. Will definitely be ordering more.",
    product: "Serenity Soy Candle"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real people who've made Lovable part of their daily wellness routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-xl transition-shadow duration-300 bg-gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    Verified purchase: {testimonial.product}
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