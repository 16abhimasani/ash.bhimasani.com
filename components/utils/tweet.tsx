import React, { useEffect, useRef } from "react";

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
    <blockquote className="twitter-tweet" data-theme="light" ref={tweet}>
      <a href={src}></a>
    </blockquote>
  );
};

export default Tweet;
