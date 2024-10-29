"use client";

import { GreenIcon, PlayIcon, RedIcon, YellowIcon } from "../Icons";

const VideoTab = () => {
  return (
    <div className="relative tab">
      <div className="flex gap-1 py-3 pl-3">
        <RedIcon />
        <YellowIcon />
        <GreenIcon />
      </div>
      <div className="w-[520px] h-[309px] xs:w-[353px] xs:h-[235px]">
        <div className="relative w-full h-full">
          <img
            src="/Video.jpeg"
            alt="Video"
            className="rounded-b-2xl w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button>
              <PlayIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTab;
