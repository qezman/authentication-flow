"use client";

import clsx from "clsx";

export default function ErrorText({
  message,
  center = true,
  size = "sm",
  className,
}: {
  message: React.ReactNode;
  center?: boolean;
  size?: "xs" | "sm";
  className?: string;
}) {
  return (
    <p
      role="alert"
      className={clsx(
        center && "text-center",
        size === "sm" ? "text-sm" : "text-xs",
        "pt-3 text-[#FF383C]",
        className,
      )}
    >
      {message}
    </p>
  );
}
