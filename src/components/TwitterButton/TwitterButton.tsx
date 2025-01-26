import React from "react";
import { FaXTwitter } from "react-icons/fa6";

interface TwitterButtonType {
  type: "outline" | "base";
}

const typeOutline =
  "border border-purple-300 text-purple-300 mt-12 hover:bg-purple-500 hover:text-black";
const typeBase = "text-black bg-purple-500 hover:text-slate-700";

export default function TwitterButton({ type }: TwitterButtonType) {
  return (
    <a
      href="https://x.com/miracleainet?s=11&t=9xcMiDDUv1lBay_FkePTHA"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        className={`flex gap-2  px-10 md:px-20 py-2 tracking-widest uppercase cursor-pointer items-center ${
          type === "base" ? typeBase : typeOutline
        }`}
      >
        <FaXTwitter className="text-lg md:text-2xl" />
        <p className="text-sm md:text-base">Talk to Miracle</p>
      </div>
    </a>
  );
}
