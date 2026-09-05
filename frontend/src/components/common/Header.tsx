import React from "react";
import { Menu, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-50 w-full">
      <div className="relative flex h-20 items-center justify-between px-6 sm:px-10 lg:px-16">

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5"
          aria-label="Open menu"
        >
          <Menu size={26} strokeWidth={1.8} />
        </button>


        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="/images/flags/porscheLogo.png"
            alt="Porsche"
            className="h-16 w-auto object-contain"
          />
        </div>


        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5"
          aria-label="Select country or region"
        >
          <Globe size={23} strokeWidth={1.8} />
        </button>

      </div>
    </header>
  );
};

export default Header;