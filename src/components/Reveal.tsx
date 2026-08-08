import type { ReactNode, ElementType } from "react";
import { useInView } from "../hooks/useInView";

type Direction = "up" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  direction?: Direction;
  className?: string;
  duration?: number;
}

const directionOffset: Record<Direction, string> = {
  up: "translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
};

const Reveal = ({
  children,
  as: Tag = "div",
  delay = 0,
  direction = "up",
  className = "",
  duration = 700,
}: RevealProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out will-change-transform ${
        isInView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionOffset[direction]}`
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isInView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
