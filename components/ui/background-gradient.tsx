import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[6px] group", containerClassName)}>
      {/* Rim gradient border - uses the container padding as border width. The child renders above and masks the center. */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-3xl z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(80,120,255,1) 0%, rgba(150,90,255,1) 40%, rgba(140,110,255,1) 70%)",
          boxShadow:
            "0 20px 60px rgba(80,120,255,0.18), 0 40px 120px rgba(150,90,255,0.14), 0 80px 200px rgba(140,110,255,0.10)",
          filter: "blur(18px)",
          backgroundSize: animate ? "250% 250%" : undefined,
        }}
      />

      <div className={cn("relative z-10 bg-transparent", className)}>{children}</div>
    </div>
  );
};
