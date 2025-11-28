"use client";

import { useEffect, useState, useActionState } from "react";
import OTPInput from "../OTPInput";
import Button from "../ui/Button";
import ErrorText from "../ui/ErrorText";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyOtpAction } from "@/app/verify-code/action";
import { useResend } from "@/hooks/useResend";
import { resendWrapper } from "@/app/verify-code/resendWrapper";

export default function VerifyCode() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [otp, setOtp] = useState("");

  const RESEND_COOLDOWN = 5;
  const { cooldown, startCooldown } = useResend(RESEND_COOLDOWN);

  const [state, formAction] = useActionState(verifyOtpAction, {
    success: false,
    error: null,
    generatedOtp: null,
  });

  const [resendState, resendAction] = useActionState(resendWrapper, {
    success: false,
    error: null,
    otp: undefined as string | undefined,
  });

  // take the most recent OTP (after resend). fall back to initial OTP from query param
  const devOtp = resendState.otp ?? searchParams.get("otp");
  const [copied, setCopied] = useState(false);
  async function copyDevOtp() {
    if (!devOtp) return;
    try {
      await navigator.clipboard.writeText(devOtp);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  useEffect(() => {
    if (state.success) {
      router.push("/dashboard");
    }
  }, [state.success, router]);

  useEffect(() => {
    if (resendState.success) {
      startCooldown();
    }
  }, [resendState.success, startCooldown]);

  // ensure the latest OTP is reflected in the URL for visibility in production
  useEffect(() => {
    if (resendState.otp) {
      // update the search param to carry the newest OTP
      router.replace(`/verify-code?otp=${resendState.otp}`);
    }
  }, [resendState.otp, router]);

  return (
    <div className="flex h-dvh w-full items-center justify-center overflow-hidden bg-[rgba(99,63,187,0.10)] p-4 md:p-16 lg:h-screen">
      <div className="lg:h-dhv flex h-screen w-full max-w-[686px] flex-col rounded-3xl bg-white px-6 py-12 sm:px-12 md:px-20 md:py-16 lg:px-[122px] lg:py-[60px]">
        <div className="mb-12 lg:mb-[68px]">
          <h1 className="text-2xl font-bold text-black">Auth-flow</h1>
        </div>

        <div className="mx-auto flex w-full max-w-[442px] flex-col items-center gap-12 md:gap-[54px]">
          {/* Content */}
          <form action={formAction} className="flex w-full flex-col gap-8">
            {/* Title & Input */}
            <div className="flex w-full flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="text-2xl font-bold text-[#111827]">Verification Code</h2>
                <p className="text-base leading-6 text-[#4B5563]">
                  Enter the 6-digit code sent to your email.
                </p>
              </div>

              {/* OTP Input */}
              <div className="w-full">
                <OTPInput length={6} value={otp} onChange={setOtp} />

                {/* hidden input*/}
                <input type="hidden" name="otp" value={otp} />

                {/* dev-only display of the current OTP (initial or latest resend) */}
                {devOtp && (
                  <div className="flex items-center justify-center gap-2 pt-3 text-center text-xs text-[#6B7280]">
                    <span>
                      Dev OTP: <span className="font-mono">{devOtp}</span>
                    </span>
                    <button
                      type="button"
                      onClick={copyDevOtp}
                      className="rounded border border-[#D1D1D6] px-2 py-1 text-[11px] font-semibold text-[#111827] hover:bg-gray-50"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                )}

                {state.error && <ErrorText message={state.error} />}
              </div>
            </div>

            {/* Button & Resend Link */}
            <div className="flex w-full flex-col gap-6">
              {/* Verify Code Button */}
              <Button
                type="submit"
                variant="primary"
                label="Verify Code"
                disabled={!/^\d{6}$/.test(otp)}
              />
            </div>
          </form>

          <form action={resendAction}>
            {/* Resend Code Link */}
            <button
              type="submit"
              disabled={cooldown > 0}
              className="flex cursor-pointer items-center justify-center text-base font-semibold text-[#633FBB] hover:text-[#5234a3] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {cooldown > 0 ? `Resend Code (${cooldown}s)` : "Resend Code"}
            </button>
            {resendState.error && (
              <ErrorText message={resendState.error} size="xs" className="pt-2" />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
