import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Calendar, Home, Phone, FileText } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "booking", label: "Book Appointment", icon: Calendar },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm">IA</div>
            <div>
              <span className="text-lg text-gray-800">Sarah Mitchell</span>
              <p className="text-xs text-gray-500">Insurance Agent - BC</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => onPageChange(item.id)}
                className="flex items-center gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              (555) 123-4567
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsOpen(false);
                  }}
                  className="w-full justify-start gap-2"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              ))}
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}