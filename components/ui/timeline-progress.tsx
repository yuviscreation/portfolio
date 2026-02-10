"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function TimelineProgress({ trackRef }: { trackRef: React.RefObject<HTMLElement>; projectCount?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function update() {
      if (trackRef?.current) {
        setHeight(trackRef.current.getBoundingClientRect().height || 0);
      }
    }

    update();

    // Use ResizeObserver when available to detect content/size changes (e.g., new boxes added)
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && trackRef?.current) {
      ro = new ResizeObserver(() => update());
      ro.observe(trackRef.current);
    } else {
      window.addEventListener("resize", update);
    }

    return () => {
      if (ro && trackRef?.current) ro.disconnect();
      else window.removeEventListener("resize", update);
    };
  }, [trackRef]);

  // Start the fill when the track enters the viewport and finish when it leaves.
  // This maps 0 to when the track's top hits the viewport bottom (visible),
  // and 1 to when the track's bottom hits the viewport top (scrolled past).
  // Guard target ref so motion doesn't warn when ref exists but isn't hydrated yet
  const scrollTarget = trackRef && trackRef.current ? trackRef : undefined;
  const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ["start end", "end start"] });
  // extend fill target slightly past the track end so the line doesn't cut off
  // reduced from 110% to 102% to shorten the visual extension
  const filledHeight = useTransform(scrollYProgress, [0, 1], [0, height * 1.02]);
  // Keep the fill visible after scroll completes (opacity stays 1 at progress 1)
  const opacity = useTransform(scrollYProgress, [0, 0.05, 1], [0.4, 1, 1]);

  return (
    <div ref={ref} className="relative h-full w-full flex items-center justify-center">
      {/* extend the container 10% beyond the bottom so the visual line continues past the last card */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex items-stretch justify-center"
        style={{ top: 0, height: `${Math.max(1, height * 1.1)}px` }}
      >
        {/* Background line (inactive) - make it 110% of measured track height */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[4px] bg-[#2ea6ff] opacity-20"
          style={{ height: `${Math.max(1, height * 1.02)}px` }}
        />
        {/* Animated filled line (active) - fills from top to bottom */}
        <motion.div
          style={{ height: filledHeight, opacity }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[4px] bg-[#2ea6ff]"
        />
      </div>
    </div>
  );
}
