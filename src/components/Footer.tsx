import React from 'react';
import { ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-24 px-6 lg:px-24 bg-white text-slate-800 border-t border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-950 rounded-full"></div>
            <span className="text-xl font-bold tracking-tight">ADVERSADO</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Pioneering digital solutions with an uncompromising commitment to excellence and aesthetic precision.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer transition-colors">
                <Twitter size={16} className="text-slate-600" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer transition-colors">
                <Linkedin size={16} className="text-slate-600" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer transition-colors">
                <Instagram size={16} className="text-slate-600" />
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-sm mb-6 text-slate-900">Company</h3>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li className="hover:text-orange-600 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-orange-600 cursor-pointer transition-colors">About us</li>
            <li className="hover:text-orange-600 cursor-pointer transition-colors">Pricing</li>
            <li className="hover:text-orange-600 cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-orange-600 cursor-pointer transition-colors">Blog Details</li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-bold text-sm mb-6 text-slate-900">Product</h3>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li className="hover:text-orange-600 cursor-pointer transition-colors">Features</li>
            <li className="hover:text-orange-600 cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-orange-600 cursor-pointer transition-colors">How it works</li>
            <li className="hover:text-orange-600 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-sm mb-6 text-slate-900">Newsletter</h3>
          <p className="text-slate-500 text-sm mb-6">Get exclusive design insights and digital transformation updates.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-slate-50 border border-slate-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button className="absolute right-1 top-1 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
