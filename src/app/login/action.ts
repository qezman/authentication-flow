"use server";

import { cookies } from "next/headers";

export type LoginActionState = {
  success: boolean;
  error?: string | null;
};

export async function loginAction(
  prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  // validate required fields
  if (!email || !password) {
    return { success: false, error: "Email and password are required." };
  }

  // validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // validate password length
  if (password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters." };
  }

  // set session cookie
  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: "valid",
    httpOnly: true,
    path: "/",
  });

  return { success: true, error: null };
}
