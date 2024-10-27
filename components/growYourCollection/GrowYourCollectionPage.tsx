"use client";

import React, { ReactNode } from "react";
import { WavesSvg } from "../BackgroundSvg";
import Button from "../Button";
import {
  ArrowIcon,
  MonitorIcon,
  RocketIcon,
  SearchIcon,
  SecurityIcon,
  SensorIcon,
  SettingsIcon,
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
      <div className="flex flex-col p-20 gap-8">
        <div className="text-[#0F172A] font-extrabold text-6xl">
          Grow your collection
        </div>
        <div className="text-lg">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </div>
      </div>
      <div className="pt-8 absolute">
        <WavesSvg />
      </div>
      <div className="flex px-20">
        <div className="flex flex-col gap-8 w-[16rem]">
          <Button
            onClick={() => {}}
            size="medium"
            className="bg-white shadow-md shadow-stone-300"
            icon={<SearchIcon />}
            endIcon={<ArrowIcon />}
          >
            <div className="text-xl font-medium">Bibendum tellus</div>
          </Button>
          {listItem.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-4 pl-5">
              {item.icon}
              <div className="text-xl font-medium">{item.text}</div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default GrowYourCollectionPage;
