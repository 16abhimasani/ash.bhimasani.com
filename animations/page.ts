// Content stays visible on first paint. Hiding it for an entrance fade
// delays the largest element and shifts nothing useful.
export const fadeInPage = {
  initial: false as const,
  animate: { opacity: 1 },
  exit: { opacity: 1 },
};
