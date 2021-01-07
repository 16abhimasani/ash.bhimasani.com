import React, { useEffect } from "react";

const Tweet: React.FC<{ children: unknown }> = ({ children }) => {
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any)?.twttr.widgets?.load();
    } catch {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      s.setAttribute("async", "true");
      document.head.appendChild(s);
    }
  }, []);
  return (
    <blockquote className="twitter-tweet" data-theme="light">
      {children}
    </blockquote>
  );
};

export default Tweet;
