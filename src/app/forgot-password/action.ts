"use server";

import { cookies } from "next/headers";

export type RequestResetState = {
  success: boolean;
  error: string | null;
  otp?: string | undefined;
};

export async function requestResetAction(
  _prev: RequestResetState,
  formData: FormData,
): Promise<RequestResetState> {
  const email = String(formData.get("email") || "");

  if (!email) {
    return { success: false, error: "Email is required.", otp: undefined };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { success: false, error: "Please enter a valid email address.", otp: undefined };
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const cookieStore = await cookies();
  cookieStore.set({
    name: "otp",
    value: otp,
    httpOnly: true,
    path: "/",
  });

  cookieStore.set({
    name: "resetEmail",
    value: email,
    httpOnly: true,
    path: "/",
  });

  const showOtp = process.env.NODE_ENV !== "production";

  return {
    success: true,
    error: null,
    otp: showOtp ? otp : undefined,
  };
}
