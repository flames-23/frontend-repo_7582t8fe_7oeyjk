import { useState } from 'react';
import { Lock, Menu, X } from 'lucide-react';

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-emerald-500/10 border border-emerald-400/20">
              <Lock className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="font-semibold text-white tracking-tight">CipherCloud</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#docs">Docs</NavLink>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 transition-colors">
              Get Started
            </a>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <div className="grid gap-2">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#docs">Docs</NavLink>
            </div>
            <a href="#get-started" className="block w-full text-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 transition-colors">
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
