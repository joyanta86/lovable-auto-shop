import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock newsletter signup - replace with actual implementation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the Lovable family! 🌿",
      description: "Check your email for your 10% off coupon code.",
    });

    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-card bg-gradient-hero">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-primary-foreground mb-6">
              Join the Lovable Family
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Be the first to know about new products, wellness tips, and exclusive offers. 
              Plus, get 10% off your first order when you subscribe!
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-background/90 border-0 text-foreground placeholder:text-muted-foreground"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-background text-foreground hover:bg-background/90 px-8"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </form>
            
            <p className="text-sm text-primary-foreground/70 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};