import { MotionGlobalConfig } from "framer-motion";

// ponytail: instant, not a custom tween. Upgrade only if a demo must keep a
// reduced path that still explains state.
if (
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  MotionGlobalConfig.skipAnimations = true;
}
