"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  error?: string;
  isPassword?: boolean;
};

export default function InputField({
  label,
  id,
  type = "text",
  placeholder,
  className,
  error,
  isPassword = false,
  ...props
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const computedType = isPassword ? (showPassword ? "text" : "password") : type;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base leading-6 text-[#111827]">
        {label}
      </label>

      <div className="relative w-full">
        <input
          id={id}
          name={id}
          type={computedType}
          placeholder={placeholder}
          className={clsx(
            "h-[67px] w-full rounded-xl border border-[#8E8E93] px-[10px] py-[22px] text-sm text-[#111827] placeholder:text-[#8E8E93] lg:text-base",
            "transition-all focus:border-transparent focus:ring-2 focus:ring-[#633FBB] focus:outline-none",
            isPassword && "pr-12",
            error && "focus:[ring-red-500] border-[#FF383C]",
            className,
          )}
          {...props}
        />

        {/* toggle password */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-[10px] -translate-y-1/2 cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-100"
          >
            {showPassword ? (
              <Eye size={22} color="#111827" />
            ) : (
              <EyeOff size={22} color="#111827" />
            )}
          </button>
        )}
      </div>

      {error && <p className="text-sm text-[#FF383C]">{error}</p>}
    </div>
  );
}
