"use client";

import React from "react";
import Button from "../Button";
import { useQuery } from "@tanstack/react-query";
import Cards from "./Cards";
import { BackLightsSvg } from "../BackgroundSvg";

interface TheBestOfTheBestPageProps {}

interface CardData {
  title: string;
  text: string;
  imageUrl: string;
}

const TheBestOfTheBestPage: React.FC<TheBestOfTheBestPageProps> = ({}) => {
  //queries
  const { data } = useQuery({
    queryKey: ["cardsListData"],
    queryFn: () =>
      fetch("http://localhost:3000/api/card-list").then((res) => res.json()),
  });

  return (
    <div className="flex flex-col p-20">
      <div className="flex w-full justify-between relative">
        <div className="font-extrabold text-6xl text-white">
          The best of the best
        </div>
        <Button
          onClick={() => {}}
          size="large"
          className="bg-transparent text-[#FFFFFF] font-bold border-2 border-[#FFFFFF]"
        >
          Sign up now
        </Button>
      </div>
      <div className="pt-28 absolute right-6">
        <BackLightsSvg />
      </div>
      <div className="flex w-full justify-between gap-12 pt-20 relative">
        {data?.data?.map(
          ({ title, text, imageUrl }: CardData, index: number) => (
            <Cards title={title} text={text} imageUrl={imageUrl} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default TheBestOfTheBestPage;
