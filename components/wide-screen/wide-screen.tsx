import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  CarouselProvider,
  DotGroup,
  Slider,
  Slide,
  Image as ImageWithoutZoom,
  ImageWithZoom,
} from "pure-react-carousel";
import { useRefSize } from "../../utils/hooks";
import classes from "./wide-screen.module.scss";

const WideScreen: React.FC<{
  src: string | string[];
  carousel?: boolean;
  zoom?: boolean;
}> = ({ src, carousel, zoom }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const asset = useRef<any>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const { height } = useRefSize(asset);
  const [ratio, setRatio] = useState({ width: 0, height: 0 });
  const getPadding = useCallback((): number => {
    if (!wrapper?.current || typeof window === "undefined") return 0;
    const top = window
      .getComputedStyle(wrapper.current)
      .getPropertyValue("padding-top")
      .replace("px", "");
    const bottom = window
      .getComputedStyle(wrapper.current)
      .getPropertyValue("padding-bottom")
      .replace("px", "");
    return Number(top) + Number(bottom);
  }, [wrapper]);
  useEffect(() => {
    if (!carousel || typeof window === "undefined") return;
    const img = new Image();
    img.onload = () => setRatio(img);
    img.src = src[0];
  }, [src]);
  return (
    <div style={{ height: height + getPadding() }}>
      <div className={classes.wrapper} ref={wrapper}>
        {carousel && src instanceof Array ? (
          <div ref={asset} className={classes.asset}>
            <CarouselProvider
              naturalSlideWidth={ratio.width}
              naturalSlideHeight={ratio.height}
              totalSlides={src.length}
              interval={10000}
              isPlaying
              infinite
              lockOnWindowScroll
              hasMasterSpinner
            >
              <Slider>
                {src.map((file: string, index: number) => (
                  <Slide index={index} key={index}>
                    {zoom ? (
                      <ImageWithZoom src={file} />
                    ) : (
                      <ImageWithoutZoom src={file} hasMasterSpinner />
                    )}
                  </Slide>
                ))}
              </Slider>
              <DotGroup className={classes.dots} />
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
