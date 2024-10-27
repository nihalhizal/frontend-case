"use client";

import React from "react";

interface WorldMapPageProps {}

const WorldMapPage: React.FC<WorldMapPageProps> = ({}) => {
  return (
    <div className="pt-20 pb-80">
      <div className="relative pl-52">
        <div className="relative flex flex-col bg-white border-4 border-white rounded-2xl w-[256px] h-[200px] shadow-custom-light">
          <div className="w-full h-full">
            <img
              src="/Sneakers.jpeg"
              alt="Sneakers"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute w-[240px] h-16 p-4 rounded bg-[#E2E8F0] text-sm -mt-2 ml-2">
          Emma Simpson collected one pair of Cool Shoes.
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-2 relative items-center justify-center">
          <div className="text-white font-extrabold text-8xl">11,658,467</div>
          <div className="text-white font-extrabold text-6xl">
            Shoes Collected
          </div>
        </div>
        <img
          src="/WorldMap.svg"
          alt="WorldMap"
          className="absolute opacity-50 pt-10"
        />
        <img src="/Ellipses.svg" alt="Ellipses" className="absolute pl-24" />
      </div>
    </div>
  );
};

export default WorldMapPage;
