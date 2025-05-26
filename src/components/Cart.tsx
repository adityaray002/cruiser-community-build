
import { Button } from "@/components/ui/button";
import { X, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const [items, setItems] = useState([
    { id: 1, name: "Sister Rosetta", price: 32.00, quantity: 2 },
    { id: 2, name: "Hopkins Burger", price: 64.00, quantity: 2 },
    { id: 3, name: "Big Momma", price: 24.00, quantity: 2 }
  ]);
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-gray-900 p-4 md:p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-white">Cart</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 md:h-10 md:w-10">
            <X className="h-4 w-4 md:h-5 md:w-5 text-white" />
          </Button>
        </div>
        
        {items.length === 0 ? (
          <p className="text-gray-400 text-center py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-700 pb-4">
                  <div className="flex items-center space-x-3">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-white hover:text-red-400 h-6 w-6 md:h-8 md:w-8"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                    <div>
                      <p className="text-white font-medium text-sm md:text-base">{item.name}</p>
                      <p className="text-gray-400 text-xs md:text-sm">{item.quantity}X ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="w-12 h-8 md:w-16 md:h-12 bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-700 pt-4 mb-6">
              <div className="flex justify-between text-white">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full text-white border-gray-600 hover:bg-gray-800 h-12"
              >
                View Cart
              </Button>
              <Button className="w-full bg-green-400 hover:bg-green-500 text-black h-12">
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
