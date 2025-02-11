import { useEffect, useState, useRef } from "react";

interface CounterProps {
  value: number;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = value / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(counter);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-blue-600">
      {count}
    </div>
  );
};

export default AnimatedCounter;
