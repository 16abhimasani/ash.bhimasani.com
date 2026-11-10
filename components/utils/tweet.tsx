import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../pages/_app";

const Tweet: React.FC<{ src: string }> = ({ src }) => {
  const tweet = useRef(null);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    const node = tweet.current as HTMLElement | null;
    if (node) {
      node.setAttribute(
        "data-theme",
        document.documentElement.classList.contains("dark") ? "dark" : "light",
      );
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any)?.twttr.widgets?.load(tweet?.current);
    } catch {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      s.setAttribute("async", "true");
      document.head.appendChild(s);
    }
  }, [theme.dark]);
  return (
    <blockquote className="twitter-tweet" data-theme="light" ref={tweet}>
      <a href={src}></a>
    </blockquote>
  );
};

export default Tweet;
