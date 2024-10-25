import { useEffect, useState } from "react";

const useIsBottomScroll = () => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    setIsAtBottom(bottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { isAtBottom };
};

export default useIsBottomScroll;
