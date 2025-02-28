import {React, useState, useEffect } from "react";

import Button from '@/components/Button';


const Navbar = () => {
  const [showCTA, setShowCTA] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const footerSection = document.getElementById("footer");

      if (heroSection && footerSection) {
        const heroHeight = heroSection.offsetHeight; // Hero section height
        const footerTop = footerSection.offsetTop; // Footer section top position
        const scrollY = window.scrollY + window.innerHeight; // Current scroll position

        // Show CTA when scrolling past hero, hide before footer
        if (window.scrollY > heroHeight && scrollY < footerTop) {
          setShowCTA(true);
        } else {
          setShowCTA(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <> 
  <div className='flex justify-between'>
  <div className='p-7 text-red-300 text-2xl font-semibold font-[family-name:var(--font-merriweather)]'>Livewell</div>
  {showCTA && (
    <div className=' text-end pt-6 pe-2 text-black'>    
     <Button buttonId="button3" />
      </div> 
  )}
      </div>
    </>
  )
}

export default Navbar;
