"use server";

import { cookies } from "next/headers";

export async function resendOtpAction() {
  const cookieStore = await cookies();
  const email = cookieStore.get("resetEmail")?.value;
  if (!email) return { success: false, error: "No reset email found." };

  const newOTP = Math.floor(100000 + Math.random() * 900000).toString();

  cookieStore.set({
    name: "otp",
    value: newOTP,
    httpOnly: true,
    path: "/",
  });

  const showOtp = process.env.NODE_ENV !== "production";

  return {
    success: true,
    otp: showOtp ? newOTP : undefined,
  };
}
