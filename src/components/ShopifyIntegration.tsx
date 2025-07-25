import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Package, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ShopifyIntegration = () => {
  return (
    <Card className="max-w-4xl mx-auto mb-8 border-primary/20 bg-gradient-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Settings className="w-5 h-5" />
          Shopify Store Integration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">Connected Store:</h3>
          <p className="text-muted-foreground mb-3">
            <strong>fwcsej-se.myshopify.com</strong>
          </p>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://fwcsej-se.myshopify.com', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Store
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://admin.shopify.com/store/fwcsej-se', '_blank')}
            >
              <Settings className="w-4 h-4 mr-2" />
              Admin Panel
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-foreground">Next Steps to Complete Integration:</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <Package className="w-4 h-4 mt-0.5 text-primary" />
              <span>
                <strong>Add Products:</strong> Create the 6 featured products in your Shopify admin using the generated images and descriptions
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Settings className="w-4 h-4 mt-0.5 text-primary" />
              <span>
                <strong>Get Variant IDs:</strong> Copy the variant IDs from each product in Shopify and replace the empty shopifyId values in the code
              </span>
            </div>
            <div className="flex items-start gap-2">
              <ExternalLink className="w-4 h-4 mt-0.5 text-primary" />
              <span>
                <strong>Test Checkout:</strong> Once variant IDs are added, the "Add to Cart" buttons will redirect to your Shopify checkout
              </span>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-3 rounded-lg">
          <p className="text-sm text-primary-foreground/80">
            <strong>Pro Tip:</strong> You can find variant IDs in your Shopify admin under Products → [Product Name] → Variants section.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};