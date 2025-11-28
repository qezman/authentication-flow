"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "outline";
};

export default function Button({ label, variant = "primary", className, ...props }: ButtonProps) {
  const baseStyles =
    "w-full rounded-lg px-[10px] py-5 text-base font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    // primary: "bg-[#633FBB] text-white hover:bg-[#5234a3] active:bg-[#472d8f] disabled:bg-[#a48ad8]",
    primary:
      "w-full py-5 px-[10px] bg-[#633FBB] hover:bg-[#5234a3] active:bg-[#472d8f] disabled:bg-[#a48ad8] transition-all rounded-lg text-white font-semibold text-base hover:shadow-lg hover:scale-105 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-800 disabled:hover:shadow-none disabled:hover:scale-100",
    secondary: "bg-[#2563EB] text-white hover:bg-[#5234a3] active:bg-gray-400 disabled:bg-gray-100",
    outline:
      "flex-1 py-5 px-[10px] border border-[#8E8E93] hover:bg-gray-50 active:bg-gray-100 transition-colors rounded-lg text-[#111827] font-semibold text-base",
    danger:
      "flex-1 py-5 px-[10px] bg-[#FF383C] hover:bg-[#e6333d] active:bg-[#cc2e32] transition-colors rounded-lg text-white font-semibold text-base text-center",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {label}
    </button>
  );
}
