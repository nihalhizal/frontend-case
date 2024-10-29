"use client";

import {
  MobileYellowSquareSvg,
  RectangleSvg,
  YellowSquareSvg,
} from "../BackgroundSvg";
import MainContent from "./MainContent";
import RowGroup from "./RowGroup";

interface CollectibleSneakersPageProps {}

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
      <MainContent />
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
      <RowGroup />
    </div>
  );
};

export default CollectibleSneakersPage;
