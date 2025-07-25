import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lifestyle.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lovable lifestyle products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-foreground leading-tight">
            Feel Good.{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Live Lovable.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover our thoughtfully curated collection of eco-friendly home decor, 
            natural skincare, and wellness essentials designed to nurture your soul 
            and elevate your everyday moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};