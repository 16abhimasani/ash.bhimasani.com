import React, { useEffect, useRef } from "react";
import { ThemeContext } from "../../pages/_app";

const Tweet: React.FC<{ src: string }> = ({ src }) => {
  const tweet = useRef(null);
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any)?.twttr.widgets?.load(tweet?.current);
    } catch {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      s.setAttribute("async", "true");
      document.head.appendChild(s);
    }
  }, []);
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <blockquote
          className="twitter-tweet"
          data-theme={theme.dark ? "dark" : "light"}
          ref={tweet}
        >
          <a href={src}></a>
        </blockquote>
      )}
    </ThemeContext.Consumer>
  );
};

export default Tweet;
