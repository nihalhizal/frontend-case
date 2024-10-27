"use client";

import React from "react";
import { DecoVideoSvg } from "../BackgroundSvg";
import Button from "../Button";
import { DoneIcon, GreenIcon, PlayIcon, RedIcon, YellowIcon } from "../Icons";

interface WhyJoinUsPageProps {}

interface List {
  key: string;
  text: string;
}

type ListItem = List[];

const listItem: ListItem = [
  {
    key: "first",
    text: "Est et in pharetra magna adipiscing ornare aliquam.",
  },
  {
    key: "second",
    text: "Tellus arcu sed consequat ac velit ut eu blandit.",
  },
  { key: "third", text: "Ullamcorper ornare in et egestas dolor orci." },
];

const WhyJoinUsPage: React.FC<WhyJoinUsPageProps> = ({}) => {
  return (
    <div>
      <div className="pt-8 absolute right-10">
        <DecoVideoSvg />
      </div>
      <div className="p-20">
        <div className="flex justify-between bg-white p-20 rounded-3xl w-[1280px] h-[496px] shadow-xl shadow-stone-300">
          <div className="flex flex-col gap-6">
            <div className="text-[#0F172A] font-extrabold text-6xl">
              Why join us
            </div>
            <div className="flex flex-col gap-2">
              {listItem.map((item: any) => (
                <div key={item.key} className="flex items-center gap-2">
                  <DoneIcon />
                  <div>{item.text}</div>
                </div>
              ))}
            </div>
            <div>
              <Button
                onClick={() => {}}
                size="medium"
                className="bg-transparent text-[#78350F] border-2 border-[#78350F] hover:text-white hover:bg-[#78350F]"
              >
                Sign up now
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-white border-4 border-white rounded-2xl w-[520px] h-[330px] shadow-lg relative">
            <div className="flex gap-1 items-end pt-3 pl-3">
              <RedIcon />
              <YellowIcon />
              <GreenIcon />
            </div>
            <div className="relative">
              <img
                src="/Video.jpeg"
                alt="Video"
                className="rounded-b-2xl w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUsPage;
