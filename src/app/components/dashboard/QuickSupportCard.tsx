import { Bell, Shield, User } from "lucide-react";

export default function QuickSupportCard() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 rounded-xl border border-[#D1D1D6] bg-white p-6 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] transition-all delay-75 duration-500 hover:scale-105 hover:shadow-[0px_8px_16px_0px_rgba(12,12,13,0.15)] lg:w-[351px]">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-[#111827]">Quick Support</h3>

        {/* Support Items */}
        <div className="flex flex-col gap-5">
          {/* Profile */}
          <div className="flex items-center gap-[10px]">
            <div className="flex h-[33px] w-[33px] items-center justify-center rounded-[5.5px] bg-[#633FBB]/20">
              <User className="h-[17px] w-[17px] text-[#633FBB]" />
            </div>
            <span className="flex-1 text-base leading-6 text-[#111827]">Profile</span>
            <span className="text-sm font-semibold text-[#189437]">Complete</span>
          </div>

          {/* Security */}
          <div className="flex items-center gap-[10px]">
            <div className="flex h-[33px] w-[33px] items-center justify-center rounded-[5.5px] bg-[#0088FF]/20">
              <Shield className="h-[17px] w-[17px] text-[#0088FF]" />
            </div>
            <span className="flex-1 text-base leading-6 text-[#111827]">Security</span>
            <span className="text-sm font-semibold text-[#189437]">Active</span>
          </div>

          {/* Notification */}
          <div className="flex items-center gap-[10px]">
            <div className="flex h-[33px] w-[33px] items-center justify-center rounded-[5.5px] bg-[#FF8D28]/20">
              <Bell className="h-[17px] w-[17px] text-[#FF8D28]" />
            </div>
            <span className="flex-1 text-base leading-6 text-[#111827]">Notification</span>
            <span className="text-sm font-semibold text-[#189437]">3 new</span>
          </div>
        </div>
      </div>
    </div>
  );
}
