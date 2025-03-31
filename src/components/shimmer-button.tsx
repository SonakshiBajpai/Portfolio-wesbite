import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const ShimmerButton = ({
  children,
  onClick,
  variant = "default",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "golden";
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-2xl mx-auto inline-flex h-12 animate-shimmer items-center justify-center rounded-md px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "default"
          ? "border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-400 focus:ring-slate-400 focus:ring-offset-slate-50"
          : "border border-yellow-900 bg-[linear-gradient(110deg,#42331a,45%,#b6944a,55%,#42331a)] bg-[length:200%_100%] text-yellow-100 focus:ring-yellow-400 focus:ring-offset-yellow-50"
      )}
    >
      {children}
    </button>
  );
};

export default ShimmerButton;
