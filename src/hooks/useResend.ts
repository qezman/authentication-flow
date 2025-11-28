"use client";
import { useEffect, useState } from "react";

export function useResend(cooldownSeconds: number) {
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => setCooldown((item) => item - 1), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  function startCooldown() {
    setCooldown(cooldownSeconds);
  }

  return { cooldown, startCooldown };
}
