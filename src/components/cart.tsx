import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

export function Cart() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const { toast } = useToast();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id: number, quantity: string) => {
    const newQuantity = parseInt(quantity, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      toast({
        title: "Invalid quantity",
        description: "Please enter a valid number greater than 0.",
        variant: "destructive",
      });
      return;
    }
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  if (items.length === 0) {
    return <div className="text-center">Your cart is empty.</div>;
  }

  return (
    <div className="md:max-w-full max-w-[350px]">
      <h2 className="text-2xl p-4 font-bold mb-4">Your Cart</h2>
      <div className="max-w-screen-md">
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    min="1"
                    className="w-20"
                  />
                </TableCell>
                <TableCell>
                  ${(item.price * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Button onClick={handleClearCart} className="mt-2" variant="outline">
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
