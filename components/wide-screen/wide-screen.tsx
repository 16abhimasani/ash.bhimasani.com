import React, { useEffect, useRef, useState } from "react";
import { useRefSize } from "../../utils/hooks";
import classes from "./wide-screen.module.scss";

import {
  CarouselProvider,
  Slider,
  Slide,
  ImageWithZoom,
} from "pure-react-carousel";

const WideScreen: React.FC<{
  src: string | string[];
  carousel?: boolean;
}> = ({ src, carousel }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const asset = useRef<any>(null);
  const { height } = useRefSize(asset);
  const [ratio, setRatio] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (!carousel || typeof window === "undefined") return;
    const img = new Image();
    img.onload = () => setRatio(img);
    img.src = src[0];
  }, [src]);
  return (
    <div style={{ height: height }}>
      <div className={classes.wrapper}>
        {carousel && src instanceof Array ? (
          <div ref={asset} className={classes.asset}>
            <CarouselProvider
              naturalSlideWidth={ratio.width}
              naturalSlideHeight={ratio.height}
              totalSlides={src.length}
              isPlaying
              infinite
              lockOnWindowScroll
            >
              <Slider>
                {src.map((file: string, index: number) => (
                  <Slide index={index} key={index}>
                    <ImageWithZoom src={file} />
                  </Slide>
                ))}
              </Slider>
            </CarouselProvider>
          </div>
        ) : (
          <>
            {typeof src === "string" && (
              <>
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
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WideScreen;
