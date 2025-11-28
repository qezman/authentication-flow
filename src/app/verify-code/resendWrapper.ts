"use server";

import { resendOtpAction } from "./resendAction";

type ResendState = {
  success: boolean;
  error: string | null;
  otp?: string | undefined;
};

export async function resendWrapper(
  _prevState: ResendState,
  _formData: FormData,
): Promise<ResendState> {
  const result = await resendOtpAction();
  return {
    success: !!result.success,
    error: result.error ?? null,
    otp: (result.otp ?? undefined) as string | undefined,
  };
}
