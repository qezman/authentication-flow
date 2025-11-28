import VerifyCode from "../components/auth/VerifyCode";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <VerifyCode />
    </Suspense>
  );
}
