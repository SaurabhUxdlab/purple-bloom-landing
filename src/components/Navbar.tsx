import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = ["Home", "About", "Articles", "Pricing", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md">
      
      <div className="w-full grid h-[72px] grid-cols-[auto_1fr_auto] items-center px-6 md:px-10 lg:px-16">
        
        {/* LOGO (LEFT EDGE) */}
        <a href="#" className="flex items-center">
          <img 
            src={logo}
            alt="The Transition Logo" 
            className="h-12 md:h-12 object-contain"
          />
        </a>

        {/* CENTER NAV */}
        <div className="hidden md:flex items-center justify-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href={l === "Home" ? "/" : `${l.toLowerCase()}`}
              className="font-ui text-[15px] lg:text-[16px] font-medium text-black/90 hover:text-black transition"
            >
              {l}
            </a>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <div className="hidden md:flex justify-end">
          <Button
            className="h-11 rounded-full bg-[#3D0642] px-6 text-[14px] font-medium text-white hover:bg-[#3D0642]/90 flex items-center gap-2"
          >
            Get the App <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* MOBILE MENU */}
        <button
          className="justify-self-end text-black md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#3D0642] border-t border-white/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l}
              href={l === "Home" ? "/" : `${l.toLowerCase()}`}
              className="block py-2 text-base font-medium text-white"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <Button className="w-full h-11 rounded-full bg-white text-[#3D0642] font-medium">
            Get the App
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;