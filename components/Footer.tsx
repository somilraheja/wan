import React from 'react';
import { Plane, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Plane className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold">Wanderlust</span>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              We leverage cutting-edge AI to craft personalized travel experiences that create memories for a lifetime. Explore the world with confidence and style.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tours</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-accent hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-accent hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-accent hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-accent hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Wanderlust Travels. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;