"use client";

import React, { ReactNode } from "react";
import {
  MobileYellowSquareSvg,
  RectangleSvg,
  YellowSquareSvg,
} from "../BackgroundSvg";
import Button from "../Button";
import {
  RectangleTrophyIcon,
  RectangleTunnelIcon,
  RectangleTvIcon,
  TrophyIcon,
  TunnelIcon,
  TvIcon,
  VectorIcon,
} from "../Icons";

interface CollectibleSneakersPageProps {}

interface Row {
  title: string;
  text: string;
  icon?: ReactNode;
  rectangleIcon?: ReactNode;
}

type RowGroup = Row[];

const rowGroup: RowGroup = [
  {
    title: "Nibh viverra",
    text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
    icon: <TrophyIcon />,
    rectangleIcon: <RectangleTrophyIcon />,
  },
  {
    title: "Cursus amet",
    text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
    icon: <TunnelIcon />,
    rectangleIcon: <RectangleTunnelIcon />,
  },
  {
    title: "Ipsum fermentum",
    text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
    icon: <TvIcon />,
    rectangleIcon: <RectangleTvIcon />,
  },
];

const CollectibleSneakersPage: React.FC<
  CollectibleSneakersPageProps
> = ({}) => {
  return (
    <div className="pt-32 xs:pt-6">
      <div className="xs:hidden">
        <div className="absolute w-full overflow-hidden">
          <RectangleSvg />
        </div>
        <div className="absolute right-32">
          <YellowSquareSvg />
        </div>
        <div className="absolute right-4 w-[584px] h-[466px] -mt-28">
          <img
            src="/Sneaker.png"
            alt="Sneaker"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex w-full px-20 py-10 gap-20 relative xs:p-4 xs:text-center">
        <div className="flex flex-col w-[714px] gap-12">
          <div className="font-extrabold text-7xl text-[#0F172A] xs:text-[56px]">
            Collectible Sneakers
          </div>
          <div className="text-lg">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </div>
          <div className="flex font-medium text-base text-brown gap-4">
            <Button
              onClick={() => {}}
              size="medium"
              className="bg-transparent text-[#78350F] border-2 border-[#78350F] hover:text-white hover:bg-[#78350F]"
            >
              Sign up now
            </Button>
            <Button
              onClick={() => {}}
              size="medium"
              className="bg-transparent text-[#78350F]"
              icon={<VectorIcon />}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden xs:block pb-[314px] w-full">
        <div className="absolute w-full overflow-hidden top-0">
          <RectangleSvg />
        </div>
        <div className="absolute pt-8 left-1/2 transform -translate-x-1/2">
          <MobileYellowSquareSvg />
        </div>
        <div className="absolute w-[420px] h-[320px] right-0">
          <img
            src="/Sneaker.png"
            alt="Sneaker"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between relative px-20 gap-20 pt-40 pb-24 xs:flex-col xs:bg-darkYellow xs:p-4 xs:py-20">
        {rowGroup.map((row: any, index: any) => (
          <div key={index} className="flex flex-col gap-3 xs:items-center">
            <div className="relative">
              <span className="absolute top-0 left-6">{row.rectangleIcon}</span>
              <span>{row.icon}</span>
            </div>
            <div className="font-medium text-xl">{row.title}</div>
            <div className="text-lg xs:text-center">{row.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectibleSneakersPage;
