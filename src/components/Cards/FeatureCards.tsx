import React from "react";

interface FeatureCardsTYpe {
  icon: any;
  label: string;
  description: string;
}

export default function FeatureCards({
  icon,
  label,
  description,
}: FeatureCardsTYpe) {
  return (
    <div className="p-8 bg-black rounded-md flex flex-col gap-4 shadow-md border border-zinc-800 hover:border-green-500 hover:transition-all hover:scale-110 duration-200 group">
      <div className="bg-purple-500 p-3 w-min rounded-lg">{icon}</div>
      <p className="text-base md:text-xl font-semibold group-hover:text-green-500 ">
        {label}
      </p>
      <p className="text-xs md:text-sm opacity-50">{description}</p>
    </div>
  );
}
