import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import logo1 from "@/assets/logo1.png";

const links = ["Home", "About", "Articles", "Pricing", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-4 right-0 z-50 bg-transparent backdrop-blur-md">
      
      <div className="relative h-[72px] w-full">
        
        {/* LEFT LOGO (exact corner) */}
        <div className="absolute left-6 md:left-10 lg:left-16 top-1/2 -translate-y-1/2">
          <img
            src={logo1}
            alt="logo"
            className="h-12 md:h-12 object-contain"
          />
        </div>

        {/* CENTER LINKS */}
        <div className="hidden md:flex justify-center items-center h-full gap-10">
          {links.map((l) => (
            <a
              key={l}
              href={l === "Home" ? "/" : `${l.toLowerCase()}`}
              className="text-[15px] lg:text-[16px] font-medium text-white/90 hover:text-white transition"
            >
              {l}
            </a>
          ))}
        </div>

        {/* RIGHT BUTTON (exact corner) */}
        <div className="hidden md:block absolute right-6 md:right-10 lg:right-16 top-1/2 -translate-y-1/2">
          <Button className="h-11 rounded-full bg-[#3D0642] px-6 text-[14px] font-medium text-white flex items-center gap-2 hover:bg-[#3D0642]/90">
            Get the App <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-white"
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