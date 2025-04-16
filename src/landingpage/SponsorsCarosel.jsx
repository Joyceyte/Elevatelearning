import { useEffect, useState } from "react";

export default function SponsorsBanner() {
  const logos = [
    "/unimelb.png",
    "/enactus.png",
    "/map.png",
    "/blackbird.png",
    "/startmate.png",
  ];

  // Duplicate logos to make scrolling seamless
  const allLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden  bg-gradient-to-b from-orange-100 to-neutral-50 py-6">
      <div className="text-center text-gray-700 font-semibold mb-6">
        Proudly supported by our wellbeing champions at:
      </div>
      <div className="w-full">
        <div className="flex animate-scroll whitespace-nowrap gap-12">
          {allLogos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Sponsor logo"
              className="h-10 w-60 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
