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
    <div className="flex flex-col rounded-[.6rem] w-[394px] shadow-custom bg-blue">
      <div className="w-[394px] h-[220px]">
        <img
          src={imageUrl}
          alt={imageUrl}
          className="w-full h-full object-cover rounded-t-[.6rem]"
        />
      </div>
      <div className="flex flex-col gap-6 p-8">
        <p className="text-2xl font-bold text-white">{title}</p>
        <p className="text-lg text-white">{text}</p>
        <div className="w-full items-center cursor-pointer">
          <Button
            onClick={() => {}}
            size="medium"
            className="flex w-full justify-center bg-transparent text-white font-medium border-2 border-white"
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
