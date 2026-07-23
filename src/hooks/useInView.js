import { useEffect, useRef, useState } from "react";

// Observe un élément et renvoie `true` une fois qu'il est entré dans le
// viewport (au chargement s'il y est déjà, ou au scroll sinon). Ne se
// redéclenche pas ensuite : une fois visible, reste visible.
export default function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
