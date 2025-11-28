"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import InputField from "../ui/Input";
import ErrorText from "../ui/ErrorText";
import { useFormState } from "react-dom";
import { loginAction } from "@/app/login/action";
import { useRouter } from "next/navigation";
import RHSLogo from "../dashboard/RHSLogo";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, formAction] = useFormState(loginAction, { success: false, error: null });

  useEffect(() => {
    if (state.success) {
      router.push("/dashboard");
    }
  }, [state.success, router]);

  return (
    <section className="flex h-dvh w-full items-center justify-center bg-[rgba(99,63,187,0.10)] p-4 md:p-16 lg:h-screen lg:overflow-hidden">
      <div className="flex w-full max-w-[1312px] flex-col overflow-hidden rounded-3xl bg-white lg:flex-row">
        {/* LHS - Login Form */}
        <div className="flex w-full flex-col bg-[#F4F5F9] px-6 py-4 sm:px-12 md:px-16 md:py-8 lg:w-1/2 lg:px-[106px]">
          <form
            action={formAction}
            className="mx-auto flex w-full max-w-[442px] flex-1 flex-col justify-between gap-8"
          >
            {/* Welcome Section */}
            <div className="flex w-full flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="text-2xl font-bold text-[#111827]">Welcome back</h2>
                <p className="text-base leading-6 text-[#111827]">
                  Welcome back! Please enter your details
                </p>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-7">
                {/* Email Field */}
                <InputField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password Field */}
                <InputField
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  isPassword
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Login Button */}
              <Button type="submit" variant="primary" label="Log In" />
            </div>

            {state.error && <ErrorText message={state.error} />}

            <aside className="space-y-3">
              {/* Forgot Password? */}
              <div className="flex items-center justify-center gap-1 text-base">
                <Link href="/forgot-password" className="font-semibold text-black hover:underline">
                  Forgot Password?
                </Link>
              </div>

              {/* Sign Up Link */}
              <div className="flex items-center justify-center gap-1 text-base">
                <span className="text-center leading-6 text-[#111827]">Don't have an account?</span>
                <Link
                  aria-disabled
                  href="#"
                  className="cursor-not-allowed font-semibold text-black hover:underline"
                >
                  Sign up
                </Link>
              </div>
            </aside>
          </form>
        </div>

        {/* RHS - LOGO */}
        <RHSLogo />
      </div>
    </section>
  );
}
