import { Check, Clock } from "lucide-react";

export default function WelcomeCard() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 rounded-3xl border border-[#D1D1D6] bg-white p-6 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] transition-all duration-500 hover:scale-105 hover:shadow-[0px_8px_16px_0px_rgba(12,12,13,0.15)]">
      <div className="flex flex-col gap-6">
        {/* Header with Icon */}
        <div className="flex items-start gap-4">
          <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[10px] bg-[#189437]/20">
            <Check className="h-[30px] w-[30px] text-[#189437]" strokeWidth={3} />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#111827]">Welcome to your dashboard</h3>
            <p className="text-base leading-6 text-[#4B5563]">Authentication Successful</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-base leading-6 text-[#374151]">
          Congratulations! You have successfully authenticated and gained access to your personal
          dashboard. This is your central hub where you can manage your account, view important
          information, and access all the features available to authenticated users.
        </p>

        {/* Last Login */}
        <div className="flex items-center gap-[10px]">
          <Clock className="h-6 w-6 text-[#633FBB]" />
          <span className="text-base leading-6 text-[#374151]">
            <p>
              Last Login. Today at{" "}
              {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
