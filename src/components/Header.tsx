import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Heart, User } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="text-2xl font-light text-foreground">Lovable</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#products" className="text-foreground hover:text-primary transition-colors">
            Products
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-secondary">
            <User className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-secondary">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-secondary relative">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full text-xs text-primary-foreground flex items-center justify-center text-[10px]">
              0
            </span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#home"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#about"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <Button variant="ghost" size="icon">
                <User className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full text-xs text-primary-foreground flex items-center justify-center text-[10px]">
                  0
                </span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};