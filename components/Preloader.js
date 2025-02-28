import { useEffect, useState } from "react";

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[#735751] z-50">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-red-400"></div>
    </div>
  );
};

export default Preloader;
