import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className=" bg-primary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="logo.svg"
              alt="logo"
              className="h-10 w-10 p-2 bg-zinc-800/70 rounded-full"
            />
            <Link to="/" className="text-2xl font-bold text-primary-foreground">
              Shop4You
            </Link>
          </div>
          <Link
            to="/cart"
            className="flex items-center gap-2 text-primary-foreground"
          >
            <ShoppingCart className="h-6 w-6" />
            <Badge variant="secondary">{itemCount}</Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}
