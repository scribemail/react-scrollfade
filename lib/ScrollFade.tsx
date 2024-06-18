import React, { useCallback, useEffect, useRef } from 'react';

const easeIn = (t: number, alpha: number): number => Math.pow(t, alpha);

interface ScrollFadeProps {
  height?: number;
  intensity?: number;
}

const ScrollFade: React.FC<ScrollFadeProps> = ({ height = 64, intensity = 0 }) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const getMask = useCallback(
    (opacity: number): string => {
      return `
        linear-gradient(180deg, black 0%, rgba(255, 255, 255, ${opacity}) ${(100 - intensity) - 1}%)
          center bottom/100% ${height}px no-repeat,
        linear-gradient(180deg, black, black)
          center top/100% calc(100% - ${height}px) no-repeat
      `;
    },
    [height, intensity]
  );

  const applyMask = useCallback(() => {
    const scrollElement = rootRef.current?.parentElement;
    if (scrollElement) {
      const { offsetHeight, scrollHeight, scrollTop } = scrollElement;
      const opacity = easeIn(scrollTop / (scrollHeight - offsetHeight), 10);
      const mask = getMask(opacity);
      scrollElement.style.mask = mask;
      scrollElement.style.webkitMask = mask;
    }
  }, [getMask]);

  useEffect(() => {
    const scrollElement = rootRef.current?.parentElement;

    if (scrollElement) {
      const { offsetHeight, scrollHeight } = scrollElement;
      if (offsetHeight !== scrollHeight) {
        const initialMask = getMask(0);
        scrollElement.style.mask = initialMask;
        scrollElement.style.webkitMask = initialMask;
      }

      const onScroll = () => {
        applyMask();
      };

      const resizeObserver = new ResizeObserver(() => {
        applyMask();
      });

      scrollElement.addEventListener('scroll', onScroll);
      resizeObserver.observe(scrollElement);

      return () => {
        scrollElement.removeEventListener('scroll', onScroll);
        resizeObserver.disconnect();
      };
    }
  }, [applyMask, getMask]);

  return <div className="scroll-fade" ref={rootRef} />;
};

export default ScrollFade;
