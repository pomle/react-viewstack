import React, { useEffect, useRef, useState } from 'react';

interface StickyProps {
  children: React.ReactNode;
  delay?: number;
}

export default function Sticky({ children, delay = 1000 }: StickyProps) {
  const [mount, setMount] = useState(false);

  const content = useRef<React.ReactNode>(null);

  if (children) {
    content.current = children;
  }

  useEffect(() => {
    if (children) {
      setMount(true);
      return;
    }

    const timeout = setTimeout(() => {
      setMount(false);
      content.current = null;
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [children, delay]);

  return React.Fragment({ children: mount ? content.current : null });
}
