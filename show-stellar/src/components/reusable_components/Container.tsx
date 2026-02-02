import { ReactNode, ComponentPropsWithoutRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge tailwind classes safely
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  // Define semantic sizes instead of hardcoded numbers
  size?:
    | "narrow"
    | "narrow-large"
    | "mid-wide"
    | "wide"
    | "large-wide"
    | "default"
    | "full";
  // Option to remove default padding if needed
  clean?: boolean;
}

export default function Container({
  children,
  className,
  size = "default",
  clean = false,
  ...props // Capture all other div attributes (id, onMouseOver, etc.)
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-3xl", // ~768px
    "narrow-large": "max-w-5xl", // ~1024px
    "mid-wide": "max-w-6xl", // ~1152px
    wide: "max-w-7xl", // ~1280px
    "large-wide": "max-w-9xl", // ~1536px
    default: "max-w-[1920px]", // Custom max width
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full",
        !clean && "px-4 sm:px-6 lg:px-8", // Responsive padding
        sizeClasses[size],
        className, // User overrides
      )}
      {...props}>
      {children}
    </div>
  );
}
