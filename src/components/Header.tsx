import { Phone, ChevronDown, Sprout } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="border-2 border-yellow-400 p-1 rounded-sm">
            <Sprout className="w-6 h-6 text-yellow-400" />
          </div>
          <span className="text-2xl font-bold tracking-tight">GreenScape</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#" className="hover:text-yellow-400 transition-colors">Homepage</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">About Us</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
            Services <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
            Pages <ChevronDown className="w-4 h-4" />
          </div>
          <a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 p-3 rounded-full text-emerald-900">
            <Phone className="w-5 h-5 fill-current" />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-medium">Call Us Anytime</div>
            <div className="font-bold text-lg">0761-8523-398</div>
          </div>
        </div>
      </div>
    </header>
  );
}
