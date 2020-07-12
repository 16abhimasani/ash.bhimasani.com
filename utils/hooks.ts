import { useEffect, useState, useLayoutEffect, useCallback } from "react";
import { ResizeObserver as Ponyfill } from "@juggle/resize-observer";

// gets the current size of browser window
export function useWindowSize(): { width: number; height: number } {
  const getSize = () => {
    return {
      width: window?.innerWidth || 0,
      height: window?.innerHeight || 0,
    };
  };
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    if (!isClient) return;
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// gets the size and relative positioning of a Ref passed ing
export function useRefSize(
  ref: React.RefObject<HTMLElement>
): {
  width: number;
  height: number;
  left: number;
  top: number;
  parent: Element | null;
} {
  const getSize = (el: HTMLElement | null) => {
    return {
      width: el?.offsetWidth || 0,
      height: el?.offsetHeight || 0,
      left: el?.offsetLeft || 0,
      top: el?.offsetTop || 0,
      parent: el?.offsetParent || null,
    };
  };
  const isClient = typeof window === "object";
  const [RefSize, setRefSize] = useState(getSize(ref ? ref.current : null));
  const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;

  const handleResize = useCallback(() => {
    if (ref.current) {
      setRefSize(getSize(ref.current));
    }
  }, [ref]);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;
    if (!isClient) return;
    handleResize();
    const ResizeObserver = window?.ResizeObserver || Ponyfill;
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [ref.current]);

  return RefSize;
}
