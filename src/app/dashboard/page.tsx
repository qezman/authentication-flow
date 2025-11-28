import React from "react";
import Navbar from "@/app/components/dashboard/Navbar";
import WelcomeCard from "@/app/components/dashboard/WelcomeCard";
import QuickSupportCard from "@/app/components/dashboard/QuickSupportCard";
import CardsGrid from "@/app/components/dashboard/CardsGrid";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F1ECFF] px-4 py-6 md:px-16">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <div className="rounded-3xl bg-[#F9FAFB] px-6 py-12 md:px-16 md:py-12">
        <div className="mx-auto flex max-w-[1089px] flex-col gap-12 md:gap-20">
          {/* Dashboard Header */}
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-3xl font-bold text-[#111827]">Dashboard</h2>
            <p className="text-base leading-6 text-[#111827]">You are logged in!</p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col gap-12 md:gap-[50px]">
            {/* Top Row: Welcome Card + Quick Support */}
            <div className="grid grid-cols-1 gap-6 md:gap-[30px] lg:grid-cols-[1fr_auto]">
              <WelcomeCard />
              <QuickSupportCard />
            </div>

            {/* Bottom Row: Cards */}
            <CardsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
