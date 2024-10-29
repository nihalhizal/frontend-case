"use client";

import React, { ReactNode } from "react";
import {
  RectangleTrophyIcon,
  RectangleTunnelIcon,
  RectangleTvIcon,
  TrophyIcon,
  TunnelIcon,
  TvIcon,
} from "../Icons";

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

const RowGroup = () => {
  return (
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
  );
};

export default RowGroup;
