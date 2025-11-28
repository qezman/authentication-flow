"use server";

import { cookies } from "next/headers";

export type VerifyOtpState = {
  success: boolean;
  error?: string | null;
  generatedOtp?: string | null;
};

export async function verifyOtpAction(
  prevState: VerifyOtpState,
  formData: FormData,
): Promise<VerifyOtpState> {
  const otpInput = String(formData.get("otp") || "");

  // validate format
  if (!otpInput || otpInput.length !== 6 || !/^\d{6}$/.test(otpInput)) {
    return {
      success: false,
      error: "Please enter a valid 6-digit code.",
      generatedOtp: null,
    };
  }

  const cookieStore = await cookies();
  const storedOtp = cookieStore.get("otp")?.value || null;

  if (!storedOtp) {
    return {
      success: false,
      error: "OTP expired. Please request a new code.",
      generatedOtp: null,
    };
  }

  // wrong OTP
  if (otpInput !== storedOtp) {
    return {
      success: false,
      error: "Incorrect OTP. Please try again.",
      generatedOtp: storedOtp, // for testing
    };
  }

  // OTP correct → create session cookie
  cookieStore.set({
    name: "session",
    value: "valid",
    httpOnly: true,
    path: "/",
  });

  // clear reset cookies
  cookieStore.set({
    name: "otp",
    value: "",
    maxAge: 0,
    path: "/",
  });

  cookieStore.set({
    name: "resetEmail",
    value: "",
    maxAge: 0,
    path: "/",
  });

  return {
    success: true,
    error: null,
    generatedOtp: null,
  };
}
