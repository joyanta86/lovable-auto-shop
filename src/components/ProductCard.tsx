import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  shopifyId?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    // For now, we'll just show a success message
    // When Shopify is connected, this will redirect to Shopify checkout
    if (product.shopifyId) {
      // Shopify permalink format: https://store.myshopify.com/cart/{variant_id}:1
      window.open(`https://your-store.myshopify.com/cart/${product.shopifyId}:1`, '_blank');
    } else {
      // Temporary mock behavior
      console.log(`Added ${product.name} to cart`);
    }
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-xl transition-all duration-300 bg-gradient-card">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background transition-colors ${
            isWishlisted ? 'text-destructive' : 'text-muted-foreground'
          }`}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
            Sale
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="mb-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};