"use client";

import React, { useEffect, useState, useActionState } from "react";
import Link from "next/link";
import InputField from "../ui/Input";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { requestResetAction } from "@/app/forgot-password/action";
import RHSLogo from "../dashboard/RHSLogo";
import ErrorText from "../ui/ErrorText";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const [state, formAction] = useActionState(requestResetAction, {
    success: false,
    error: null as string | null,
    otp: undefined as string | undefined,
  });

  useEffect(() => {
    if (state.success) {
      const queryParam = state?.otp ? `?otp=${state.otp}` : "";
      router.push(`/verify-code${queryParam}`);
    }
  }, [state.success, state.otp, router]);

  return (
    <div className="flex h-dvh w-full items-center justify-center overflow-hidden bg-[rgba(99,63,187,0.10)] p-4 md:p-16 lg:h-screen">
      <div className="flex w-full max-w-[1312px] flex-col overflow-hidden rounded-3xl bg-white lg:flex-row">
        {/* LHS - Forgot Password Form */}
        <div className="flex w-full flex-col bg-[#F4F5F9] px-6 py-12 sm:px-12 md:px-20 md:py-6 lg:w-1/2 lg:px-[106px]">
          <div className="mb-12 lg:mb-20">
            <h1 className="text-2xl font-bold text-black">Auth-flow</h1>
          </div>

          <form
            action={formAction}
            className="mx-auto flex w-full max-w-[442px] flex-col items-center gap-12 md:gap-[54px]"
          >
            {/* Content */}
            <div className="flex w-full flex-col gap-8">
              {/* Title & Input */}
              <div className="flex w-full flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <h2 className="text-2xl font-bold text-[#111827]">Forgot Password</h2>
                  <p className="text-base leading-6 text-[#111827]">
                    Enter your email to receive a reset code.
                  </p>
                </div>

                {/* Input & Label */}
                <div className="flex flex-col gap-7">
                  {/* Email Field */}
                  <InputField
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {state.error && <ErrorText message={state.error} />}
              {state?.otp && (
                <p className="text-center text-sm text-[#6B7280]">
                  Gen OTP: <span className="font-mono">{state.otp}</span>
                </p>
              )}

              {/* Button & Back Link */}
              <div className="flex w-full flex-col gap-6">
                <Button type="submit" variant="primary" label="Send Reset Code" />

                {/* Go back to login */}
                <Link
                  href="/"
                  className="group flex items-center justify-center gap-[10px] text-[#633FBB] transition-colors hover:text-[#5234a3]"
                >
                  <ArrowRight className="rotate-180" />
                  <span className="text-base font-semibold">Go back to login</span>
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* RHS - LOGO */}
        <RHSLogo />
      </div>
    </div>
  );
}
