import { ProductCard } from "./ProductCard";
import candleImage from "@/assets/product-candle.jpg";
import serumImage from "@/assets/product-serum.jpg";
import toteImage from "@/assets/product-tote.jpg";
import diffuserImage from "@/assets/product-diffuser.jpg";
import soapImage from "@/assets/product-soap.jpg";
import utensilsImage from "@/assets/product-utensils.jpg";

const mockProducts = [
  {
    id: "1",
    name: "Serenity Soy Candle",
    price: 32,
    originalPrice: 42,
    image: candleImage,
    category: "Home Decor",
    shopifyId: "123456789" // This would be replaced with actual Shopify variant ID
  },
  {
    id: "2",
    name: "Glow Renewal Serum",
    price: 65,
    image: serumImage,
    category: "Skincare",
    shopifyId: "123456790"
  },
  {
    id: "3",
    name: "Everyday Tote Bag",
    price: 48,
    image: toteImage,
    category: "Accessories",
    shopifyId: "123456791"
  },
  {
    id: "4",
    name: "Zen Aromatherapy Diffuser",
    price: 89,
    image: diffuserImage,
    category: "Wellness",
    shopifyId: "123456792"
  },
  {
    id: "5",
    name: "Nourish Soap Collection",
    price: 28,
    image: soapImage,
    category: "Skincare",
    shopifyId: "123456793"
  },
  {
    id: "6",
    name: "Bamboo Utensil Set",
    price: 35,
    image: utensilsImage,
    category: "Home & Kitchen",
    shopifyId: "123456794"
  }
];

export const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully selected essentials that bring harmony to your daily routine. 
            Each product is chosen for its quality, sustainability, and ability to 
            enhance your well-being.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-medium text-lg underline decoration-2 underline-offset-4 transition-colors">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};