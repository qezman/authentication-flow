import React from "react";
import { ArrowRight } from "lucide-react";
import Cards from "@/app/data/dashboardData";

export default function CardsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {Cards.map((card) => {
        const Icon = card.icon as React.ElementType;
        return (
          <div
            key={card.id}
            className="animate-in fade-in slide-in-from-bottom-4 rounded-xl border border-[#D1D1D6] bg-white p-6 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] transition-all delay-50 duration-500 hover:scale-105 hover:shadow-[0px_8px_16px_0px_rgba(12,12,13,0.15)]"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${card.bgClass}`}
                  >
                    <Icon className={`h-6 w-6 ${card.textClass}`} />
                  </div>
                  <h3 className="flex-1 text-2xl font-bold text-[#111827]">{card.title}</h3>
                </div>
                <p className="text-base leading-6 text-[#4B5563]">{card.descp}</p>
              </div>

              <button
                className={`group flex cursor-pointer items-center justify-start gap-2 transition-colors ${card.btnClass} ${card.btnHoverClass}`}
              >
                <span className="text-base leading-6 font-semibold">{card.btnText}</span>
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
