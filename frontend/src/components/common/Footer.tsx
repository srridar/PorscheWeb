
import { ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate= useNavigate();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-12">


        <div className="flex justify-center  pb-10">
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex cursor-pointer flex-col items-center gap-2"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
              <ArrowUp className="h-5 w-5  " />
            </span>

            <span className="text-xs  text-white/50 ">
              Scroll up
            </span>
          </button>
        </div>

   
        <div className=" py-8">
          <p className="mb-4 text-xs  text-white/40"> Current Region / Language </p>

          <div className="flex flex-wrap items-center gap-4">
            <img
              src="/images/flags/IndianFlag.png"
              alt="India"
              className="h-6 w-6 shrink-0 rounded-full object-cover"
            />

            <span className="text-sm text-white/80">  India / English </span>

            <button onClick={()=>navigate("/")} type="button" className="cursor-pointer text-sm text-white underline  hover:text-white/60">
              Change
            </button>
          </div>
        </div>


        <div className="flex flex-col gap-8 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">


          <div>
            <p className="mb-4 text-xs  text-white/40">
              Follow Porsche on
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://www.facebook.com/porsche"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/porsche"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/porsche-middle-east-&-africa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>

              <a
                href="https://www.pinterest.com/porsche/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaPinterestP className="h-4 w-4" />
              </a>

              <a
                href="https://x.com/Porsche"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

    
          <div>
         
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=de.porsche.one"
                target="_blank"
                aria-label="Download on Google Play"
              >
                <img
                  src="/images/flags/playStore.png"
                  alt="Google Play"
                  className="h-5 w-20"
                />
              </a>

              <a
                href="https://apps.apple.com/"
                target="_blank"
                aria-label="Download on App Store"
          
              >
                <img
                  src="/images/flags/apple_store.png"
                  alt="App Store"
                  className="h-5 w-20"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 pt-8">
          <div>
            <p className="max-w-3xl text-xs leading-6 text-white/40">
              © 2026 Porsche India - Škoda Auto Volkswagen India Private Limited - India.
            </p>
          </div>

          <div className="flex justify-center ">
            <img src="/images/flags/text-logo.png"  alt="Porsche" className="h-auto w-40 object-contain opacity-80 sm:w-48" />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

