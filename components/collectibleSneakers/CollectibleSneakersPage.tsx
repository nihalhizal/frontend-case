"use client";

import React, { ReactNode } from "react";
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
  key: string;
  title: string;
  text: string;
  icon?: ReactNode;
  rectangleIcon?: ReactNode;
}

type RowGroup = Row[];

const rowGroup: RowGroup = [
  {
    key: "firstRow",
    title: "Nibh viverra",
    text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
    icon: <TrophyIcon />,
    rectangleIcon: <RectangleTrophyIcon />,
  },
  {
    key: "secondRow",
    title: "Cursus amet",
    text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
    icon: <TunnelIcon />,
    rectangleIcon: <RectangleTunnelIcon />,
  },
  {
    key: "thirdRow",
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
    <div>
      <div className="flex w-full p-20 gap-20 pt-36">
        <div className="flex flex-col w-[714px] gap-12">
          <div className="font-extrabold text-7xl text-[#0F172A]">
            Collectible Sneakers
          </div>
          <div className="text-lg">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </div>
          <div className="flex font-medium text-base text-brown gap-4 relative">
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
        <div>
          <img
            src="/Rectangle.png"
            alt="Rectangle"
            className="absolute -bottom-80 right-0"
          />
          <img
            src="/YellowSquare.png"
            alt="Yellow Square"
            className="absolute top-52 right-36"
          />
          <img
            src="/Sneaker.png"
            alt="Sneaker"
            className="absolute top-40 right-20"
          />
        </div>
      </div>
      <div className="flex justify-between relative p-20 gap-20 pt-40">
        {rowGroup.map((row: any) => (
          <div key={row.key} className="flex flex-col gap-2.5">
            <div className="relative">
              <span className="absolute top-0 left-6 transform translate-x-1 -translate-y-1">
                {row.rectangleIcon}
              </span>
              <span>{row.icon}</span>
            </div>
            <div className="font-medium text-xl">{row.title}</div>
            <div className="text-lg">{row.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectibleSneakersPage;
