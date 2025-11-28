"use client";
import Button from "./ui/Button";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[622px] rounded-lg bg-white px-6 py-12 shadow-xl sm:px-12 md:px-[172px] md:py-[53px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-12 md:gap-[62px]">
          {/* Title */}
          <h2 className="text-center text-2xl font-bold text-black">
            Are you sure you want to logout?
          </h2>

          {/* Buttons */}
          <div className="flex w-full max-w-[236px] items-center gap-[9px]">
            <Button label="Logout" variant="danger" type="button" onClick={onConfirm} />

            {/* Cancel Button */}
            <Button variant="outline" onClick={onClose} label="Cancel" type="button" />
          </div>
        </div>
      </div>
    </div>
  );
}
