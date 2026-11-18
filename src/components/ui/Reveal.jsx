import { useEffect, useRef, useState } from 'react';

export default function Reveal({ delay = 0, className = '', style, children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible ? 'true' : 'false'}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      className={`reveal ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
