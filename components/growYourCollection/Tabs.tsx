"use client";

import { GreenIcon, RedIcon, YellowIcon } from "../Icons";

const Tabs = () => {
  return (
    <div className="relative">
      <div className="absolute tab">
        <div className="flex gap-1 py-3 pl-3">
          <RedIcon />
          <YellowIcon />
          <GreenIcon />
        </div>
        <div className="w-[759px] h-[451px] xs:w-[295px] xs:h-[202px]">
          <div className="relative w-full h-full">
            <img
              src="/TabImage1.jpeg"
              alt="TabImage1"
              className="rounded-b-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute pt-24 pl-24 xs:pt-14 xs:pl-10">
        <div className="tab">
          <div className="flex gap-1 py-3 pl-3">
            <RedIcon />
            <YellowIcon />
            <GreenIcon />
          </div>
          <div className="w-[759px] h-[451px] xs:w-[295px] xs:h-[202px]">
            <div className="relative w-full h-full">
              <img
                src="/TabImage2.jpeg"
                alt="TabImage2"
                className="rounded-b-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-48 pl-[680px] xs:pt-40 xs:pl-64">
        <div className="tab w-[256px] h-[286px] xs:w-[95px] xs:h-[105px]">
          <div className="relative w-full h-full">
            <img
              src="/TabImage3.jpeg"
              alt="TabImage3"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
