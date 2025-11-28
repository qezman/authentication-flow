import { Check, Settings as SettingsIcon, Headphones } from "lucide-react";

const Cards = [
  {
    id: 1,
    title: "Analysis",
    icon: Check,
    bgClass: "bg-[#633FBB]/20",
    textClass: "text-[#633FBB]",
    btnClass: "text-[#633FBB]",
    btnHoverClass: "hover:text-[#5234a3]",
    descp: "View your usage statistics and performance metrics.",
    btnText: "View Details",
  },
  {
    id: 2,
    title: "Settings",
    icon: SettingsIcon,
    bgClass: "bg-[#34C759]/20",
    textClass: "text-[#189437]",
    btnClass: "text-[#189437]",
    btnHoverClass: "hover:text-[#147a2e]",
    descp: "Customize your account preferences and metrics.",
    btnText: "Configure",
  },
  {
    id: 3,
    title: "Support",
    icon: Headphones,
    bgClass: "bg-[#FF383C]/20",
    textClass: "text-[#FF383C]",
    btnClass: "text-[#FF383C]",
    btnHoverClass: "hover:text-[#e6333d]",
    descp: "Get help and access our comprehensive documentation.",
    btnText: "Get Help",
  },
];
export default Cards;
