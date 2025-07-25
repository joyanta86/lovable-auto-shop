import { Leaf, Truck, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainably sourced materials and eco-conscious packaging for a better planet."
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $50. Your wellness essentials delivered quickly."
  },
  {
    icon: Star,
    title: "5-Star Support",
    description: "Dedicated customer care team ready to help you on your wellness journey."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Why Choose Lovable?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing products that not only look beautiful 
            but also support your values and lifestyle choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-soft hover:shadow-card transition-shadow duration-300 bg-gradient-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};