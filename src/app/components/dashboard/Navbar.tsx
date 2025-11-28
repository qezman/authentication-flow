"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import LogoutModal from "@/app/components/LogoutModal";
import { logoutAction } from "@/app/logout/action";

export default function Navbar() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleLogout = () => {
    setShowLogoutModal(false);
    // submit server action to clear cookie, then navigate home
    formRef.current?.requestSubmit();
    router.push("/");
  };
  return (
    <>
      <nav className="mb-6 flex items-center justify-between md:mb-[32px]">
        <h1 className="text-2xl font-bold text-[#111827]">Auth-flow</h1>

        <div className="flex items-center gap-4">
          {/* User Info */}
          <div className="flex items-center gap-2 py-[11px] md:gap-[10px]">
            <img src="/dashboard/avatar.svg" alt="User avatar" className="h-10 w-10 rounded-full" />
            <span className="hidden text-lg font-bold text-[#111827] sm:inline md:text-2xl">
              John Doe
            </span>
          </div>

          {/* Logout Button */}
          <button
            type="button"
            onClick={() => setShowLogoutModal(true)}
            className="flex cursor-pointer items-center gap-[5px] rounded-lg px-[10px] py-[10px] transition-colors hover:bg-red-50"
          >
            <LogOut className="h-6 w-6 text-[#FF383C]" />
            <span className="hidden text-base leading-6 font-semibold text-[#FF383C] sm:inline">
              Logout
            </span>
          </button>
        </div>
      </nav>

      {/* hidden logout form to execute server action */}
      <form action={logoutAction} ref={formRef} className="hidden" />

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}
