import { ResizeObserver as Ponyfill } from "@juggle/resize-observer";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

// gets the current size of browser window
export const useWindowSize = (): { width: number; height: number } => {
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
};

// gets the size and relative positioning of a Ref passed ing
interface RefSize {
  width: number;
  height: number;
  left: number;
  top: number;
  parent: Element | null;
}
export const useRefSize = (ref: React.RefObject<HTMLElement>): RefSize => {
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
};

export const useLocalStorage = (
  key: string,
  initialValue: unknown,
): [storedValue: unknown, setValue: (value: unknown) => void] => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "object") {
      // Get from local storage by key
      const item = window?.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } else {
      // If error also return initialValue
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: unknown): void => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window?.localStorage?.setItem(key, JSON.stringify(valueToStore));
    } catch (_e) {
      // A more advanced implementation would handle the error case
    }
  };

  return [storedValue, setValue];
};
