"use client";

import React, { ReactNode } from "react";
import { MobileWavesSvg, WavesSvg } from "../BackgroundSvg";
import Button from "../Button";
import {
  ArrowIcon,
  GreenIcon,
  MonitorIcon,
  RedIcon,
  RocketIcon,
  SearchIcon,
  SecurityIcon,
  SensorIcon,
  SettingsIcon,
  YellowIcon,
} from "../Icons";

interface GrowYourCollectionPageProps {}

interface List {
  icon: ReactNode;
  text: string;
}

type ListItem = List[];

const listItem: ListItem = [
  {
    icon: <SecurityIcon />,
    text: "Cras eget",
  },
  {
    icon: <RocketIcon />,
    text: "Dolor pharetra",
  },
  {
    icon: <MonitorIcon />,
    text: "Amet, fringilla",
  },
  {
    icon: <SensorIcon />,
    text: "Amet nibh",
  },
  {
    icon: <SettingsIcon />,
    text: "Sed velit",
  },
];

const GrowYourCollectionPage: React.FC<GrowYourCollectionPageProps> = ({}) => {
  return (
    <div>
      <div className="absolute w-full overflow-hidden hidden xs:block">
        <MobileWavesSvg />
      </div>
      <div className="flex flex-col p-20 gap-8 xs:p-4 xs:text-center">
        <div className="text-[#0F172A] font-extrabold text-6xl xs:font-bold xs:text-3xl">
          Grow your collection
        </div>
        <div className="text-lg xs:text-base">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </div>
      </div>
      <div className="absolute w-full overflow-hidden xs:hidden">
        <WavesSvg />
      </div>
      <div className="flex gap-20 px-20 relative xs:flex-col xs:px-6 xs:gap-10">
        <div className="flex flex-col gap-8 w-[16rem]">
          <Button
            onClick={() => {}}
            size="small"
            className="bg-white shadow-custom-4"
            icon={<SearchIcon />}
            endIcon={<ArrowIcon />}
          >
            <div className="text-xl font-medium">Bibendum tellus</div>
          </Button>
          {listItem.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-4 pl-5 xs:hidden">
              {item.icon}
              <div className="text-xl font-medium">{item.text}</div>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute">
            <div className="flex gap-1 py-3 pl-3 bg-white rounded-t-2xl shadow-custom-light">
              <RedIcon />
              <YellowIcon />
              <GreenIcon />
            </div>
            <div className="flex flex-col bg-white border-4 border-white rounded-b-2xl w-[759px] h-[451px] shadow-custom-dark xs:w-[295px] xs:h-[202px]">
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
            <div className="flex gap-1 py-3 pl-3 bg-white rounded-t-2xl shadow-custom-light">
              <RedIcon />
              <YellowIcon />
              <GreenIcon />
            </div>
            <div className="flex flex-col bg-white border-4 border-white rounded-b-2xl w-[759px] h-[451px] shadow-custom-dark xs:w-[295px] xs:h-[202px]">
              <div className="relative w-full h-full">
                <img
                  src="/TabImage2.jpeg"
                  alt="TabImage2"
                  className="rounded-b-2xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative pt-48 pl-[680px] xs:pt-40 xs:pl-64">
            <div className="flex flex-col bg-white border-4 border-white rounded-2xl w-[256px] h-[286px] shadow-custom-light xs:w-[95px] xs:h-[105px]">
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
      </div>
    </div>
  );
};

export default GrowYourCollectionPage;
