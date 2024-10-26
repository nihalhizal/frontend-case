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
    <div className="flex flex-col rounded-[.6rem] w-[24rem] shadow-2xl shadow-slate-600 bg-blue">
      <img
        src={imageUrl}
        alt={imageUrl}
        className="w-full max-w-full rounded-t-[.6rem]"
      />
      <div className="flex flex-col gap-4 p-8">
        <p className="text-2xl font-bold text-[#FFFFFF]">{title}</p>
        <p className="text-lg text-[#FFFFFF]">{text}</p>
        <div className="w-full items-center cursor-pointer">
          <Button
            onClick={() => {}}
            size="medium"
            className="flex w-full justify-center bg-transparent text-[#FFFFFF] font-medium border-2 border-[#FFFFFF]"
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
