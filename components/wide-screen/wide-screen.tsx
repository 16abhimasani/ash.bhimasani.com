import React, { useRef } from "react";
import { useRefSize } from "../../utils/hooks";
import classes from "./wide-screen.module.scss";

const WideScreen: React.FC<{
  src: string;
}> = ({ src }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const asset = useRef<any>(null);
  const { height } = useRefSize(asset);
  return (
    <div style={{ height: height }}>
      <div className={classes.wrapper}>
        {src.includes("mp4") ? (
          <video
            ref={asset}
            className={classes.asset}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img ref={asset} className={classes.asset} src={src} />
        )}
      </div>
    </div>
  );
};

export default WideScreen;
