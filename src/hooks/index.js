import { useState, useEffect } from "react";

export const usePageWidth = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component renders
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return pageWidth;
};
