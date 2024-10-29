"use client";

import React from "react";

interface WorldMapPageProps {}

const WorldMapPage: React.FC<WorldMapPageProps> = ({}) => {
  return (
    <div className="pt-20 pb-80 xs:pt-40">
      <div className="relative pl-52 xs:pl-20 xs:pb-24">
        <div className="relative tab w-[256px] h-[200px]">
          <div className="w-full h-full">
            <img
              src="/Sneakers.jpeg"
              alt="Sneakers"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute w-[240px] h-16 p-4 rounded bg-lightBlue text-sm -mt-2 ml-2">
          Emma Simpson collected one pair of Cool Shoes.
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-2 relative items-center justify-center">
          <div className="text-white font-extrabold text-8xl xs:text-5xl">
            11,658,467
          </div>
          <div className="text-white font-extrabold text-6xl xs:text-3xl">
            Shoes Collected
          </div>
        </div>
        <img
          src="/WorldMap.svg"
          alt="WorldMap"
          className="absolute opacity-50 pt-10 xs:hidden"
        />
        <img
          src="/MobileWorldMap.svg"
          alt="MobileWorldMap"
          className="absolute opacity-50 pt-10 pl-14 hidden xs:block"
        />
        <img
          src="/Ellipses.svg"
          alt="Ellipses"
          className="absolute pl-24 xs:hidden"
        />
        <img
          src="/MobileEllipses.svg"
          alt="MobileEllipses"
          className="absolute pl-64 hidden xs:block"
        />
      </div>
    </div>
  );
};

export default WorldMapPage;
