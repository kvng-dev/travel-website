"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="fixed bottom-4 animate-pulse right-4
  "
    >
      {isVisible && (
        <button
          onClick={ScrollToTop}
          className="bg-rose-700 text-white rounded-full w-12 h-12 flex justify-center items-center focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};
export default ScrollToTop;
