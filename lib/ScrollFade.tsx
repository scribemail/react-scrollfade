import React, { useCallback, useEffect, useRef } from 'react';

const easeIn = (t: number, alpha: number): number => { return Math.pow(t, alpha) };

interface ScrollFadeProps { height?: number, intensity?: number };

const ScrollFade: React.FC<ScrollFadeProps> = ({ height = 64, intensity = 0 }) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const getMaskRef = useRef<(opacity: number) => string>(
        (opacity: number) => {
            return (`
                linear-gradient(180deg, black 0%, rgba(255, 255, 255, ${opacity}) ${(100 - intensity) - 1}%)
                    center bottom/100% ${height}px no-repeat,
                linear-gradient(180deg, black, black)
                    center top/100% calc(100% - ${height}px) no-repeat
            `)
        }
    );


    const onScroll = useCallback(() => {
        const scrollElement = rootRef.current?.parentElement;
        if (scrollElement !== null && scrollElement !== undefined) {
            const getMask = getMaskRef.current;
            const { offsetHeight: elementHeight, scrollHeight: elementWidth, scrollTop } = scrollElement;
            const opacity = easeIn(scrollTop / (elementHeight - elementWidth), 10);
            const mask = getMask(opacity);

            scrollElement.style.mask = mask;
            scrollElement.style.webkitMask = mask;
        }
    }, []);

    useEffect(() => {
        const scrollElement = rootRef.current?.parentElement;

        if (scrollElement !== null && scrollElement !== undefined) {
            const { offsetHeight, scrollHeight } = scrollElement;
            if (offsetHeight !== scrollHeight) {
                const mask = getMaskRef.current(0);
                scrollElement.style.mask = mask;
                scrollElement.style.webkitMask = mask;
            }

            scrollElement.addEventListener('scroll', onScroll);
            return () => { scrollElement.removeEventListener('scroll', onScroll) };
        }
    }, []);

    return <div className="scroll-fade" ref={rootRef} />;
};
export default ScrollFade;
