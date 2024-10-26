"use client";

import Button from "../Button";
import { BuyIcon } from "../Icons";

type CardsProps = {
  imageUrl: string;
  title: string;
  text: string;
};

const Cards = (props: CardsProps) => {
  const { imageUrl, title, text } = props;

  return (
    <div className="flex flex-col rounded-[.6rem] w-[24rem] gap-8">
      <img
        src={imageUrl}
        alt={imageUrl}
        className="w-full max-w-full rounded-[.6rem]"
      />
      <div className="flex flex-col gap-4">
        <p className="text-sm lg:text-[1.25rem] text-[#FFFFFFB2] leading-[16.40px] lg:leading-[23.40px]">
          {title}
        </p>
        <p className="text-xs lg:text-sm text-[#FFFFFFB2] leading-4 lg:leading-5">
          {text}
        </p>
        <div className="flex items-center mt-auto cursor-pointer">
          <Button
            onClick={() => {}}
            size="medium"
            className="bg-transparent text-[#FFFFFF] font-medium border-2 border-[#FFFFFF]"
            icon={<BuyIcon />}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
