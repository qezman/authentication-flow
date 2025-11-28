"use client";

import React, { useRef } from "react";
import clsx from "clsx";

interface OTPInputProps {
  length: number;
  value: string;
  onChange: (value: string) => void;
}

export default function OTPInput({ length, value, onChange }: OTPInputProps) {
  const refs = useRef<HTMLInputElement[]>([]);

  // create a full array
  const chars = value.padEnd(length, "").split("");

  const handleChange = (index: number, digit: string) => {
    if (!/^\d?$/.test(digit)) return; // allow digits only
    const base = value.padEnd(length, "");
    const newValue = base.slice(0, index) + digit + base.slice(index + 1);
    onChange(newValue);

    if (digit && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const base = value.padEnd(length, "");

    if (e.key === "Backspace") {
      // if current cell has a digit, clear it and stay
      if (chars[index]) {
        const newValue = base.slice(0, index) + "" + base.slice(index + 1);
        onChange(newValue);
        return;
      }
      // else, move left and delete previous
      if (index > 0) {
        const prevIndex = index - 1;
        const clearedPrev = base.slice(0, prevIndex) + "" + base.slice(prevIndex + 1);
        onChange(clearedPrev);
        refs.current[prevIndex]?.focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      refs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);

    if (!pasted) return;

    const newChars = pasted.split("").concat(Array(length).fill("")).slice(0, length);

    onChange(newChars.join(""));

    const lastIndex = pasted.length - 1;
    refs.current[lastIndex]?.focus();
  };

  return (
    <div className="flex w-full justify-center gap-2 sm:gap-2 md:gap-3">
      {Array.from({ length }).map((_, index) => {
        const character = chars[index];

        return (
          <input
            key={index}
            ref={(el) => {
              if (el) refs.current[index] = el;
            }}
            type="tel"
            value={character}
            autoFocus={index === 0}
            maxLength={1}
            onChange={(e) => {
              const digit = e.target.value.replace(/\D/g, "").slice(-1);
              handleChange(index, digit);
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            inputMode="numeric"
            autoComplete="one-time-code"
            className={clsx(
              "h-10 w-10 rounded-xl border text-center text-xl font-semibold text-[#111827] sm:h-12 sm:w-12 sm:text-xl md:h-14 md:w-14 lg:h-[67px] lg:w-[67px]",
              character ? "border-[#633FBB]" : "border-[#8E8E93]",
              "focus:ring-2 focus:ring-[#633FBB] focus:outline-none",
            )}
          />
        );
      })}
    </div>
  );
}
