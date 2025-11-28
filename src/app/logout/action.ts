"use server";

import { cookies } from "next/headers";

export type LogoutAction = (formData: FormData) => Promise<void>;

export const logoutAction: LogoutAction = async (_formData) => {
  try {
    const cookieStore = await cookies();

    // clear session and reset flow cookies
    cookieStore.set({ name: "session", value: "", maxAge: 0, path: "/" });
    cookieStore.set({ name: "otp", value: "", maxAge: 0, path: "/" });
    cookieStore.set({ name: "resetEmail", value: "", maxAge: 0, path: "/" });
  } catch {}
};
