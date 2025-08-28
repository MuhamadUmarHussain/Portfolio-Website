import React, { useRef, useEffect, useState } from "react";

export default function RevealOnScroll({ children, animation = "motion-preset-fade", threshold = 0.2 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // 👈 reset when leaving viewport
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? animation : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}
