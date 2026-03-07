import { Sprout, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#084c2e] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-emerald-800/50 pb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="border-2 border-yellow-400 p-1 rounded-sm">
                <Sprout className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-3xl font-bold tracking-tight">GreenScape</span>
            </div>
            <p className="text-emerald-100/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-md flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-md flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-md flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Col */}
          <div>
            <h4 className="text-xl font-bold text-yellow-400 mb-6">Explore</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Homepage</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Address & Contact Col */}
          <div>
            <h4 className="text-xl font-bold text-yellow-400 mb-6">Address</h4>
            <p className="text-emerald-100/90 mb-8">
              KLLG st, No.99, Pku City, ID<br/>
              28289
            </p>
            
            <h4 className="text-xl font-bold text-yellow-400 mb-6">Contact</h4>
            <div className="space-y-2 text-emerald-100/90">
              <p><span className="font-semibold text-white">Phone :</span> 0761-8523-398</p>
              <p><span className="font-semibold text-white">Email :</span> hello@greenscape.com</p>
            </div>
          </div>

          {/* Working Hours Col */}
          <div>
            <h4 className="text-xl font-bold text-yellow-400 mb-6">Working Hours</h4>
            <ul className="space-y-4 text-emerald-100/90">
              <li className="flex flex-col gap-1">
                <span className="font-bold text-white">Monday – Friday</span>
                <span>07.00 – 20.00</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-white">Saturday</span>
                <span>07.00 – 15.00</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-white">Sunday</span>
                <span>07.00 – 14.00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-emerald-100/60 text-sm">
          Copyright © 2025 GreenScape. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
