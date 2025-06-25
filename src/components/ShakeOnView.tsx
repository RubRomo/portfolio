import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ShakeOnView = ({ children }: Props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isShake, setShake] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const element = entries[0];
        if (element.isIntersecting) {
          setShake(true);
        }
      },
      { threshold: 0.75 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isShake || !elementRef.current) return;

    const node = elementRef.current;
    const handleAnimationEnd = () => {
      setShake(false);
    };

    node.addEventListener("animationend", handleAnimationEnd);
    return () => node.removeEventListener("animationend", handleAnimationEnd);
  }, [isShake]);

  return (
    <div ref={elementRef} className={`${isShake ? "shake" : ""}`}>
      {children}
    </div>
  );
};

export default ShakeOnView;
